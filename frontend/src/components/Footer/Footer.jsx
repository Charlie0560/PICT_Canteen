import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div>
     <footer>
        <div class="footer-content">
            <h3>PICT CANTEEN</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates repellat sequi unde? Id sequi consequatur nesciunt officia quibusdam dignissimos.</p> */}
           <center>
            <p>copyright &copy; <a href="/"> PICT CANTEEN</a>  </p>

           <ul class="socials">
                <li><a href="/"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-linkedin"></i></a></li>
            </ul>
           </center>
        </div>
       

    </footer>
    </div>
  );
}
