import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import messimg from "./canteen.jpeg"
import "./singlelmess.css"

function SingleMess() {
  return (
    <div>
        <Navbar/>
        <div className="messtop container">
            <img src={messimg} alt="" className='messimg' />
            <div className="messdetails">
                <h3>Mess Name</h3>
                <p><i class="fa-solid fa-phone"></i> +91-654861565</p>
                <p>Monthly Rate:- 3200/-</p>
                <p>One Time Rate:-  1800/-</p>
                <p>Non-veg Days:- Wednesday, Sunday</p>
                <p style={{"color": "red", "fontSize": "18px"}}>Sunday Evening Off</p>
                <p style={{"color": "green","fontSize": "18px"}}><i class="fa-solid fa-square-o"></i>Pure Veg</p>
            </div>
        </div>
        <div className="messmiddledesc container">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, iste quo sit natus iure, magni ipsum nihil aut nemo quidem perferendis deleniti velit doloribus aliquid magnam corporis maxime assumenda minima. Dolorem quia quasi, consequatur facilis eveniet distinctio corporis voluptatibus voluptate quae cumque tenetur repellendus consequuntur libero dicta explicabo incidunt et ab, illo sit omnis perspiciatis suscipit. Amet, possimus et blanditiis eveniet ex illo nemo quaerat earum, veniam aperiam unde numquam nihil voluptatibus repudiandae sed nobis beatae, quo ratione id neque praesentium sapiente eum! A dolorem, cupiditate voluptatum ipsam, ipsum officiis earum quidem, quos assumenda aliquid voluptates. Iusto aperiam iure quasi.
            </p>
        </div>
        <div className="messbottommap container">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.447268180045!2d73.85396056891356!3d18.458620289707564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1647937646630!5m2!1sen!2sin" width="100%" height="450" tabindex="0" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
        <Footer/>
    </div>
  )
}

export default SingleMess