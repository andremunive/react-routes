import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = () =>{
    

    const [selectedButton, setSelectedButton] = useState(0)

    return(
        <div className="sidebar">
            <ul className="ulSidebar">
                <li className="liSidebar">
                    <Link to="/"> 
                        <button onClick={()=> {
                            setSelectedButton(0)
                        }} className={selectedButton===0 ? 'sidebarButtonSelected': 'sidebarButton'} >Crear producto </button>  
                    </Link>

                </li>
                <li className="liSidebar">
                    <Link to="/new">
                        <button 
                            onClick={()=> {
                            setSelectedButton(1)
                        }} className={selectedButton===1 ? 'sidebarButtonSelected': 'sidebarButton'}>Orden de producción</button>
                    </Link>
                </li>
                <li className="liSidebar">
                    <Link to="/cancel"><button onClick={()=> {
                            setSelectedButton(2)
                        }} className={selectedButton===2 ? 'sidebarButtonSelected': 'sidebarButton'}>Cancelar orden</button></Link>
                </li>
                <li className="liSidebar">
                    <Link to="/report"><button onClick={()=> {
                            setSelectedButton(3)
                        }} className={selectedButton===3 ? 'sidebarButtonSelected': 'sidebarButton'} >Reportes</button></Link>
                </li>
            </ul>
        </div>
    )
}

export {SideBar};