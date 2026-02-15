
import Nav from './nav';
import "./contact.css";
import twit from "../images/twit.png";
import face from "../images/face.png";
import whats from "../images/whats.png";
import insta from "../images/insta.png";

function Connt() {





  
  return (

     
     <div className="social-icons">
        <Nav/>
        <div className='so2'><h2>  Stay Contact With Us </h2></div>
      <div className='so1'>


      <a href="https://instagram.com/ ">
        <img src={insta}  />
      </a>


      <a href="https://wa.me/" >
        <img src={whats} />
      </a>


      <a href="https://facebook.com/">
        <img src={face}  />
      </a>


      <a href="https://twitter.com/" >
        <img src={twit}  />
      </a>
</div>
    </div>
      

    
   
  );
}

export default Connt;

