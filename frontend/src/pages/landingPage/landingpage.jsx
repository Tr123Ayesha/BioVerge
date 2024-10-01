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
    <div className='maindiv2'>
        <div className='div2left'>
        <img src={nuclearPower} alt='Nuclear' />
        <img className='upperimgdiv2' src={HydroPower} alt='hydro'/>
        </div>
        <div className='div2Right' >
       <h1>Revolutionizing Energy and Agriculture</h1>
       <a><p>Learn More  <img  src={greenRightArrow} alt='arrow'/></p></a>
       <div className='bottomdiv2'>
       <div className='div2image'>
        <img src={bulb} alt='bulb'/>
       </div>
       <div className='div2para'>
    <p>BioVerge is a pioneering startup providing integrated bioenergy solutions to address 
       the challenges of renewable energy, agriculture, and environmental sustainability. </p>
    <p>We leverage locally available organic waste and innovative technologies to empower
         communities with sustainable and cost-effective solutions.</p>
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
    <img src={div7bg} alt='maindiv7'/>
    <p>
            Clean, reliable energy from organic waste. Our biogas systems provide sustainable energy for heating,
            electricity, and transportation, reducing greenhouse gas emissions and dependence on fossil fuels.
        </p>
</div>

</div>
    );
};

export default Main;