import React from 'react';

export const MainPageAsync = React.lazy(() => new Promise(resolve => {
    // @ts-ignore
    // For example only
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));