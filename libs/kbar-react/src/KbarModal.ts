import React from 'react';
import { createComponent } from '@lit/react';
import { KbarModal as _KbarModal } from 'kbar-web-components';

export const KbarModal = createComponent({
    tagName: 'kbar-modal',
    elementClass: _KbarModal,
    react: React,
});
