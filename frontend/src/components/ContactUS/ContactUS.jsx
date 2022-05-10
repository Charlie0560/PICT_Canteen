import React from 'react'
import "./contactus.css"
import Navbar from '../Navbar/Navbar'

function ContactUS() {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="contactusform">
                <h1 style={{"textAlign": "center", "color": "white"}}>Contact US</h1>
                <form action="">
                   <div className="inputdiv">
                   <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='Email'/>
                    <input type="number" placeholder='Phone no.'/>
                    {/* <input type="text"
                    te /> */}
                    <textarea name="msg" id="msg" cols="30" rows="7" placeholder='Your Message'></textarea>
                    <center>
                    <button >Submit</button>

                    </center>
                   </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUS