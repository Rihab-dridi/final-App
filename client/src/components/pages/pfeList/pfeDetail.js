import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector } from "react-redux";

function PfeDetail() {
  const  {PFEID}=useParams()
  const books= useSelector(state=>state.booksReducers.books)
  console.log("ji")
  const book= books && books.find(el=>el._id==PFEID)
  console.log(PFEID)
    return (
        <div style={{width:'99%'}}>
        <div className="pfeCard" >
       
       <img className='pfeImg' src={book.image} alt={book.title} />

       <div className="pfeCardDescription">
       <h2 className='pfeCardName'>{book.title}</h2>
       <h6> <span>realised in:</span>{` ${book.grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${book.grad_student_name} `} </h6>
       <h6><span>the project reliser email:</span>{ ` ${book.grad_student_email}`} </h6>
       <button className="download">  <i class="fas fa-download">  Download</i></button>
       </div>
      
   </div>
   <p className="abstract"><span>Abstract:</span>{` ${book.abstract}`} </p>
        </div>
    )
}

export default PfeDetail
