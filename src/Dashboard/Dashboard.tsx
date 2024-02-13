import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"


const Dashboard = () => {
    const menus = [
        {name: "Dashboard", link: "/Dashboard", icon: "menu"},
        {name: "Dashboard", link: "/Dashboard", icon: "menu"},
        {name: "Dashboard", link: "/Dashboard", icon: "search"},
        {name: "Dashboard", link: "/Dashboard", icon: "arrow-forward"},
    ]
  return (
    <div className="flex gap-6">
        <div className="bg-gray-800 min-h-screen w-72 text-white px-4">
            <div className="py-3 flex justify-end">
                <IonIcon name="menu" size="large"></IonIcon>
            </div>
            {
                menus?.map((menus, i) => (
                    <Link to={menus?.link} key={i} className="flex item-center text-xl gap-2 p-2 duration-500 hover:bg-gray-600 rounded">
                        <div className="my-2 flex gap-4 relative font-mono">
                            <div className="pr-4 pt-[2px]"><IonIcon name={menus?.icon}></IonIcon></div>
                            <h2>{menus?.name}</h2>
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