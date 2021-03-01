import React,{useEffect, useState} from 'react'
import {  useSelector, useDispatch} from "react-redux";
import { getBooks } from '../../../Redux/Actions/actions';
import {getStudents} from '../../../Redux/Actions/students.jsActions/actions'
import CurrentStudents from "./currentStudents";
import PreviousStudents from "./previousStudents";
import FEILDS from "../feildCard/fieldsList";
import './dashboard.css'
import Emails from "./email";
import { displayEmails } from '../../../Redux/Actions/emails/emails';
 

function AdminDashboard() {
    const dispatch=useDispatch()
    const students= useSelector(state=>state.studentsReducer.students)
    const books= useSelector(state=>state.booksReducers.books)
    const search= useSelector(state=>state.booksReducers.searchTitle)
    useEffect(()=>{
        dispatch(getStudents())
        dispatch(getBooks())
        dispatch(displayEmails())

    },[])
   

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
        <div className='adminDashboard'>

        <header className="adminInfo">
            <img className="adminPicture" src={user?.result.imageUrl} alt={user?.result.name}  />
            <h2  className='adminName'> <span> Welcome admin </span>{user?.result.name}</h2>
        </header>
        <div className='dashbordfield'>
           
           <FEILDS/>
        </div>
        <div>
            
        <CurrentStudents/>
        <div style={{display:'flex', flexDirection:'column'}}div className='feildCard'>
  
  <PreviousStudents/>
  <Emails/>
</div> 
        </div>
        </div>
    )
}

export default AdminDashboard
