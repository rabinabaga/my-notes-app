import { useState } from "react";

export default  function useIncrementCounter(state, addThis){
    let [stateCount, setStateCount] = useState(state);

    const handleClick = ()=>{
        setStateCount(stateCount+ addThis);
    }

    return {stateCount, handleClick};
}