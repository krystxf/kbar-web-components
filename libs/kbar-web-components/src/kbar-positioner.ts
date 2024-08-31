import { ContextConsumer } from '@lit/context';
import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { kbarContext } from './kbar-context';

@customElement('kbar-positioner')
export class KbarPositioner extends LitElement {
    static styles = css`
        .positioner {
            position: fixed;

            top: 25vh;
            left: 50vw;
            right: 50vw;

            animation: appear 0.1s ease-in-out;
        }

        @keyframes appear {
            0% {
                transform: translateY(4rem);
            }

            100% {
                transform: translateY(0);
            }
        }
    `;

    private _isOpen = new ContextConsumer(this, { context: kbarContext, subscribe: true });

    render() {
        if (!this._isOpen?.value) {
            return null;
        }

        return html`
            <div class="positioner">
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-positioner': KbarPositioner;
    }
}
