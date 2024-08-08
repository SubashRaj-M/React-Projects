import React from 'react'
const myStyle = {
    color: "black",
    backgroundColor: "white",
   
    display: "flex",
    padding: "50px",
    margin : "50px",
  };

  const myStyle2={
    display: "flex",
    padding: "100px",
    margin : "50px",
    alignItems: "flex-start",
    
    justifyContent: "space-between",
    gap: "40px",
    borderRadius: "10px",
    cursor: "grab",
    flexDirection: "column",
    lineHeight: "1.8",
  }

  const myStyle3={
   width: "400px",
   height: "400px",
   marginTop: "60px",
  }

const Card2 = () => {
  return (
    <>

    
      <div className="card" style={myStyle}>
        <div className='card-img' style={myStyle3}>
      <img src='./src/assets/asset 7.jpeg' alt="Robo" />
      </div>
      <div className='card-text' style={myStyle2}>
      <h2>FEATURED</h2>
      <h2>AI As a Service</h2>  
      <p>Free yourself from servers by moving to the Cloud, Rest assured you have a trusted and secure cloud to support your business day-to-day</p>

      <a href="http://accenous.com" target="_blank">Know More</a>
      </div>
      </div>
    </>
  )
}

export default Card2

