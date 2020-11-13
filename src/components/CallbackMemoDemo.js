import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default function CallbackMemoDemo() {
    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
            console.log("count changing");
        }, 1000);
        setInterval(() => {
            setOtherCount(otherCount => otherCount + 1);
        }, 300);
    },[]);
    const result = useMemo(() => {
        console.log("result calculating");
        return count * 100;
    }, [count]);
    const handleClick = useCallback(() => console.log("CallbackMemoDemo click:", count), []);
    return <div onClick={handleClick}>
        {otherCount}--{count}--{result}
    </div>
}