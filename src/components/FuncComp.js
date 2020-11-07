import React, { useEffect, useState } from 'react';

const FuncComp = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count % 2 === 0) {
            console.log("In FuncComp:" + count);
        }
    }, [count]);

    useEffect(() => {
        console.log("Functional component mounted!");
        const handleClick = () => console.log("handleClick");
        document.addEventListener("click", handleClick);
        return () => {
            console.log("Functional component unmounted!");
            document.removeEventListener("click", handleClick);
        }
    }, []);

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