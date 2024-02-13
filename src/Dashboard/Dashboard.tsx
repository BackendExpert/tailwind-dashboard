import SideBar from "../Sidebar/SideBar"


const Dashboard = () => {
  return (
    <div className="flex">
        <SideBar />

        <div className="px-8 my-8">
            <h1 className="font-semibold text-4xl">Dashboard</h1>
        </div>
    </div>
  )
}

export default Dashboard