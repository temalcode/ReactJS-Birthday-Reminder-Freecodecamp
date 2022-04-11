
import React, {useState} from "react"
import Birthdays from "./Birthdays"
import data from './data.js'

function Container(){

    const [people, setPeople] = useState(data)

    return(
        <div className={`container bg-light p-3 rounded shadow `}>
            {/* <h2 className={`mb-3`}>Birthday Reminder</h2> */}
            <Birthdays people={people}/>
            <button onClick={() => setPeople([])} className={`btn btn-primary w-100 `}>Clear All</button>
        </div>
    )
}

export default Container