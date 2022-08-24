
import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {getUser, getUsers, getFName, getUserProperties} from '../data/repository'
import {useState} from 'react';




function MyProfile(props) {
  
// const str = localStorage.getItem("users");
    // const myprofile = useLocation();
    
    // const [firstName, setFName] = useState(getFName());

    // const setUp = (firstName) => {
    //   setFName(fistName);
      
    // }
    // console.log(getUsers().values('fname'))
    // console.log('print');
    // const name = JSON.stringify(getUserValues())
    // console.log(name);

    // const data = getUsers();
    // const userData = getUser();

    // console.log(typeof(userData));

    // const dataArr = userData.substring().split(' ');
    // console.log(`array: ${dataArr}`)

    // console.log(`username: ${typeof(props.username)}`)

    // console.log(setUp())
    // setUp();
    // const str = getUsers();

    // const data = localStorage.getItem("users", getUsers());
    // console.log(data.email);
    const userDetails  = getUserProperties(props.username);
   //console.log("PROPS.USERNAME: ", props.username);
    //console.log("PRINT HERE", getUserProperties(props.username).fName);
    
  return (
    
    <div className="App">
        {/* auth.token ? <Outlet/> :  <Navigate to="/" replace state={{from: myprofile}}/> */}
        <div className="main-box-large">
          
          <div className='main-box custom-card'>
          <h1>MyProfile</h1>
           
           <p>Username stuff: {props.username}</p>
           <p>F Name: {userDetails.fName}</p>
          </div>
           
        </div> {/* end of main-box custom-card */}

    
{/* Nothing here yet */}
    </div>
  );
}

export default MyProfile;
