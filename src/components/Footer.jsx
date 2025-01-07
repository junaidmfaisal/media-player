import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className=" text-dark py-4 mt-auto">
      <div className="container">
        <div className="d-flex justify-content-between">
          {/*  Intro */}
          <div className="col-md-3">
            <h5 style={{textDecoration:'none', }}><i class="fa-solid fa-music"></i><span className="p-2">Media Player</span></h5>
            
             <p> Designed and built with all the love in the world by the luminar team with the help of our contributors</p>
             
             <p> Code licensed luminar,docs CC BY 3.0.</p>
              
             <p> Currently v5.3.2.</p>

          </div>

          {/*  Links */}
          <div className="d-flex flex-column">
            <h5> Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
            <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
          </div>

          {/* Guides  */}
          <div className="d-flex flex-column">
            <h5>Guides</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://react-bootstrap.github.io/https://react-bootstrap.github.io/" target="_blank" className="text-dark text-decoration-none">
                  React
                </a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction/" target="_blank" className="text-dark text-decoration-none">
                  React Bootstrap
                </a>
              </li>
              <li>
                <a href="https://react-bootstrap.netlify.app/docs/getting-started/introduction/" target="_blank" className="text-dark text-decoration-none">
                  React Router
                </a>
              </li>
           
            </ul>
          </div>

          {/* Contacts */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <div>
              <input style={{borderRadius:'5px',width:'200px',height:'35px',paddingLeft:'10px' }} type="text" placeholder="Enter your email here " /> <button style={{borderRadius:'5px', width:'40px',height:'35px'  }} className="bg-info"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
         
              <a href="https://x.com/__x"><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-brands fa-twitter"></i></a>     
              <a href="https://www.instagram.com/accounts/login/?hl=en"><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-brands fa-instagram"></i></a>  
              <a href="https://www.facebook.com/"><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-brands fa-facebook"></i></a>  
              <a href="https://www.linkedin.com/feed/"><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-brands fa-linkedin"></i></a>  
              <a href="https://github.com/"><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-brands fa-github"></i></a>  
              <a href=""><i style={{paddingRight:'30px',color:"white"}} target="_blank" class="fa-solid fa-phone"></i></a> 
          
            </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center mb-0">Copyright &copy May 2024 Batch, Media Player. Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;