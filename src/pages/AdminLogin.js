import React, { useContext } from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "./components/Auth";
import Loading from "./components/Animation/Loading";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const AdminLogin = () => {

    const myStyle1={
        backgroundImage: `url("https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundRepeat : 'no-repeat',
        backgroundSize:'cover',
        height:"420px",
        marginTop:"60px"
        
    
    }

    const { currentUser } = useContext(AuthContext)
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const auth = getAuth();
    if (currentUser) {
        return <Redirect to="/home"/>

    }
    function login() {


        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                
                const user = userCredential.user;
                console.log(user);
                history.push("/Home");
                toast("Welcome  " + user.displayName);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast("Invalid email or password")
                console.log(errorCode, errorMessage)
            }).finally(() => setLoading(false));

    }
    

    return (
        <div >{loading ? <Loading></Loading> : <div>
            <div style={{backgroundColor:"black",color:"whitesmoke"}} className="p-0">
                <nav className="navbar navbar-dark bg-whites">
                    <h3 style={{fontFamily:"verdana"}} className="ms-3"><b>Covid Vaccination portal</b></h3>
                </nav>
            </div>
            <div>
                <div className="row">
                    <div style={myStyle1} className="col-md-6">
                    </div>
                    <div style={{backgroundColor:"aliceblue,"}} className="col-md-6" >
                        <div className="d-flex justify-content-center mt-4">
                            <div className="card border-white rounded" style={{ width: "22rem",height:"23em",marginTop:"55px" }}>
                                <h2 style={{fontFamily:"verdana",fontSize:"25px"}} className="card-title m-3"><b>Admin Login</b></h2>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={email} onInput={e => setemail(e.target.value)} placeholder="Enter email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control " value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    <div className="d-grid gap-2">
                                        <div className="row">
                                            <div className="col">
                                                <div className="d-grid gap-2 mt-4">
                                                    <button className="btn btn-primary " type="button" onClick={login}>Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        </div>
    )
}

export default AdminLogin;
