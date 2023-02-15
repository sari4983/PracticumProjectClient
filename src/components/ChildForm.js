import { useContext } from "react"

import { userContext } from "./UserContext";


export default function ChildForm(props) {

    const childCtx = useContext(userContext);

    const AddChild = () => {
        childCtx.setChildrenArr([ ...childCtx.childrenArr,{
            FirstName: childCtx.ChildFirstName, LastName: childCtx.ChildLastName, Tz: childCtx.ChildTz,
            DateOfBirth: childCtx.ChildDateOfBirth
        }])
        props.ToAddForm(false)
    }

    return (
        <div>
            <div className="mb-1">
                <input name="firstName" type="text" placeholder="שם פרטי" defaultValue={childCtx.childFirstName}
                    className="rounded text-end border-dark" required maxLength="15" onInput={(e) => { childCtx.setChildFirstName(e.target.value) }} />
            </div>
            <div className="mb-1">
                <input name="familyName" type="text" placeholder="שם משפחה" defaultValue={childCtx.ChildLastName}
                    className="rounded text-end border-dark" required maxLength="15" onInput={(e) => { childCtx.setChildLastName(e.target.value) }} />
            </div>
            <div className="mb-1">
                <input name="tz" type="text" placeholder="תעודת זהות" defaultValue={childCtx.ChildTz}
                    className="rounded text-end border-dark" required maxLength="9" minLength="9" onInput={(e) => { childCtx.setChildTz(e.target.value) }} />
            </div>
            <div className="mb-1">
                <input name="dateOfBirth" type="date" placeholder="תאריך לידה" defaultValue={childCtx.childDateOfBirth}
                    className="rounded text-end border-dark" required onInput={(e) => { childCtx.setChildDateOfBirth(e.target.value) }} />
            </div>
            <div className="mb-1">
                <button onClick={AddChild} type="submit">לאישור</button>
            </div>
        </div>
    )
}

