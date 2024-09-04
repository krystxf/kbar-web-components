import React from 'react';
import { createComponent } from '@lit/react';
import { KbarSearch as _KbarSearch } from 'kbar-web-components';

export const KbarSearch = createComponent({
    tagName: 'kbar-search',
    elementClass: _KbarSearch,
    react: React,
});
