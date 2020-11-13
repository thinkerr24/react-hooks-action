import  {useEffect, useState} from 'react';
export default function useDetail(params, deps) {
    const [detail, setDetail] = useState("");
    useEffect(() => {
        const [currentIndex] = deps; 
        currentIndex === -1 ? setDetail("") :
        setDetail(params[currentIndex].picture.medium);
    }, deps);
    return detail;
}