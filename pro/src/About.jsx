import React from"react";
import wb from "../src/images/car4.jpg";
import wbx from "../src/images/car7.jpg";
const About = () =>{
  return (
    <>

<section  id='header'className=''>
<div  className='container-fluid '>
    <div className='row'>
      <div className='col-12 mx-auto'>
      <div className="row">
<div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 '>


<h1>About Us  <strong className='brand-name'> Your Trusted Car Rental Partner </strong> </h1>
<h5 className='my-3'>
 

 we are dedicated to providing reliable, convenient,
 and affordable car rental services to meet your travel needs. With a commitment 
 to excellence, we offer a diverse fleet of vehicles that cater to all 
 occasions—whether it’s a short city trip, a weekend getaway, or a long-term rental.
  Our mission is to make your journey as comfortable and stress-free as possible by delivering 
  exceptional customer service and ensuring every vehicle is maintained to the highest standards. 
Trust us to get you on the road with ease, safety, and style.
</h5>
<div className='mt-3'>

<a href='https://www.instagram.com/ahsanzaidi51272/' className='btn-get-start'> contect now</a>

</div>
</div>


<div className='col-lg-6 order-1 order-lg-2 header-img '>
<img src={wb}  className='.img-fluid animation' alt="home image" />
</div>
<div className='col-lg-6 order-1 order-lg-2 header-img '>
<img src={wbx}  className='.img-fluid animation' alt="home image" />
</div>
</div>
  



</div>

      </div>
    </div>
  

  </section> 


    </>
  );
};
export default About;