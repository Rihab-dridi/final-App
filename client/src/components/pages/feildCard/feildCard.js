import React,{ useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteField} from '../../../Redux/Actions/feildsAction/actions';
import './styles.css'
import './adminSide.css'
import Edit from "./editField";
import Modal from 'react-modal';

 


Modal.setAppElement('#root')
const FeildCard=({feild})=>{

    


   
    const [open,setOpen]=useState(false)

        const dispatch=useDispatch()
        const deletHandler=()=>{
        dispatch(deleteField(feild._id))
        console.log("hihbhihbn")
        }
    
       
    return(

    <div className="fCard" >
        <div style={{display:'flex'}}>
           <div >
              <img className='feildCardImg' src={feild.image} alt="Geosciences engeneering" />
              <div className="feildCardDescription">
                   <h3 className='feildCardName'>{feild.name}</h3>
        
                   <Link to={`/reports/${feild.id}`}>
                      <button className='feildCardBtn'>show the Reports</button>
                   </Link>
               </div>
           </div>
        <div className='AdminField'>
                <button className='deletAdminField' onClick={deletHandler}>
                    <i class="far fa-trash-alt"></i>
                </button>

                <div className='adminEditField'>
                <button onClick={()=>setOpen(true)}>
                <i class="fas fa-ellipsis-h"></i>
                </button>
                
                <Modal isOpen={open}>
                <Edit 
                feild={feild}
                setOpen={setOpen}/>

            </Modal>
          

            </div>
            </div>
        </div>
       
      
       
      
       
  
    </div>
        
    )
}
export default FeildCard