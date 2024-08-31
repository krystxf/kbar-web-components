import { ContextConsumer } from '@lit/context';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { kbarContext } from './kbar-context';

@customElement('kbar-search')
export class KbarSearch extends LitElement {
    @query('.search') searchInput!: HTMLInputElement;

    @state() private _isOpen: Boolean = false;
    // @ts-ignore - unused property
    private _contextConsumer = new ContextConsumer(this, {
        context: kbarContext,
        subscribe: true,
        callback: (value: Boolean) => {
            this._isOpen = value;
        },
    });

    static styles = css`
        .search {
            width: calc(100% - 2rem - 4px);
            padding: 0.5rem 1rem;
            margin: 2px;
            border: 0;
            border-radius: calc(0.5rem - 2px);
            display: block;
        }
    `;

    render() {
        return html` <input autofocus class="search" /> `;
    }

    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (!changedProperties.has('_isOpen')) {
            return;
        }
        if (!this._isOpen) {
            return;
        }

        this.searchInput.focus();
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'kbar-search': KbarSearch;
    }
}
