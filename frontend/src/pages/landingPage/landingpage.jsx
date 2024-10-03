import React ,{useState} from 'react';
import "./landingpage.css";
import biovergelogo from '../../assets/biovergelogo.svg';
import arrowright from '../../assets/arrowright.svg';
import greenRightArrow from '../../assets/greenRightArrow.svg';
import blackArrow from '../../assets/blackArrow.svg';
import bulb from '../../assets/bulb.svg';
import { Button } from "antd";
import nuclearPower from '../../assets/nuclearPower.svg';
import HydroPower from  '../../assets/HydroPower.svg';
import OurSolution from '../../assets/OurSolution.png';
import Asset from '../../assets/Asset.jpg';
import div5 from  '../../assets/div5.svg';
import Group2 from '../../assets/Group2.svg';
import div6 from  '../../assets/div6.svg';
import div7bg from '../../assets/div7bg.svg';
import div8 from  '../../assets/div8.svg';
import div9 from  '../../assets/div9.svg';
import BlurRightDiv2 from '../../assets/BlurRightDiv2.svg';
const Main = () => {
    return(
<div className='landingPage'>
    <div className='maindiv1'>
     <div className='header'>
     <div className='headerdiv1item'>
       <img src={biovergelogo} alt='logo' />
       <p>BioVerge</p>
   </div>
   <div className='headerdiv1item2'>
<a><p>Home</p></a>
<a><p>Solutions</p></a>
<a><p>Innovation</p></a>
<a><p>About Us</p></a>
   </div>
   <div className='headerdiv1item3'>
   <a><p>Contact Us</p></a>
  <img src={arrowright} alt='arrow'/>
   </div>
   </div>
   <div className='div1part2'>
<h1>Empowering Sustainable Futures with BIOENERGY</h1>
<p>Integrated solutions for renewable energy, sustainable agriculture, and CO2 capture in Saudi Arabia and the MENA region.</p>
<Button  className="button1" type="primary" size='large'>Learn More</Button>
   </div>
    </div>
    <div className="maindiv2">
    <div className="div2rightBlur"></div>
    <div className="div2leftBlur"></div>
  <div className="div2left">
    <img src={nuclearPower} alt="Nuclear" />
    <img className="upperimgdiv2" src={HydroPower} alt="hydro" />
  </div>
  <div className="div2Right">
    <h1>Revolutionizing Energy and Agriculture</h1>
    <a>
      <p>Learn More <img src={greenRightArrow} alt="arrow" /></p>
    </a>
    <div className="bottomdiv2">
      <div className="div2image">
        <img src={bulb} alt="bulb" />
      </div>
      <div className="div2para">
        <p>BioVerge is a pioneering startup providing integrated bioenergy solutions to address the challenges of renewable energy, agriculture, and environmental sustainability.</p>
        <p>We leverage locally available organic waste and innovative technologies to empower communities with sustainable and cost-effective solutions.</p>
      </div>
    </div>
  </div>
</div>

    <div className='maindiv3'>
   <div className='div3right'>
   <p><span className="custom-underline">OUR</span> SOLUTIONS</p>
<h3> A Suite of Integrated Solutions</h3>
<div className='div3arrow'>
   <a><p>Learn More<img src={blackArrow} alt='arrow'/></p> </a>
   </div>
</div>
<div className='div3left'>
    <div className='image-container'>
        <img src={OurSolution} alt='Oursolution' />
        <p>
            Clean, reliable energy from organic waste. Our biogas systems provide sustainable energy for heating,
            electricity, and transportation, reducing greenhouse gas emissions and dependence on fossil fuels.
        </p>
    </div>
</div>

    </div>
    <div className='maindiv4'>
    <div className="div4leftBlur"></div>
<div className='div4Left'>
<img src={Asset} alt='image'/>
</div>
<div className='div4Right'>
    <div className='upperpartdiv4'>
<h2>Bio-fertilizer Production</h2>
<a><span>Learn More  <img  src={greenRightArrow} alt='arrow'/></span></a>
</div>
<p>Boost soil fertility and crop yields naturally. Our bio-fertilizers 
    are organic alternatives to chemical fertilizers,promoting sustainable
     agriculture and minimizing environmental impact.</p>
</div>
    </div>
    <div className='maindiv5'>

<div className='div5left'>
<div className="div5rightBlur"></div>
<div className="div5leftBlur"></div>
<h1>Canned CO2</h1>
<a><span>Learn More  <img  src={greenRightArrow} alt='arrow'/></span></a>
<p>Capturing and utilizing CO2 for a sustainable future. Our canned CO2 
    provides a sustainable source for various industries, supporting the
     transition to a low-carbon economy.</p>
</div>
<div className='div5Right'>
<img src={div5} alt='div5 Image'/>
<img className='div5upper' src={Group2} alt='group2'/>
</div>
    </div>
    <div className='maindiv6'>
    <div className='div6Left'> 
        <img src={div6} alt='Div6'/>
        <div className="div6centerBlur"></div>
        <img className='grid' src={HydroPower} alt='grid system'/>
    </div>
    <div className='div6Right'> 
        <h1>Education & Training</h1>
        <a><span>Learn More  <img  src={greenRightArrow} alt='arrow'/></span></a>
        <p>Empowering communities with knowledge and skills. We offer
             education and training services to ensure effective 
             implementation and management of our bioenergy solutions.</p>
    </div>
    </div>
    <div className='maindiv7'>
    <div className="div7rightBlur"></div>
    <div className="div7leftBlur"></div>
    <img src={div7bg} alt='maindiv7'/>
    <div className='div7'>
        <h1>Get in Touch</h1>
        <p>
        Contact us to learn more about our integrated bioenergy 
        solutions and how we can help you achieve your sustainability 
        goals. </p>
        <div className="email-input-wrapper">
  <input 
    type="text" 
    name="myInput" 
    placeholder="info@biovergeenergy.com"
  />
  <button className="arrow-button">
    <img src={arrowright} alt="arrow" />
  </button>
</div>

    </div>
</div>
<div className='maindiv8'>
    <div className='div8Left'> 
        <img src={div8} alt='Div8'/>
    </div>
    <div className='div8Right'> 
        <div className='div8rightUpper'>
    <h3><span className="custom">ABOUT</span> US</h3>
        <h1>Our Story</h1>
        <a><span className='learnmore'>Learn More  <img  src={blackArrow} alt='arrow'/></span></a>
        </div>
        <p>BioVerge emerged from the growing need for sustainable 
            energy and agricultural solutions in Saudi Arabia and the 
            MENA region. Our experienced team combines expertise in renewable 
            energy, agriculture, environmental science, and business management
             to deliver innovative and impactful solutions.</p>
    </div>
    </div>
    <div className="maindiv9">
  <div className="div9left">
    <img src={div9} alt="bioenergy background" />
  </div>
  <div className="div9right">
  <div className="div9rightBlur"></div>
  <div className="div9leftBlur"></div>
    <h2>Contact us</h2>
    <p>
      We'd love to hear from you. Please use the form below to get in touch or
      reach out to us directly via email.
    </p>
    <form>
      <div className="form-group">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your Email Address" />
      </div>
      <div className="form-group">
        <textarea placeholder="Question"></textarea>
      </div>
      <button type="submit" className="submit-button">
        Send Question
        <img src={greenRightArrow} alt="arrow" />
      </button>
    </form>
  </div>
</div>
<footer className="footer-container">
  <div className="footer-content">
    <div className="footer-left">
    <div className='footeritem1'>
       <img src={biovergelogo} alt='logo' />
       <h1>BioVerge</h1>
   </div>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo</p>
    </div>
    <div className="footer-middle">
      <div className="footer-column">
        <h4>Information</h4>
        <ul>
          <li>Industry analytics</li>
          <li>News and release</li>
          <li>Events</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Useful Links</h4>
        <ul>
          <li>Services</li>
          <li>Our Solution</li>
          <li>Innovation</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li>Headquarters</li>
          <li>Manager</li>
          <li>Sales</li>
          <li>Why Us</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>Copyright ©2024. All Rights Reserved.</p>
    <div className="footer-links">
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Policy and Cookie Policy</a>
    </div>
  </div>
</footer>

</div>
    );
};

export default Main;