import React from "react";
import "./home.css";
import Nav from './nav';
import ico1 from "../images/ico1.png";
import ico2 from "../images/ico2.png";
import ico3 from "../images/ico3.png";

function Home() {


  return (
 
<div  >
 <Nav/>
<div className="about1">
</div>

<div className="hero">
  <div className="about3"></div>
  <div className="content">𝕋𝕆 𝕊𝔸𝕍𝔼 𝕐𝕆𝕌ℝ 𝕄𝕆𝕄𝔼ℕ𝕋</div>
</div>
<div className="about2">
  
   <span>𝐑𝐚𝐭𝐞𝐝 ⭐𝟒.𝟗 𝐅𝐫𝐨𝐦 𝟐.𝟎𝟎𝟎+ </span>
  <pre>  Lumière <br />
Discover a world of special moments with Lumière, <br />
the perfect place to book your photography sessions <br />
with ease and comfort. Whether you’re looking for a <br />
professional portrait session, a warm family shoot,<br />
or creative sessions for your projects, the platform <br />
offers a wide selection of professional photographers <br />
and lets you choose the time and place that suits you best.<br /> 
 
  
  
  
 </pre>
 

 
 </div>
<div className="icoo">
<div className="x1">
  <img src={ico1} />
 

  <img src={ico2} />
  

<img src={ico3} />
 
 </div>
<div className="x11">
<h2>𝐄𝐱𝐩𝐞𝐫𝐭 𝐏𝐡𝐨𝐭𝐨𝐠𝐫𝐚𝐩𝐡𝐞𝐫𝐬</h2>
<h2>𝐅𝐥𝐞𝐱𝐢𝐛𝐥𝐞 𝐓𝐢𝐦𝐢𝐧𝐠</h2>
<h2 className="hh22">𝐐𝐮𝐢𝐜𝐤 𝐁𝐨𝐨𝐤𝐢𝐧𝐠</h2>
</div>


</div>






</div>










  
  )
}

export default Home