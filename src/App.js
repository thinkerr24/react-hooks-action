import ClassComp from "./components/ClassComp";
import FuncComp from "./components/FuncComp";

function App() {
  return (
    <div>
       <ClassComp ctype={"ClassComp"}/>
       <hr />
       <FuncComp ctype={"FuncComp"} />
    </div>
  );
}

export default App;
