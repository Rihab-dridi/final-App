import React, {useState, useEffect} from 'react'
import { getBooks, rateBook} from '../../../../Redux/Actions/actions'
import { useSelector , useDispatch} from "react-redux";
import './style.css'
import { Button,  Modal, ModalBody, Label } from 'reactstrap';
  
import {Link, useParams, useLocation} from 'react-router-dom';




export   const RATES =({PFEID})=>{
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBooks())
    },[])
    


    const books= useSelector(state=>state.booksReducers.books)
    let book= books && books.find(el=>el._id==PFEID)
    const tabOfRates = book&&  book.rates.map(el=>el.rate)
    const  average = book?  (tabOfRates.reduce((total, rate) => total + rate,0) / tabOfRates.length):(0)
    let arr = Array(Math.round(average)).fill(<i style={{color:'gold'}} class="fas fa-star"></i>)
    let arr2 = Array(5- (arr.length)).fill(<i   class="far fa-star"></i>)
    const arr3 =arr.concat(arr2)
    return(arr3)
   
  }


function Rate({PFEID}) {
    const dispatch=useDispatch()

    
    //display the books to avoid the undefind issue 
    useEffect(()=>{
        dispatch(getBooks())
    },[])

    const [open,setOpen]=useState(false)
    const [modal,setModal]=useState(false)



    //call the book to update the rate  and the user to avoid duplication
    const books= useSelector(state=>state.booksReducers.books)
    let book= books && books.find(el=>el._id==PFEID)
    const user = useSelector((state) => state.authReducer.user);

  // verify if the current user did rate this book before or not 
  const indexRate =  book?.rates.map(el=>el.userID).findIndex(el=>el==user?._id) 


    // calculate the average of the rates 
    const tabOfRates = book&&  book.rates.map(el=>el.rate)
    const rater= book&&  book.rates.filter(el=>el.userID===user?._id)
    const  userRate= user && book ?  (rater.map(el=>el.rate)[0]):(0)
    const  average = book&&  tabOfRates.reduce((total, rate) => total + rate,0) / tabOfRates.length
       console.log(average)
    
 


    //local states to play the role of req.body 
    const [rating,setRating]=useState()

  
    let arr = Array(5).fill(<i style={{color:'gold'}} class="fas fa-star"></i>)
    let arr2 = Array(5).fill(<i   class="far fa-star"></i>)
    

 
    

    

    //the actual rating function 
    const rateHandler=()=>{
        dispatch(
            rateBook(PFEID,{userID:user?._id, rate:rating}) 
            )
        }
    
    
        const confiramation=()=>{
            indexRate== -1? (
setOpen(true)
            ):
            (
setModal(true)
            )

        }
      
      

    return (
        <div>
            
          

            <div style={{display:'flex'}}>
                 <div>
                 <button onClick={()=>{setRating(1) ; confiramation()}} className="star-btn">{rating>=1? (arr[0] ) :(arr2[0])}</button>
                 <button onClick={()=>{setRating(2); confiramation()} }className="star-btn">{rating>=2? (arr[1] ) :(arr2[1])}</button>
                 <button onClick={()=>{setRating(3); confiramation()} } className="star-btn">{rating>=3? (arr[2] ) :(arr2[2])}</button>
                 <button onClick={()=>{setRating(4); confiramation()}} className="star-btn">{rating>=4? (arr[3] ) :(arr2[3])}</button>
                 <button onClick={()=>{setRating(5); confiramation()} } className="star-btn">{rating>=5? (arr[4] ) :(arr2[4])}</button>
                
                 </div>
                 <p>{userRate} </p>
            </div>
            <Modal isOpen={open} >
              <ModalBody>
                   
                   <Label>  <h6>you are going  to rate  <span style={{fontWeight:'bold', fontSize:'20px'}} >{book?.title}</span> with {rating} <i style={{color:'gold'}} class="fas fa-star"></i> </h6> </Label>
                   <div style={{display:'flex', padding:'10px', justifyContent:'center', columnGap:'5px'}} >
                    <Button

                           color="dark"
                           
                           onClick={()=>{rateHandler() ; setOpen(false)}}
                          >
                           Confirm 
                    </Button>
                    <Button
                           color="dark"
                          
                           onClick={()=> setOpen(false)}
                          >
                           Cancel
                    </Button>
               </div>
                </ModalBody>
              </Modal>
            <Modal isOpen={modal} >
                <Label> You've already rated this book </Label>
                <Button onClick={()=>{setModal(false);setRating(Math.round(average))}}  >OK</Button>
            </Modal>
       
                  
        </div>
    )
}

export default Rate
