import React from 'react';
import './appHeader.css';

const AppHeader = ({liked, allPosts}) => {
 
    return (
      <div className='app-header d-flex'>
        <h1>Karoline Komarova</h1>
        <h2>{allPosts} записів, з них сподобалось - {liked}</h2>
       
      </div>
    )
  }
 export default AppHeader; 


