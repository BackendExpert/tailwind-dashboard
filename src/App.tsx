import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./Sidebar/SideBar";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<SideBar/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}