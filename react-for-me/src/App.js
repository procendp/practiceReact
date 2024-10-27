import { useState, useEffect } from "react";

function Hello() {
  function byeFn() {
    console.log("Bye :(");
  }
  function hiFn() {
    console.log("Hi :)");
    return byeFn; // component가 파괴될 때도 function을 실행하고 싶다면 byeFn을 return 해야함
  }
  useEffect(hiFn, []); // useEffect에서 function 받고, 이 function은 dependency가 변화할 때 호출됨
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev); // setShowing 통해서 이전 value 받아오고, 그 value의 반대값 return
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
