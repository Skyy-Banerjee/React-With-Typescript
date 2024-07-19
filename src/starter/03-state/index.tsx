import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
}

// const navLinks: Link[] = [
const navLinks= [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "React Docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "React Router Docs",
  },
  {
    id: 3,
    url: "https://www.typescriptlang.org",
    text: "Typescript Docs",
  },
];

function Component() {
  const [text, setText] = useState('some str..');
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks)
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center" onClick={()=>{setText('setting txt'); setList(['hey','there']); setLinks([...links, {id:4, url:'my_instagram', text:'www.instagram.com/skyy_banerjee'}])}}>click me</button>
      <h2>State</h2>
      <h2>State: {text}</h2>
      <h2>Arr: {list[1]}</h2>
    </div>
  );
}
export default Component;
