import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector , useDispatch} from "react-redux";
import {likePost} from '../../../Redux/Actions/actions'

function PfeDetail() {
  const dispatch =useDispatch()
  const  {PFEID}=useParams()
  const books= useSelector(state=>state.booksReducers.books)
  const user = useSelector((state) => state.authReducer.user);
  
  
 
    return (
        <div style={{width:'99%'}}>
        <div className="pfeCard" >
       
       <img className='pfeImg' src={books && books.find(el=>el._id==PFEID).image} alt={books && books.find(el=>el._id==PFEID).title} />

       <div className="pfeCardDescription">
       <h2 className='pfeCardName'>{books && books.find(el=>el._id==PFEID).title}</h2>
       <h6> <span>realised in:</span>{` ${books && books.find(el=>el._id==PFEID).grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${books && books.find(el=>el._id==PFEID).grad_student_name} `} </h6>
       <h6><span>the project reliser email:</span>{ ` ${books && books.find(el=>el._id==PFEID).grad_student_email}`} </h6>
       <button className="download">  <i class="fas fa-download">  Download</i></button>
 

       <button className="download" onClick={()=>dispatch(likePost(PFEID))}>  <i class="far fa-thumbs-up">Like</i> </button>
       <button className="download">  <i class="fas fa-plus">  Add to your list </i> </button>
       </div>
      
   </div>
   <p className="abstract"><span>Abstract:</span>{` ${books && books.find(el=>el._id==PFEID).abstract}`} </p>
        </div>
    )
}

export default PfeDetail
