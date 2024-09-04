import React from 'react';
import { createComponent } from '@lit/react';
import { KbarPositioner as _KbarPositioner } from '@kbar/web-components';

export const KbarPositioner = createComponent({
    tagName: 'kbar-positioner',
    elementClass: _KbarPositioner,
    react: React,
});
