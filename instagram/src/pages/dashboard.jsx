import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import Timeline from "../components/Timeline";


export default function Dashboard() {
    const [count, setCount] = useState(3);
    return ( 
        <>
        <button onClick={()=>setCount(count+1)}>{count}</button>
            <Header></Header>
          
            <div className="grid grid-cols-3 gap-4  justify-between mx-auto max-w-screen-lg ">
                <Timeline></Timeline>
                <Sidebar></Sidebar>
            </div>
        </>
     );
}

