import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// FOR TEST ONLY!!!
export const BugButton = () => {
    const [error, setError] = useState(false)

    const onThrowError = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrowError}>
            Throw Error!
        </Button>
    )
}
