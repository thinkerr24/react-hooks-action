import React, { useState } from 'react';

const FuncComp = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span>
                Hello, {props.ctype}.
                count = {count}
            </span>
            &nbsp; &nbsp;
            <button onClick={() => setCount(count + 1)}>add count</button>
        </div>
    );
}

export default FuncComp;