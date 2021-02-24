import React from 'react';
import { Button, Form, Label, Input,} from 'reactstrap';
import {useDispatch} from 'react-redux';
import {search_title} from '../../Redux/Actions/actions'

const Search=()=> {
    
    const dispatch=useDispatch()
    const searchHandler=(e)=>{
        dispatch(search_title((e.target.value) )) 
    }
    return (
        <div className="search">
              <Form>
                  <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search by title"
                  onChange={searchHandler}
                  autoFocus
                  />
              </Form>
    </div>
    )
}
export default Search


