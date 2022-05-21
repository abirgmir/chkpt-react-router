import React from 'react'
import { Form } from 'react-bootstrap'

const FilterByName = ({inputSearch, setInputSearch }) => {
    return (
        <div className='filter' >
            <Form.Control className='inputSearch'
            type="text" placeholder="Enter movie title..." 
            onChange={(e)=> setInputSearch(e.target.value) }
            value={inputSearch }
            />
        </div>
    )
}

export default FilterByName