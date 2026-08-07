import React from 'react'
import './Style.css';

import home from './home.module.css';

const Styling = () => {
  return (
    <>
  
      <h2 class="heading">Styling In React JS External style </h2>
      <h2 style={{ backgroundColor: 'pink', color: 'purple' }}>Styling In React JS Inline style </h2>
      <h2 className={home.heading}>Styling In React JS CSS Module style </h2>

    </>
  )
}

export default Styling