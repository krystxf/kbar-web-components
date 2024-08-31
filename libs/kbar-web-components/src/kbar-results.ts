import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('kbar-results')
export class KbarResults extends LitElement {
    static styles = css`
        .results {
            height: 300px;
        }
    `;
    render() {
        return html` <ul class="results"></ul>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-results': KbarResults;
    }
}
