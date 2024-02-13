import SideBar from "../Sidebar/SideBar"


const Dashboard = () => {
  return (
    <div className="flex">
        <SideBar />

        <div className="">
            <h1 className="font-semibold">Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard