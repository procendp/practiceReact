import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []); // [] : empty 상태.. 코드 한 번만 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.", keyword);
  }, [keyword]); // keyword를 지켜봐!!!  - keyword가 변화할 때만 코드 실행.. 이전처럼 counter 바뀔 때 같이 실행되지 않음
  useEffect(() => {
    console.log("I run when 'counter' changes.", keyword);
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes.", keyword);
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
