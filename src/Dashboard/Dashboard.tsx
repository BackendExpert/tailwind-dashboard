import IonIcon from "@reacticons/ionicons"
import { useState } from "react";
import { Link } from "react-router-dom"


const Dashboard = () => {
    const menus = [
        {name: "Dashboard", link: "/Dashboard", icon: "speedometer"},
        {name: "Users", link: "/Dashboard", icon: "people"},
        {name: "Messages", link: "/Dashboard", icon: "mail"},
        {name: "Saved", link: "/Dashboard", icon: "heart"},
        {name: "Setting", link: "/Dashboard", icon: "settings"},
    ];

    const [menuopen, OpenMenu] = useState(true);
    
  return (
    <div className="flex gap-6">
        <div className={`bg-gray-800 min-h-screen ${menuopen? 'w-72' : 'w-16'} duration-500 text-white px-4`}>
            <div className="py-3 flex justify-end md:visible invisible" onClick={() => OpenMenu(!menuopen)}>
                <IonIcon name="menu" size="large"></IonIcon>
            </div>
            {
                menus?.map((menus, i) => (
                    <Link to={menus?.link} key={i} className={`flex item-center text-xl gap-2 py-2 duration-500 ${menuopen? 'hover:bg-gray-700 rounded':'hover:none'}`}>
                        <div className="my-2 flex gap-4 relative font-mono">
                            <div className="pl-2 pr-4 pt-[2px]"><IonIcon name={menus?.icon}></IonIcon></div>
                            <h2 className={`whitespace-pre duration-500 ${!menuopen && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menus?.name}</h2>
                        </div>
                    </Link>
                ))
            }


        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
    </div>
  )
}

export default Dashboard