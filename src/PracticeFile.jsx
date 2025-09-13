
function Practice(props){
  const {years, ...rest} = props
  return(
    <p>{rest.info.name} {rest.info.model} was released in {years[0]}</p>
  )
}

export default Practice;
