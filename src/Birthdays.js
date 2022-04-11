
import React from "react"


function Birthdays({ people }) {

    return (
        <div className="container p-3">
            <h3 className={`mb-4`}>{people.length} birthdays today</h3>
            {
                people.map((person) => {
                    return (
                        <div className="row g-0">
                            <image className="col d-flex justify-content-center">
                                <img src={person.image} alt="" />
                            </image>
                            <div className="col">
                                <p className={`fw-bold m-0`}>{person.name}</p>
                                <p>{person.age} Years</p>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default Birthdays