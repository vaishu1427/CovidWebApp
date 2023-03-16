import React,{useContext} from "react";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useHistory,Redirect } from "react-router-dom";
import { AuthContext } from "./components/Auth";
import Loading from "./components/Animation/Loading";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import background from "./src/coronavirus.jpg";
toast.configure()

const Login= () =>{

    const myStyle={
        backgroundImage: `url("https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22")`,
        backgroundRepeat : 'no-repeat',
        backgroundSize:'cover',
        
        
    }
    
    const {currentUser} = useContext(AuthContext)
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();
    const auth = getAuth();
    if(currentUser){
        return <Redirect to="/UserHome" />
        
    }
    function login(){
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            history.push("/UserHome");
            toast("Welcome  " + user.displayName);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast("Invalid email or password")
            console.log(errorCode , errorMessage)
        }).finally(() => setLoading(false));
        
    }
    function CreateAccount(){
        history.push("/Signup")
    }
    function AdminLogin(){
        history.push("/AdminLogin")
    }

    return(  
        <div style={myStyle}>{loading ? <Loading></Loading> :
        <div>
            <div className="p-0">
                <nav className="navbar navbar-light bg-light">
                <div  className="container-fluid">
                    <h3 style={{fontFamily:'verdana'}} className="ms-3"><b>Covid Vaccination portal</b></h3>
                    <div className="d-flex">
                        <button type="button" className="btn btn-secondary" onClick={AdminLogin}>Admin Login</button>
                    </div>
                </div>
                </nav>
            </div>
            <div >
                <div style={{height:'500px'}}className="row">
                    <div style={{myStyle}}className="col-md-6">
                    </div>
                    <div className="col-md-6" >
                        <div className="d-flex justify-content-center mt-4">
                            <div className="card border-white rounded" style={{width: "22rem",height:"23em"}}>
                                <h2 style={{fontFamily:"verdana",fontSize:"25px"}} className="card-title m-3"><b>User Login</b></h2>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" value={email} onInput={e => setemail(e.target.value)} placeholder="Enter email"  />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" className="form-control " value={password} onInput={e => setpassword(e.target.value)} placeholder="Password" />
                                    </div>
                                    <br/>
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-grid gap-2 mt-4">
                                                <button className="btn btn-outline-secondary "  onClick={CreateAccount}>Create Account</button>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-grid gap-2 mt-4">
                                                <button className="btn btn-primary " type="button" onClick={login}>Login</button>
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

export default Login;
