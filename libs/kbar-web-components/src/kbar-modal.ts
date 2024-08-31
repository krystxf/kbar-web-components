import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kbar-modal')
export class KbarModal extends LitElement {
    static styles = css`
        .modal {
            background-color: white;
            display: flex;
            flex-direction: column;
            min-width: 600px;
            transform: translateX(-50%);

            animation: appear 0.1s ease-in-out;

            border-radius: 0.5rem;
            box-shadow:
                0 1px 3px 0 rgb(0 0 0 / 0.1),
                0 1px 2px -1px rgb(0 0 0 / 0.1);
        }

        @keyframes appear {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    `;

    render() {
        return html`
            <div class="modal">
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-modal': KbarModal;
    }
}
