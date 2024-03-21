import useIncrementCounter from "./hooks/useIncrementCounter"

export default function App(){
 const {stateCount, handleClick} = useIncrementCounter(0, 1);
 console.log("statecount", stateCount);
  return(<>
  <button onClick={handleClick}>{stateCount}</button>
  <Button/>
  </>)
}

const Button = ()=>{
  const {stateCount, handleClick} = useIncrementCounter(4, 3);
  return(
    <button onClick={handleClick}>Increase by 4: {stateCount}</button>
  )
}