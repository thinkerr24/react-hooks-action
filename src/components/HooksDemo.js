import React, { useCallback, useState } from 'react';
import useUsers from "../hooks/useUsers";
import useDetail from "../hooks/useDetail";

export default function HooksDemo() {
    const users = useUsers();
    const [currentIndex, setCurrentIndex] = useState(-1);
    const detail = useDetail(users, [currentIndex]);
    //  const handleClick = index => { setCurrentIndex(index) };
    const handleClick = useCallback(index => { setCurrentIndex(index) }, []);
    return users.length === 0 ? 'Loading!' :
        (
            <div style={{display: 'flex'}}>
                <ul style={{width: 300, cursor: 'pointer'}}>
                    {users.map((e, index) =>
                        (<li style={{backgroundColor: index === currentIndex ? '#00b388' : ''}} key={e.email} onClick={() => handleClick(index)}>{e.name.first}---{e.dob.age}</li>))
                    }
                </ul>
                <div>
                    <img src={detail} alt=""/>
                </div>
                {/* <div dangerouslySetInnerHTML={{__html: xxxhtmlstring}}></div> */}
            </div>
        )
}