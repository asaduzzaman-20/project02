import React from 'react';
import './card.css';
const card = () => {
  return (
    <div>
      <div style={{ width: '18rem' }}>
        <div>
          <img src="@" alt="" />
        </div>
    
      <div className='Card_Body'>
        <div className='Card_Title'>Card Title</div>
        <div className='Card_Text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
        <Button variant="primary">Go somewhere</Button>
      </div>
    </div>
    </div>
  )
}

export default card



// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
    
//   );
// }

// export default BasicExample;