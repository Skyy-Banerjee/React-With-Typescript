//import { type PropsWithChildren } from 'react';

  // <main>
  //   <Component name="skyy" id={123} />
  //   <Component name="Soumadip" id={456}>
  //     <h2>Children Prop 👶🏻</h2>
  //   </Component>
  // </main>;

type ComponentProps = {
  name: string;
  id: number;
   children?: React.ReactNode;
};

// type ComponentProps = PropsWithChildren <{
//   name: string;
//   id: number;
// }>;

function Component({name, id, children}:ComponentProps) {

  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
