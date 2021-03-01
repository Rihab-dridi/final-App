import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import { useSelector , useDispatch} from "react-redux";
import {likePoste, getBooks, addToFav} from '../../../Redux/Actions/actions';
import {VisitorModal} from '../visitorModal';import { Modal}from 'reactstrap';
import { likePost } from '../../../Redux/API/api';




function PfeDetail() {
  const [modal, setModal] = useState(false);
  const dispatch =useDispatch()
  const  {PFEID}=useParams()

  useEffect(()=>{
    dispatch(getBooks())
},[])
  const books= useSelector(state=>state.booksReducers.books)
  let book= books && books.find(el=>el._id==PFEID)
  const user = useSelector((state) => state.authReducer.user);

 
 

    return (
      
        <div style={{width:'99%'}}>

        <div className="pfeCard" >
        <button className="download" onClick={()=>{dispatch(addToFav((book &&book._id))) }}>   add to fav</button>
       <img className='pfeImg' src={book &&book.image} alt={book &&book.title} />

       <div className="pfeCardDescription">
       <h2 className='pfeCardName'>{book &&book.title}</h2>
       <h6> <span>realised in:</span>{` ${book &&book.grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${book &&book.grad_student_name} `} </h6>
       <h6><span>the project reliser email:</span>{ ` ${book &&book.grad_student_email}`} </h6>

      
       
      {user?(
        <>
         <button className="download"> <a href={`${book &&book.Link}`} target='_blank' ><i class="fas fa-download">Read or Download </i> </a>  </button>
       <button className="download">  <i class="fas fa-plus">  Add to your list </i> </button> </>)
       :
       (<> <button className="download" onClick={()=> setModal(true)}>  <i class="fas fa-download">  Read or Download</i></button>
      <button className="download" onClick={()=> setModal(true)}>  <i class="far fa-thumbs-up">Like</i> </button>
      <button className="download" onClick={()=> setModal(true)}>  <i class="fas fa-plus">  Add to your list </i> </button>
       </>)}
       </div>
       <Modal isOpen={modal}>
         <VisitorModal modal={modal}  setModal={setModal} />
       </Modal>
      
   </div>
   <p className="abstract"><span>Abstract:</span>{` ${ book&&book.abstract}`} </p>
        </div>
    )
}

export default PfeDetail

