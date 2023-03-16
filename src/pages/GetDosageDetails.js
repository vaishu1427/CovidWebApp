import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { getAuth} from "firebase/auth";
import { collection, getDocs} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";


function GetApplicationDetails() {

    const db = getFirestore();
    const [data, setData] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const history = useHistory();
    function back() {
        history.push("/Home")
    }

    if (!user) {
        return <Redirect to="/login" />
    }
    async function fetchdata() {
        const querySnapshot = await getDocs(collection(db, "VaccinationCentre"));
        const mapdata = querySnapshot.docs.map((e) => {
            
            return {
                id: e.id,
                centername: e.data().Centrename,
                district: e.data().District,
                state: e.data().State,
                noofdose: e.data().NoofDose
                
            }
        })
        setData(mapdata);
        console.log(mapdata);
        
    }
    return (
        <div>
            <div>
                <div className="continer">
                    <nav className="navbar navbar-light bg-dark">
                        <div className="container-fluid">
                            <button style={{ color: "white", backgroundColor: "grey" }} className="btn btn-outline-secondary" onClick={back}>Back</button>
                            <div className="d-flex">
                                <button style={{ color: "white" }} type="button" className="btn btn-white" disabled>Hello {user.displayName}</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div style={{marginTop:"20px"}} className="col-md-12 text-center">
                <button className="btn btn-primary btn-lg" type="button" onClick={fetchdata}>Press to search</button>
                {data.map((element, index) => {
                return (
                    <div key={index} style={{width:"500px",margin:"50px 0px 0px 380px"}} className="card border-secondary mb-3">
                        <div style={{backgroundColor:"aliceblue"}}>
                            <h4 className="card-title ms-3"><b>No of Dose : {element.noofdose}</b></h4>
                            <div className="card-body">
                                <h6>State : {element.state}</h6>
                                <h6>District : {element.district}</h6>
                                <h6>Centre Name : {element.centername}</h6>   
                                {console.log(element.state)}
                                {/* <button className="btn btn-success btn-sm" type="button" onClick={() => ApplyForVaccination(element.id, element.noofdose)}>Apply</button>  */}
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
        



    )
}
export default GetApplicationDetails;