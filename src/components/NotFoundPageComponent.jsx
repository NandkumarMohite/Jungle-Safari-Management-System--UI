import React, { Component, useEffect, useState } from 'react'

import { useNavigate } from "react-router-dom"




export default function NotFoundPageComponent() {

  const navigate = useNavigate();



  function login(){   
    const user = JSON.parse(localStorage.getItem("user"));
    if ( user.userType== "user") {
      console.log(true);
      navigate("/welcomeuser")
    } else{
      navigate("/welcomeadmin")
    }
  }


  return (
    <>

  <header class="top-header">
</header>


<div>
  <div class="starsec"></div>
  <div class="starthird"></div>
  <div class="starfourth"></div>s
  <div class="starfifth"></div>
</div>



<div class="lamp__wrap">
  <div class="lamp">
    <div class="cable"></div>
    <div class="cover"></div>
    <div class="in-cover">
      <div class="bulb"></div>
    </div>
    <div class="light"></div>
  </div>
</div>

<section class="error">

  <div class="error__content">
    <div class="error__message message">
      <h1 class="message__title">Page Not Found</h1>
      <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>
    </div>
    <div class="error__nav e-nav">
    {/* <button className="btn btn-success btn-lg w-75" >LOGIN</button> */}
      <a onClick={login} target="_blanck" class="e-nav__link"></a>
    </div>
  </div>
  
</section>

  
    
    </>

  );
}
