import { useState } from "react";

function Component() {
  const [txt, setTxt] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(evt.target.value);
    setEmail(evt.target.value);   
  }

  type Person = {
    name: string;
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>){
    evt.preventDefault();
    const formData= new FormData(evt.currentTarget);
    //const formData= new FormData(evt.target as HTMLFormElement);
    //const formData= new FormData(evt.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get('text') as string;
    const person: Person = {name:data.text as string};
  }

  return (
    <section>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <form className="form" onSubmit={handleSubmit}>
      <input type="text" className="form-input mb-1" value={txt} onChange={(evt)=> setTxt(evt.target.value)} name="text"/>
      <input type="email" className="form-input mb-1" value={email} onChange={(handleChange)} name="email"/>
      <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
