import React from 'react'

export const MainPageAsync = React.lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    // For example only
    setTimeout(() => { resolve(import('./MainPage')) }, 1500)
}))
