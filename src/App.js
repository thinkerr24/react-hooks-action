import { useState } from "react";
import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
       <ClassComp ctype={"ClassComp"}/>
       <hr />
       <button onClick={() => setIsVisible(!isVisible)}>函数组件{isVisible ? '隐藏' : '显示'}</button>
       {isVisible && <FuncComp ctype={"FuncComp"} /> }
    </div>
  );
}

export default App;
