import React from 'react'

export const AboutPageAsync = React.lazy(async () => await new Promise(resolve => {
    // @ts-expect-error
    // For example only
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
