import { useState, useEffect, useDebugValue } from 'react'

const useIsRaining = () => {
    const [isRaining, setIsRaining] = useState(false)

    useEffect(() => {
        setIsRaining(Math.random() > 0.5)
    })

    useDebugValue(isRaining ? 'Is Raining' : 'Is Not Raining')
    return isRaining
}

const DebugValueComponent = () => {
    const isRaining = useIsRaining()

    return (
        <div>
            <h1>useDebugValue Example</h1>
            <h2>Do you need a coat today? {isRaining ? 'yes' : 'maybe'}</h2>
        </div>
    )
}

export default DebugValueComponent
