import { useState } from 'react'

const StateComponent = () => {
    const [isGreen, setIsGreen] = useState(true)

    return (
        <h1 
            onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? 'limegreen' : 'crimson' }}
        >
            useState Example (click me to see it :D)
        </h1>
    )
}

export default StateComponent