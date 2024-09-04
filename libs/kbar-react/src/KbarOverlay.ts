import React from 'react';
import { createComponent } from '@lit/react';
import { KbarOverlay as _KbarOverlay } from 'kbar-web-components';

export const KbarOverlay = createComponent({
    tagName: 'kbar-overlay',
    elementClass: _KbarOverlay,
    react: React,
});
