import React from 'react';
import { createComponent } from '@lit/react';
import { KbarProvider as _KbarProvider } from 'kbar-web-components';

export const KbarProvider = createComponent({
    tagName: 'kbar-provider',
    elementClass: _KbarProvider,
    react: React,
});
