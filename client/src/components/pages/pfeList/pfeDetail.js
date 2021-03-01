import React, {useState, useEffect} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { useSelector , useDispatch} from "react-redux";
import {likePoste, getBooks, addFav, deleteFav, likeBook, unlikeBook} from '../../../Redux/Actions/actions';
import {VisitorModal} from '../visitorModal';import { Modal}from 'reactstrap';
import { likePost } from '../../../Redux/API/api';




function PfeDetail() {
  const [modal, setModal] = useState(false);
  const dispatch =useDispatch()
  const location=useLocation()
  const  {PFEID}=useParams()

  useEffect(()=>{
    dispatch(getBooks())
},[])
  const books= useSelector(state=>state.booksReducers.books)
  let book= books && books.find(el=>el._id==PFEID)
  const user = useSelector((state) => state.authReducer.user);

  const favHandler=()=>{
    dispatch(
        addFav(PFEID,{userID:user?._id}) 
        )
     window.location.reload(false)
    }

  const delHandler=()=>{
    dispatch(
        deleteFav(PFEID,{userID:user?._id}) 
        )
        window.location.reload(false)
    }

    const indexfav = user?.favorite.findIndex(el=>el._id== book?._id)
   

    const FavoriteListFunction=()=>{
      return(
      indexfav=== -1? (<button className="download" 
      onClick={favHandler}> 
       <i class="fas fa-plus">  Add to your list </i>) 
       
        </button>):
      (<button className="download" 
      onClick={delHandler}> 
        <i class="far fa-trash-alt"> Retreive from your list</i>
       
        </button>)
      )}
 // handle the like section

       //verify if the user liked this before or not  
      const indexlike = book?.likes.findIndex(el=>el.userID== user?._id)

      //dispatch the like function 
      const likeHandler=()=>{
        dispatch(
            likeBook(PFEID,{userID:user?._id}) 
            )
       
        }
          //dispatch the unlike function 
      const unlikeHandler=()=>{
        dispatch(
            unlikeBook(PFEID,{userID:user?._id}) 
            )
       
        }

      // the like component
      const LikeFunction =()=>{
        return(
        indexlike=== -1?(
          <div style={{display:'flex'}}>
          <p>{book&& book.likes.length-1} liked this</p>
          <button className="download" onClick={likeHandler}>  <i class="far fa-thumbs-up">Like</i> </button>
          </div>
        ):(
          <div style={{display:'flex'}}>
          <p>you and  {book&& book.likes.length-2} liked this</p>
         <button className="download" onClick={unlikeHandler}>  <i class="far fa-thumbs-up">unLike</i> </button>
       </div>
        ))
      }

    

    return (
      
        <div style={{width:'99%'}}>
<button onClick={console.log(indexlike)} >hell  yeah </button>
        <div className="pfeCard" >
       <img className='pfeImg' src={book &&book.image} alt={book &&book.title} />

       <div className="pfeCardDescription">
       <h2 className='pfeCardName'>{book &&book.title}</h2>
       <h6> <span>realised in:</span>{` ${book &&book.grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${book &&book.grad_student_name} `} </h6>
       <h6><span>the project reliser email:</span>{ ` ${book &&book.grad_student_email}`} </h6>

      
       
      {user?(
        <>
         <button className="download"> <a href={`${book &&book.Link}`} target='_blank' ><i class="fas fa-download">Read or Download </i> </a>  </button>
         <LikeFunction/>
       <FavoriteListFunction/>

        </>)
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

