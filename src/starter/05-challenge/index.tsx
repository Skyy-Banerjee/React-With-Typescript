type Basic = {
  type: 'basic'
  name: string,
}

type Advanced = {
  type: 'advance',
  name: string,
  email: string,
}

type PropsType = Basic | Advanced;



function Component(props: PropsType) {
  if(props.type==='basic'){
    return (
      <>
      <h2>{props.name}</h2>
      </>
    )
  }
  if(props.type==='advance'){
    return (
      <>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
      </>
    )
  }
}
export default Component;
