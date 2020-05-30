import React, { useState } from "react"

const Test = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div style={{ margin: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{count}</h1>
            <button onClick={() => setCount( count + 1 )}>Increase by 1</button>
        </div>
    )
}

export default Test