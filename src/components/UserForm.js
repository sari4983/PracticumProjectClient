import axios from "axios";
import { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";
import ChildForm from "./ChildForm"



export default function UserForm() {

    const [hasChildren, setHasChildren] = useState(false);
    const [isToAddForm, setIsToAddForm] = useState(false);
    const [isShowApproval, setIsShowApproval] = useState(false);
    const [isUserAppear, setIsUserAppear] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const userCtx = useContext(userContext);
    const navigateExplanation = useNavigate();
    const navigateApproval = useNavigate();


    const OnSubmit = (data) => {
        //בדיקה אם התעודת זהות קימת במערכת
        axios.get(`https://localhost:44381/api/User/tz/${data.tz}`)
            .then(() => setIsUserAppear(true)
            ).catch(error => { setIsUserAppear(false) })

        isUserAppear === false ?
            <div>
                {
                    axios.post("https://localhost:44381/api/User", {
                        FirstName: data.firstName, LastName: data.familyName, Tz: data.tz,
                        DateOfBirth: data.dateOfBirth, Gender: parseInt(data.chooseGender), HMO: data.chooseHMO
                    }),

                    axios.get(`https://localhost:44381/api/User/tz/${data.tz}`)
                        .then(res => {
                            console.log("datatz", res.data)
                            console.log("idtz", res.data.id)
                            userCtx.setIdParent(res.data.id)
                            console.log(userCtx.idParent)
                            console.log(userCtx.idParent)
                        }).catch(error => console.log(error)),

                    isShowApproval ?
                        <div>{
                            navigateApproval(`/approval/`)
                        }
                        </div>
                        :
                        <>
                        </>
                }
            </div>
            :
            <>
                {alert("משתמש קים במערכת")}
            </>
        for (let index = 0; index < userCtx.childrenArr.length; index++) {
            axios.post("https://localhost:44381/api/UserChild", {
                FirstName: userCtx.childrenArr[index].FirstName, LastName: userCtx.childrenArr[index].LastName, Tz: userCtx.childrenArr[index].Tz,
                DateOfBirth: userCtx.childrenArr[index].DateOfBirth, IdParent: userCtx.idParent
            }).then(suc => console.log(suc.data))
                .catch(error => console.log(error))
        }
    }
   
    return (
        <div>
            <form className="d-grid gap-4 col-5 mx-auto card  p-3 mb-2 bg-success text-white" onSubmit={handleSubmit(OnSubmit)}>
                <div className="mb-1">
                    <input form="Form1" name="firstName" type="text" placeholder="שם פרטי" className="rounded text-end border-dark" defaultValue={userCtx.firstName}
                        onInput={(e) => {
                            userCtx.setFirstName(e.target.value)
                        }}
                        {...register("firstName", { required: true, maxLength: 15 })} />
                    {errors?.firstName?.type === "required" && <p>{"זהו שדה חובה"}</p>}
                    {errors?.firstName?.type === "maxLength" && <p>{"אורך השם עולה על 15 תווים"}</p>}
                </div>

                <div className="mb-1">
                    <input name="familyName" type="text" placeholder="שם משפחה" className="rounded text-end border-dark" defaultValue={userCtx.lastName}
                        onInput={(e) => { userCtx.setLastName(e.target.value) }}
                        {...register("familyName", { required: true, maxLength: 15 })} />
                    {errors?.familyName?.type === "required" && <p>{"זהו שדה חובה"}</p>}
                    {errors?.familyName?.type === "maxLength" && <p>{"אורך השם עולה על 15 תווים"}</p>}
                </div>

                <div className="mb-1">
                    <input name="tz" type="text" placeholder="תעודת זהות" className="rounded text-end border-dark" defaultValue={userCtx.tz}
                        onInput={(e) => { userCtx.setTz(e.target.value) }}
                        {...register("tz", { required: true, minLength: 9, maxLength: 9 })} />
                    {errors?.tz?.type === "required" && <p>{"זהו שדה חובה"}</p>}
                    {errors?.tz?.type === "minLength" && <p>{"הקש תעודת זהות בעלת 9 תווים"}</p>}
                    {errors?.tz?.type === "maxLength" && <p>{"הקש תעודת זהות בעלת 9 תווים"}</p>}
                </div>

                <div className="mb-1">
                    <input name="dateOfBirth" type="date" placeholder="תאריך לידה" className="rounded text-end border-dark" defaultValue={userCtx.dateOfBirth}
                        onInput={(e) => { userCtx.setDateOfBirth(e.target.value) }}
                        {...register("dateOfBirth", { required: true })} />
                    {errors?.dateOfBirth?.type === "required" && <p>{"זהו שדה חובה"}</p>}
                </div>

                <label>בחר מין </label>
                <div className="mb-1">

                    <select name="chooseGender" {...register("chooseGender", { required: true })}
                        defaultValue={userCtx.gender} onInput={(e) => { userCtx.setGender(e.target.value) }}>
                        <option value="1" >זכר</option>
                        <option value="2">נקבה</option>
                    </select>
                </div>
                <label>בחר קופת חולים</label>
                <div className="mb-1">
                    <select name="chooseHMO"  {...register("chooseHMO", { required: true })}
                        defaultValue={userCtx.HMO} onInput={(e) => { userCtx.setHMO(e.target.value) }}>
                        <option value="mehuhedet" >מאוחדת</option>
                        <option value="clalit">כללית</option>
                        <option value="macabi">מכבי</option>
                        <option value="lehumit">לאומית</option>
                        <option value="nothing">אחר</option>
                    </select>
                </div>
                <label>?האם יש לך ילדים</label>
                <div className="mb-1">
                    <select name="haveChildren" onChange={(e) => { e.target.value === "yes" ? setHasChildren(true) : setHasChildren(false) }}>
                        <option className="dropdown-item" value="no">לא</option>
                        <option className="dropdown-item" value="yes">כן</option>
                    </select>
                </div >
                {
                    hasChildren ?
                        <>
                            <div className="mb-1">
                                <button className="btn btn-outline-light " onClick={() => setIsToAddForm(true)}>להוספת ילד</button>
                            </div>
                            {
                                isToAddForm ?
                                    <div>
                                        <ChildForm ToAddForm={setIsToAddForm} />
                                    </div>
                                    :
                                    <></>
                            }
                        </>
                        :
                        <div></div>
                }
                <div className="mb-1">
                    <button onClick={() => setIsShowApproval(true)} className="btn btn-outline-light " type="submit">לשליחה</button>
                </div>
            </form >
            <button className="btn btn-success sticky-xxl-top" onClick={() => {
                navigateExplanation(`/`)
            }}>לדף ההנחיות</button>
        </div>
    )

}
        