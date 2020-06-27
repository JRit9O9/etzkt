import React from 'react';

function Logo(props) {
  return (
    <div style={{
      width:"120px",
      height:"3rem",
      backgroundColor:"#005450",
      alignItems:"center"
    }} >
       <img
      alt="Logo"
      src={require('src/assets/eatiz_1024.jpg')}
      style={{width:"2.3rem",
      marginLeft:"40px"}} 
      {...props}
    />
    </div>
    
  );
}

export default Logo;
