import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";


export default function Dashboard() {
    
    return ( 
        <>
            <Header></Header>
            <div className="grid">
                <Timeline></Timeline>
                <Sidebar></Sidebar>
            </div>
        </>
     );
}

