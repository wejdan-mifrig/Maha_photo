import React, { useState, useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.png";


function Nav() {

  return (
 
<div id="nav">
<img  src={ logo1}/>
<ul id="ul1">
<li>  <Link className="l1" to="/">ℍ𝕆𝕄𝔼</Link></li>
<li>  <Link className="l1"   to="/book">𝔹𝕆𝕆𝕂𝕀ℕ𝔾</Link></li>
<li>  <Link className="l1"  to="/contact">𝔸𝔹𝕆𝕌𝕋 𝕌𝕊</Link></li>
</ul>
<h1>Lumière </h1>
</div>

  )
}

export default Nav
