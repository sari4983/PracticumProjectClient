import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const userContext = createContext();

export default function UserContext(props) {
    //Parent
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tz, setTz] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [HMO, setHMO] = useState('');


    const [ChildFirstName, setChildFirstName] = useState('');
    const [ChildLastName, setChildLastName] = useState('');
    const [ChildTz, setChildTz] = useState('');
    const [ChildDateOfBirth, setChildDateOfBirth] = useState('');
    const [idParent, setIdParent] = useState(0);

    //מערך הילדים
    var childrenArr = [];

    useEffect(() => {
        axios.get('https://localhost:44381/api/UserControler')
            .then(data => {
                console.log(data.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <userContext.Provider value={{
                firstName, setFirstName, lastName, setLastName, tz, setTz, dateOfBirth, setDateOfBirth, gender, setGender, HMO, setHMO,
                ChildFirstName, setChildFirstName, ChildLastName, setChildLastName, ChildTz, setChildTz, ChildDateOfBirth, setChildDateOfBirth,
                childrenArr, idParent, setIdParent
            }}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}
