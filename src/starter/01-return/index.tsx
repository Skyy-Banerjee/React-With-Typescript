// return types with TS in React
function Component():JSX.Element | null | string {
  return "hello"; //string
  return null; //null
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
export default Component;
