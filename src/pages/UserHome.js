import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import Loading from "./components/Animation/Loading";

toast.configure()

function UserHome() {
   
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user.displayName);
    
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
    function SearchVaccinCenter(){
        history.push("/SearchVaccinCenter")
    }
    
    return (
        <>
        
        <div style={{backgroundColor:"black",marginTop:"-10px"}} className="continer">
            <nav  className="navbar navbar-light bg-light">
                <div style={{backgroundColor:"black",height:"60px"}}  className="container-fluid">
                    <button style={{color:"white",backgroundColor:"grey"}} className="btn btn-outline-secondary" onClick={signout}>Logout</button>
                    <div className="d-flex">
                        <button  style={{color:"white"}} type="button" className="btn btn-white " disabled> Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div><div>

                <div style={{backgroundColor:"aliceblue"}} className="row">
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div style={{backgroundColor:"aliceblue",height:"499px"}} className="card mt-2 border-light"  >
                                <div className="card-body">
                                    <div style={{marginTop:"130px",backgroundColor:"aliceblue"}} className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card"  style={{width:"27rem"}}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Search and apply for Vaccination Center</h5>
                                                        <button className="btn btn-primary " type="button" onClick={SearchVaccinCenter}>open</button>
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
            </div></>
    )
}

export default UserHome;