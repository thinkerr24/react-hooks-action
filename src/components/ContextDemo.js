//import React, { useContext, useState } from "react";
import React, { useState } from "react";
const themeContext = React.createContext('');
const Demo = () => {
    return <div>
        <Child />
    </div>
}

const Child = () => {
    // const bgColor = useContext(themeContext);
    // const style = {
    //     backgroundColor: bgColor
    // }
    // return (<div style={style}>Child</div>)
    return <themeContext.Consumer>
        {value => <div style={{ backgroundColor: value }}>Child</div>}
    </themeContext.Consumer>
}
export default function ContextDemo() {
    const [bgColor, setBgColor] = useState("#000"); // black background color
    return (
        <div>
            {/* <button onClick={() => setBgColor("red")}>ChangeColor</button> */}
            <input type="color" onChange={e => setBgColor(e.target.value)} />
            <themeContext.Provider value={bgColor}>
                <Demo />
            </themeContext.Provider>
        </div>
    );
}