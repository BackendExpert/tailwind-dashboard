import IonIcon from "@reacticons/ionicons"

const Dashboard = () => {
  return (
    <div className="flex gap-6">
        <div className="bg-gray-800 min-h-screen w-72 text-white px-4">
            <div className="py-3 flex justify-end">
                <IonIcon name="menu" size="large"></IonIcon>
            </div>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
    </div>
  )
}

export default Dashboard