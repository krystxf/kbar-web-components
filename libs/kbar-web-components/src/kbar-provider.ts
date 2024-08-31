import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { provide } from '@lit/context';
import { kbarContext } from './kbar-context';

@customElement('kbar-provider')
export class KbarProvider extends LitElement {
    @property()
    setIsOpen = (isOpen: boolean) => {
        this.kbarContext = isOpen;
        console.log('setIsOpen', isOpen);
    };

    @provide({ context: kbarContext })
    @property({ attribute: false })
    kbarContext = true;

    constructor() {
        super();
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('keydown', this.handleKeyDown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e: KeyboardEvent) {
        const isEscape = e.key === 'Escape';

        const isCtrlK = e.ctrlKey && e.key === 'k';
        const isCmdK = e.metaKey && e.key === 'k';
        const isTrigger = isCtrlK || isCmdK;

        if (isTrigger && !this.kbarContext) {
            e.preventDefault();
            this.setIsOpen(true);
        } else if (isEscape && this.kbarContext) {
            e.preventDefault();
            this.setIsOpen(false);
        }
    }

    render() {
        return html` <slot> </slot> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-provider': KbarProvider;
    }
}
