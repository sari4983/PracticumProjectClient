import  { useContext } from "react"
import { useNavigate} from "react-router-dom"

import { userContext } from "./UserContext";

export default function Explanation() {
    const navigateForm = useNavigate();
    const userCtx = useContext(userContext);
    
    return (
        <div className="mb-3 gap-4 col-5 mx-auto rounded  p-5 border border-success border border-5">
            <h1 className="p-3">שלום {userCtx.firstName} {userCtx.lastName} </h1>
            <h2 className="p-3">עליך למלא את כל פרטי הטופס בשלמות</h2>
            <h3 className="p-3">במידה ויש לך ילדים הכנס את פרטיהם</h3>
            <button className="btn btn-success"
                onClick={() => {
                    navigateForm(`/form`)
                }}>למילוי הטופס</button>
        </div>
        
    )
}