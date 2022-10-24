import React from 'react'
import { connect } from 'react-redux';

const Navbar = ({prop}) => {
  return (
    <div className='border rounded row bg-dark text-white p-4'>
        <h3>Umumiy tasklar soni: {prop.progressReducer.length + prop.completedReducer.length + prop.reducerOpen.length}</h3>
    </div>
  )
}

export default connect((prop)=>({prop}),null)(Navbar)