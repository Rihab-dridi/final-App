import React,{ useState} from 'react'
import { useDispatch } from 'react-redux';
import{searchBooks} from '../../Redux/Actions/actions'
import {
    Button,
    Form,
    Label,
    Input,
  } from 'reactstrap';


  
  function Search() {
    const dispatch = useDispatch()
    const [search, setSearch]=useState('')
    const searchHandler=(e)=>{
        setSearch(e.target.value)
        dispatch(searchBooks(search))
    }

      return (
          <div>
              <Form>
                  <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search by title"
                  onChange={searchHandler}
                  />
              </Form>

          </div>
      )
  }
  
  export default Search
  