import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
// Conceptual Question: useEffect is used for side effects (e.g., fetching data, updating DOM). Example:
useEffect(() => {
    // Fetch data or interact with DOM here
}, [dependency]);
