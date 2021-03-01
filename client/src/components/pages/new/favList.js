import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getBooks, deleteFav } from "../../../Redux/Actions/actions";
import { Spinner } from 'reactstrap';
import {Link} from 'react-router-dom'



function FavList({ID}) {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBooks())
    },[])
    const books= useSelector(state=>state.booksReducers.books)
    const book= books && books.find(book=> book._id ==ID)
    const user = useSelector((state) => state.authReducer.user);
   
    
    return (
        <div style={{backgroundColor:'lightgray', width:'100%', display:'flex',flexDirection:'column', padding:'0px', margin:'0px' }}>
            <div>
             <button> delete </button>   
             <Link to={`/reports/pfe/${ID}`}>
            <img style={{margin:'0'}} className='pfeImg' src={book && book.image} alt="Geosciences engeneering" />
            <h2 >{book&& book.title}</h2>
   
        </Link>
        </div>
        </div>
    )
}

export default FavList
