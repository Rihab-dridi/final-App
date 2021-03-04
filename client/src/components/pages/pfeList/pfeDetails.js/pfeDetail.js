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

 
    
    const indexRate =  book?.rates.map(el=>el.userID).findIndex(el=>el==user?._id) 

    
  

 
      

    
const [show,setShow]=useState(false)
const toggle=()=>{
  setShow(!show)
}
    return (
      <div style={{backgroundColor:'#101522'}}   >
        <div className='bookProfile'>
          
          <div className='part1description'>
          
          <div className='head'>
            
            <img  className='Img' src={book &&book.image} alt={book &&book.title} />
            
            <div className='rate'>
              {user&&  <Rate PFEID={PFEID} setModall={setModal} />}
        
            <Like setModal={setModal} PFEID={PFEID}/>
            </div>
          
           

        
          </div>





















          
          <div className='showButtons'>
          <h2 style={{ paddingBottom:'10px',fontSize:'55px'}} >{book&& book.title}</h2>


         
          <div className='detail'>
        


          <div className='bookDescription2'>
          <h6> <span>Realised in:</span>{` ${book &&book.grad_year}`} </h6>
       <h6><span>Realised by:</span>{`  ${book &&book.grad_student_name} `} </h6>
       <h6><span>The project Realiser email:</span>{ ` ${book &&book.grad_student_email}`} </h6>
       <h6>  <RATES PFEID={PFEID} /> </h6>

          </div>
          <div className='buttons'>
          {user?(
        <>
    
          <AddToFav PFEID={PFEID} />
          <Button onClick={toggle}><i class="fab fa-readme"></i> Read more</Button>

        </>)
       :
       (<>
    
      <Button  onClick={()=> setModal(true)}>  <i class="fas fa-share-square">  Add to your list </i> </Button>
        <Button onClick={toggle}> <i class="fab fa-readme"></i>Read more</Button>
      
      
       </>)}

       <Modal isOpen={modal}>
         <VisitorModal modal={modal}  setModal={setModal} />
       </Modal>
      
   

          </div>
          












          </div>
         
       </div>
       </div> 

        {show&& 
          <div className='bookAbstract'>
            <div className='ab'>
            <h3 style={{color:'white', padding:'20px'}}>  Abstract</h3>
            <p style={{color:'white', padding:'20px'}} >{` ${ book&&book.abstract}`} something here </p>
            {user?(
              <Button  style={{color:'white'}} > <a href={`${book &&book.Link}`} target='_blank' ><i class="fas fa-download">Read or Download </i> </a>  </Button>)

                :
               ( <Button  style={{color:'white'}} onClick={()=>setModal(true)}  ><i class="fas fa-download">Read or Download </i> </Button>)


            }
            
            </div>
          </div>}
          



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
        </div>
    )
}

export default PfeDetail

