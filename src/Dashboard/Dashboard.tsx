import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"


const Dashboard = () => {
    const menus = [
        {name: "Dashboard", link: "/", icon: "menu"},
        {name: "Dashboard", link: "/", icon: "menu"},
        {name: "Dashboard", link: "/", icon: "search"},
        {name: "Dashboard", link: "/", icon: "arrow-forward"},
    ]
  return (
    <div className="flex gap-6">
        <div className="bg-gray-800 min-h-screen w-72 text-white px-4">
            <div className="py-3 flex justify-end">
                <IonIcon name="menu" size="large"></IonIcon>
            </div>
            {
                menus?.map((menus, i) => (
                    <Link to={menus?.link} key={i} className="flex item-center text-sm gap-2 font-md p-2">
                        <div className="mt-4 flex flex-col pag-4 relative">
                            <div><IonIcon name={menus?.icon}></IonIcon></div>
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