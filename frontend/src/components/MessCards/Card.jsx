import React from 'react'
const Card = (props) => (
    <div className="card" style={{"color": "black","paddingBottom": "14px"}}>
      <img src={ props.imgUrl } 
        alt={ props.alt || 'Image' } style={{"height": "200px", "width": "100%","position":"relative"}}/>
        {/* <div style={{"height": "200px","width":"100%", "background":`url(${props.imgUrl})`,"backgroundRepeat": "no-repeat"}}></div> */}
      <div className="card-content">
        <h2>{ props.title }</h2>
        <p>{ props.content }</p>
        <p style={{"float": 'right'}}>{props.price}</p>
      </div>
      <div className="location">
        <button><i class="fa-solid fa-location-dot"></i> Location</button>
        <button><i class="fa-solid fa-circle-info"></i> <a href="/mess">Details</a></button>
      </div>
    </div>
  );
  
export default Card