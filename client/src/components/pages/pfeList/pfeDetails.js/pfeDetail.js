import React, {useState, useEffect} from 'react'
import {Link, useParams, useLocation} from 'react-router-dom'
import { useSelector , useDispatch} from "react-redux";
import {getBooks, addFav, deleteFav} from '../../../../Redux/Actions/actions';
import {VisitorModal} from '../../visitorModal';import { Modal}from 'reactstrap';
import { Button } from "../../../../globalStyle";
import Rate,{RATES} from './rate'
import Like from './like'
import AddToFav from "./addToFav";
import './style.css'




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

  

  const indexlike = book?.likes.findIndex(el=>el.userID== user?._id)

  const LIKES = ()=>{
    return(
      user?( indexlike=== -1?(
  
        (book&& book.likes.length==0 )? (<p>0 Likes</p>):(<p>{book&& book.likes.length-1} liked this</p>)
      ):(
       
         (book&& book.likes.length==1 )? (<p>you  Liked this </p>):(<p>you and  {book&& book.likes.length-2} liked this</p>)
      )):(<p>{book&& book.likes.length-1} liked this</p>)
    )
    } 
    
    const indexRate =  book?.rates.map(el=>el.userID).findIndex(el=>el==user?._id) 

    
  

 
      

    
const [show,setShow]=useState(false)
    return (
      
        <div className='bookProfile'>
          <div className='part1description'>
          
          <div className='head'>
          <h1>fuck</h1>
            <div className='bookHead'>
                {/* image & title */}
            </div>

            <div className='booklikeRate'>
              {/* rate & like */}

            </div>
            

          </div>
























          <div className='showButtons'>
          <h1>hell</h1>
            {/* <Button>
              
            </Button>
            <Button>

            </Button>
            <Button>

            </Button>
            <Button>

            </Button> */}

          </div>














          <div className='bookDescription2'>
          <h1>shit</h1>

          </div>
         
       </div>

          <div className='bookAbstract'>
            <h1>  motherFucker</h1>
            {/* abstract */}
          </div>
          



        {/* <div className="pfeCard" >
       <img  className='pfeImg' src={book &&book.image} alt={book &&book.title} />

       <div className="pfeCardDescription">
       <h2 className='pfeCardName'>{book &&book.title}</h2>
       <h6> <span>realised in:</span>{` ${book &&book.grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${book &&book.grad_student_name} `} </h6>
       <h6><span>the project reliser email:</span>{ ` ${book &&book.grad_student_email}`} </h6>
       <LIKES/>
       <RATES PFEID={PFEID} />

      
       
      {user?(
        <>
         <Button className="download"> <a href={`${book &&book.Link}`} target='_blank' ><i class="fas fa-download">Read or Download </i> </a>  </Button>
           <Rate PFEID={PFEID} />
           <Like PFEID={PFEID}/>
          <AddToFav PFEID={PFEID} />

        </>)
       :
       (<> <Button className="download" style={{color:'white'}} onClick={()=> setModal(true)}>  <i class="fas fa-download">  Read or Download</i></Button>
      <Button className="download" onClick={()=> setModal(true)}>  <i class="far fa-thumbs-up">Like</i> </Button>
      <Button className="download" onClick={()=> setModal(true)}>  <i class="fas fa-plus">  Add to your list </i> </Button>
       </>)}
       </div>
      
       <Modal isOpen={modal}>
         <VisitorModal modal={modal}  setModal={setModal} />
       </Modal>
      
   </div>
   
   <p className="abstract"><span>Abstract:</span>{` ${ book&&book.abstract}`} </p> */}
        </div>
    )
}

export default PfeDetail

