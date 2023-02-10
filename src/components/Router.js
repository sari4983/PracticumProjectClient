import { Route, Routes } from "react-router-dom"
import Approval from "./Approval"
import DownloadToExcel from "./DownloadToExcel"
import Explanation from "./Explanation"
import UserContext from "./UserContext"
import UserForm from "./UserForm"

export default function Router() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<UserContext><Explanation /></UserContext>}></Route>
                <Route path="/form" element={<UserContext><UserForm /></UserContext>}></Route>
                <Route path="/approval" element={<UserContext><Approval /></UserContext>}></Route>
                <Route path="/downloadToExcel" element={<UserContext><DownloadToExcel/></UserContext>}></Route>
            </Routes>
        </div>
    )
}