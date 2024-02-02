import React from 'react';

export const AboutPageAsync = React.lazy(() => new Promise( resolve => {
    // @ts-ignore
    // For example only
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}))