import { useEffect } from "react";

function Notfound() {
    useEffect(()=>{
        document.title("Not-Found- Instagram");
    },[])
    return ( <>
        <p className="text-2xl max-w-screen-md mx-auto">Not Found</p>
    </> );
}

export default Notfound;