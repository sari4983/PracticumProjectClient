import { createContext, useState } from "react"

export const userContext = createContext();

export default function UserContext(props) {
    //Parent
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [tz, setTz] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [HMO, setHMO] = useState('');

    //children
    const [ChildFirstName, setChildFirstName] = useState('');
    const [ChildLastName, setChildLastName] = useState('');
    const [ChildTz, setChildTz] = useState('');
    const [ChildDateOfBirth, setChildDateOfBirth] = useState('');

    //מערך הילדים
    const [childrenArr, setChildrenArr] = useState([])

    return (
        <div>
            <userContext.Provider value={{
                firstName, setFirstName, lastName, setLastName, tz, setTz, dateOfBirth, setDateOfBirth, gender, setGender, HMO, setHMO,
                ChildFirstName, setChildFirstName, ChildLastName, setChildLastName, ChildTz, setChildTz, ChildDateOfBirth, setChildDateOfBirth,
                childrenArr, setChildrenArr
            }}>
                {props.children}
            </userContext.Provider>
        </div>
    )
}
