import React from"react";
import web from "../src/images/car-03.jpg";
import we from "../src/images/scar4.jpg";
const Home = () =>{
  return (
    <>

<section  id='header'className=''>
<div  className='container-fluid '>
    <div className='row'>
      <div className='col-12 mx-auto'>
      <div className="row">
<div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 '>


<h1> Grow your business with Travel Agency<strong className='brand-name'> Rent A Car</strong> </h1>
<h5 className='my-3'>
  Our extensive fleet includes a variety of vehicles to suit your needs, from compact cars for city driving to spacious SUVs for family adventures. With competitive pricing, flexible rental terms, and exceptional customer service, we aim to provide a seamless experience from booking to drop-off
</h5>




<div className='mt-3'>

<a href='https://www.instagram.com/ahsanzaidi51272/' className='btn-get-start'> contect me </a>

</div>
</div>


<div className='col-lg-6 order-1 order-lg-2 header-img '>

<img src={web}  className='.img-fluid animation' alt="home image" />

</div>
<div className='col-lg-6 order-1 order-lg-2 header-img '>

<img src={we}  className='.img-fluid animation' alt="home image" />

</div>
</div>
</div>

      </div>
    </div>
  

  </section> 


    </>
  );
};
export default Home;