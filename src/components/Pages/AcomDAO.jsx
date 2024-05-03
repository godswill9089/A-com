import React, { useEffect } from 'react'
import acom from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";
import discord from "../../assets/dis.png";
import linkden from "../../assets/linkden.png";
import twitter from "../../assets/x.png";
import git from "../../assets/git.png"
import facebook from "../../assets/facebook.png";
import raddit from "../../assets/raddit.png";
import insta from "../../assets/insta.png";
import notion from "../../assets/notion.png";
import "../Billing.css";
import "./AcomDAO.css";
import sky from "../../assets/Images/Home-Images/sky.png";
import mon from "../../assets/Images/Home-Images/moon.png";
import water from "../../assets/Images/Home-Images/water.png";
import center from "../../assets/Images/Home-Images/center-city.png";
import right from "../../assets/Images/Home-Images/right-city.png";
import left from "../../assets/Images/Home-Images/left-city.png";
import train from "../../assets/Images/Home-Images/train.png";
import rail from "../../assets/Images/Home-Images/rail.png";
import hill from "../../assets/Images/Home-Images/hill-left-1.png";
import hill2 from "../../assets/Images/Home-Images/hill-right-1.png";
import fall from "../../assets/Images/About-Images/waterfall.png";
import desert from "../../assets/Images/About-Images/desert-sky.png";
import desert2 from "../../assets/Images/About-Images/desert-moon.png";
import desert3 from "../../assets/Images/About-Images/desert-NoSky.png";
import desert4 from "../../assets/Images/About-Images/desert-rock.png";
import water2 from "../../assets/Images/About-Images/water.png";
import man from "../../assets/Images/About-Images/man.png";
import grass from "../../assets/Images/About-Images/grass.png";
import salmon from "../../assets/Images/products/Salmon.png";
import tuna from "../../assets/Images/products/Tuna.png";
import sword from "../../assets/Images/products/Swordfish.png";
import snap from "../../assets/Images/products/Snapper.png";



const AcomDAO = () => {

  useEffect(()=>{
    let moon = document.getElementById("moon");
    let text = document.getElementById("text");
    let train = document.getElementById("train");
    let desert_moon = document.getElementById("desert2");
    let man = document.getElementById("man");  
    window.addEventListener("scroll",() => {
      let value = window.scrollY;
      if (moon) {
          moon.style.top = value * .9 + "px";
          text.style.top = 80 + value * -0.2 + "%";
          train.style.left = value * 1.5 + "px";
          desert_moon.style.top = value * .3 + "px";
          man.style.left = value * .6 + "px";
      }
    })

    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;

      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100)/calcHeight);

      if (scrollProgress) {
        if (pos > 100) {
          scrollProgress.style.display = "grid";
        } else {
          scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#194eb9 ${scrollValue}%,#67ccff ${scrollValue}%)`;
      }
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  },[])

  return (
   <>
   <div className='body'>
   <div className='header'>
      <Link to="/">
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
          <img src={acom} alt='A-team' className='w-[50px] h-[50px]' />
          <h1 className='text-white text-gradient font-poppins  ss:text-[20px] ml-3'>ACOMUnityDAO</h1>
          </div>
          <div className='flex flex-row icons gap-4 sm:mt-10 mt-6'>
            <img src={ discord } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-1'/>
            <img src={ linkden } alt="link" className='icon w-[50px] h-[50px] object-contain cursor-pointer floating-image-2'/>
            <img src={ twitter } alt="twet" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-3'/>
            <img src={ git } alt="git" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-4'/>
            <img src={ facebook } alt="facebook" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-5'/>
            <img src={ raddit } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-6'/>
            <img src={ insta } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-7'/>
            <img src={ notion } alt="dis" className='icon w-[50px] h-[50px] object-contain  cursor-pointer floating-image-8'/>
          </div>
        </div>
      </Link>
    </div>

    <section className='Coming-soon-Home section'>
      <img src={sky} alt="" id=""/>
      <img src={mon} alt="" id="moon"/>
      <img src={water} alt="" id=""/>
      <img src={center} alt="" id=""/>
      <img src={right} alt="" id=""/>
      <img src={left} alt="" id=""/>
      <img src={train} alt="" id="train"/>
      <img src={rail} alt="" id=""/>
      <h1 id='text'>Coming Soon</h1>
      <img src={hill} alt="" id=""/>
      <img src={hill2} alt="" id=""/>
    </section>

    <section className='about' id="about">
        <div className='info-box'>
          <h2>About Us</h2>
          <p>
          ACOMUnity DAO is an innovative decentralized autonomous organization (DAO) that harnesses the 
          power of decentralized technologies and collective action to drive positive change in communities.
          </p>
          <a href='/' className='link'>Read More</a>
        </div>

        <img src={fall} alt="" id="waterfall" className='about-waterfall'/>
        <img src={desert} alt=""/>
        <img src={desert2} alt="" id="desert2"/>
        <img src={desert3} alt=""/>
        <img src={desert4 } alt=""/>
        <img src={water2} alt=""/>
        <img src={man} alt="" id="man"/>
        <img src={grass} alt=""/>
        
        <div id="progress">
          <span id="progress-value">
          <i class='bx bx-chevrons-up'></i>
          </span>
        </div>
    </section>


    <section className='product' id="product">
      <h2>Our Product</h2>
      <div className="product-card">
        <div className="card">
          <img src={salmon} alt=""/>
          <div className="info">
            <div className="price-name">
              <h3>salmon</h3>
              <span>$120</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur quae 
              possimus. Porro, incidunt possimus,quaerat dolores 
            </p>
            <a href='/' className='link'>Buy</a>
          </div>
        </div>

        <div className="card">
          <img src={tuna} alt=""/>
          <div className="info">
            <div className="price-name">
              <h3>tuna</h3>
              <span>$120</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur quae 
              possimus. Porro, incidunt possimus,quaerat dolores 
            </p>
            <a href='/' className='link'>Buy</a>
          </div>
        </div>

        <div className="card">
          <img src={sword} alt=""/>
          <div className="info">
            <div className="price-name">
              <h3>Swordfish</h3>
              <span>$120</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur quae 
              possimus. Porro, incidunt possimus,quaerat dolores 
            </p>
            <a href='/' className='link'>Buy</a>
          </div>
        </div>

        <div className="card">
          <img src={snap} alt=""/>
          <div className="info">
            <div className="price-name">
              <h3>Snapper</h3>
              <span>$120</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tenetur quae 
              possimus. Porro, incidunt possimus,quaerat dolores 
            </p>
            <a href='/' className='link'>Buy</a>
          </div>
        </div>
      </div>
    </section>
   </div>
   </>
  )
}

export default AcomDAO