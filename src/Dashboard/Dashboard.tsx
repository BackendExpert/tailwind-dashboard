import SideBar from "../Sidebar/SideBar"


const Dashboard = () => {
  return (
    <div className="flex">
        <div className="z-0">
            <SideBar />
        </div>
        <div className="z-10">
            <div className="flex-row">
                <h1 className="font-semibold text-4xl">Dashboard</h1>
                <hr className="w-[100%]"/>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard