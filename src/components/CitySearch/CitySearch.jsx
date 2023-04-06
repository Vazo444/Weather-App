import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../../store/searchSlices/searchSlices'

const CitySearch = () => {
  const formRef = useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()

      dispatch(addSearch(formRef.current[0].value))

      formRef.current.reset()
  }


  return (
    <form onSubmit={handleSubmit} ref={formRef} className='search'>
        <input type='text'/>
        <span>SEARCH</span>
    </form>
  )
}

export default CitySearch
