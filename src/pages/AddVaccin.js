import { collection,addDoc  } from "firebase/firestore";
import firebaseconfig from "./components/Firebase";
import React, { useState } from "react";
import { getAuth} from "firebase/auth";
import { useHistory, Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import backgroundImage from './components/Animation/Virus.svg';
// import { doc, setDoc } from "firebase/firestore"; 


toast.configure()

function AddVaccin() {

    
    const inputStyle={
        width:"20em"
    }
    
    const history = useHistory();
    const auth = getAuth();
    const user = auth.currentUser;
    const [state, setstate] = useState('');
    const [district, setdistrict] = useState('');
    const [centrename, setcentrename] = useState('');
    const [noofdose,setnoofdose]=useState('');
    const db = firebaseconfig.firestore();

    
    if (!user) {
        return <Redirect to="/login" />
    }

    function back() {
        history.push("/Home")
    }

    async function addvaccinecentre() {

        console.log(state);
        const docRef=await addDoc(collection(db, "VaccinationCentre"), {
            State: state,
            District: district,
            Centrename : centrename,
            NoofDose : noofdose
            
        });
        toast("Vaccination Centre added successfully")
        setTimeout(function(){ window.location.reload(); }, 5000); 
        console.log("Document written with ID: ", docRef.id);
          
    }
    return (
        <div style={{backgroundColor:"aliceblue",height:"600px"}}>
        <div className="continer">
            <nav  className="navbar navbar-light bg-dark">
                <div  className="container-fluid">
                <button style={{color:"white",backgroundColor:"grey"}} className="btn btn-outline-secondary" onClick={back}>Back</button>
                    <div className="d-flex">
                    <button style={{color:"white"}} type="button" className="btn btn-white " disabled>Hello {user.displayName}</button>
                    </div>
                </div>
            </nav>
        </div>
        <div style={{marginLeft:"30em",marginTop:"4em",marginRight:"30em"}}>
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                    <input style={inputStyle}  value={state} onChange={e => setstate(e.target.value)} type="name" className="form-control" id="exampleFormControlInput1"></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">District</label>
                <input style={inputStyle} value={district} onChange={e => setdistrict(e.target.value)} type="name" className="form-control" id="exampleFormControlInput1" ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name of the center</label>
                <input style={inputStyle} value={centrename} onChange={e => setcentrename(e.target.value)} type="name" className="form-control" id="exampleFormControlInput1"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">No of Dose</label>
                <input style={inputStyle} value={noofdose} onChange={e => setnoofdose(e.target.value)} type="name" className="form-control" id="exampleFormControlInput1"></input>
            </div>
            <button style={{marginLeft:"8em"}} type="button" className="btn btn-primary" onClick={addvaccinecentre}>Submit</button>
            </div>
        </div>
    )
}

export default AddVaccin;