import IonIcon from "@reacticons/ionicons"
import React from "react"

const Dashboard = () => {
  return (
    <div className="flex gap-6">
        <div className="bg-gray-800 min-h-screen w-72 text-white px-4">
            <div className="py-3 flex justify-end">
                <IonIcon name="menu" size="large"></IonIcon>
            </div>
            <div className="mt-4 flex lflex-col pag-4 relative">
                <div>
                    Dashboard
                </div>
            </div>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
    </div>
  )
}

export default Dashboard