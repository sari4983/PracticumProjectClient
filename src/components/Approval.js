import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "./UserContext";

export default function Approval() {
    const navigateExcel = useNavigate();
    const userCtx = useContext(userContext);


    return (
        <div className="mb-1 gap-4 col-5 mx-auto rounded  p-5 border border-success border border-5">
            <h1 className="p-3">תודה {userCtx.firstName} {userCtx.lastName} </h1>
            <h2 className="p-3">פרטיך נשמרו בהצלחה</h2>
            <button className="btn btn-success"
                onClick={() => {
                    navigateExcel(`/downloadToExcel`)
                }}>להורדת קובץ אקסל עם הנתונים</button>
        </div>
    )
}