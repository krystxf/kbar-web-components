import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ContextConsumer } from '@lit/context';
import { kbarContext } from './kbar-context';

@customElement('kbar-overlay')
export class KbarOverlay extends LitElement {
    static styles = css`
        .overlay {
            background-color: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(0.125rem);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            animation: appear 0.1s ease-in-out;
        }

        @keyframes appear {
            0% {
                opacity: 0;
                backdrop-filter: blur(0);
            }

            100% {
                opacity: 1;
                backdrop-filter: blur(0.125rem);
            }
        }
    `;

    private _isOpen = new ContextConsumer(this, { context: kbarContext, subscribe: true });

    render() {
        if (!this._isOpen?.value) {
            return null;
        }

        return html` <div class="overlay" @click=${this.onClick}></div> `;
    }

    onClick() {
        console.log('click overlay');
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-overlay': KbarOverlay;
    }
}
