import React, { useEffect, useReducer, useRef } from 'react';

const Input = React.forwardRef((props, ref) =>  {
    return <input ref={ref}/>
})
export default function RefDemo() {
    const aref = useReducer();
    useEffect(() => {
        aref.current.focus();
        // deliver value
        aref.current.value = "hello, world";
    }, []);

    return (
        <div>
            <Input ref={aref}/>
        </div>
    );
} 