import React from 'react';
import { createComponent } from '@lit/react';
import { KbarResults as _KbarResults } from 'kbar-web-components';

export const KbarResults = createComponent({
    tagName: 'kbar-results',
    elementClass: _KbarResults,
    react: React,
});
