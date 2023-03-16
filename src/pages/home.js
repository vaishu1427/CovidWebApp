import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

function Home() {


    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) {
        return <Redirect to="/login" />
    }
    function signout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            history.push("/Login");
            toast("Logged out Successfully")
        }).catch((error) => {
            // An error happened.
            toast(error)
            console.log(error);
        });
    }
    function GetVaccineDosage(){
        history.push("/GetDosageDetails")
    }
    function AddVaccinpage(){
        history.push("/AddVaccin")
    }
    function RemoveVaccinationCentre(){
        history.push("/RemoveVaccinationCenter")
    }
    return (
        <><div  style={{width:"1280px"}} className="continer" >
            <nav  className="navbar navbar-light bg-light">
                <div style={{backgroundColor:"black",height:"60px",marginTop:"-10px"}} className="container-fluid">
                    <button style={{color:"white",backgroundColor:"grey"}} className="btn btn-outline-secondary" onClick={signout}>Logout</button>
                    <div style={{marginRight:"20px"}} className="d-flex">
                        <button style={{color:"white"}} type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div>
        <div>

                <div style={{backgroundColor:"aliceblue",width:"1290px"}} className="row">
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div style={{backgroundColor:"aliceblue",height:"500px"}} className="card mt-2 border-light"  >
                                <div style={{marginTop:"120px"}} className="card-body">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card" style={{width:"18rem"}} >
                                                    <div className="card-body">
                                                        <h5 className="card-title">Add Vaccination Centers</h5>
                                                        <button className="btn btn-primary " type="button" onClick={AddVaccinpage}>open</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card" style={{width:"24rem"}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Get application details for vaccination</h5>
                                                        <button className="btn btn-primary " type="button" onClick={GetVaccineDosage}>open</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card"  style={{width:"20em"}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Remove Vaccination Centers</h5>
                                                        {/* <a href="#" className="btn btn-primary">Open</a> */}
                                                        <button className="btn btn-primary " type="button" onClick={RemoveVaccinationCentre}>open</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
        </>

    )
}

export default Home;