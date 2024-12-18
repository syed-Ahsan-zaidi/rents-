import React from'react';
import ce from'../src/images/scar1.jpg';
import cel from'../src/images/scar3.jpg';
import ceo from'../src/images/scar5.jpg';
import cep from'../src/images/scar4.jpg';
import ceq from'../src/images/scar2.jpg';
import cer from'../src/images/scar2.jpg';
const Services = () =>{
  return (
    <>
<div className='my-5'>
<h3 className='tab-center'>OUR Services </h3>
</div>
<div className='container-fluid mb-5'>
<div className='row'>
<div className='col-10 mx-auto'>
<div className='row'>
  <div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={ce} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">foruner</h5>
    <p class="card-text">24 hours rent is 15000 no include a feul . available a driver</p>
    <a href="https://www.instagram.com/ahsanzaidi51272/" class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
<div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={cel} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">legender</h5>
    <p class="card-text">24 hours rent is 25000 no include a feul . available a driver</p>
    <a href="https://www.instagram.com/ahsanzaidi51272/" class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
<div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={ceo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">mehran</h5>
    <p class="card-text">24 hours rent is 11000 no include a feul . available a driver</p>
    <a href='https://www.instagram.com/ahsanzaidi51272/' class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
<div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={cep} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">suzuki </h5>
    <p class="card-text">24 hours rent is 12000 no include a feul . available a driver</p>
    <a href='https://www.instagram.com/ahsanzaidi51272/' class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
<div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={ceq} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">legender</h5>
    <p class="card-text">24 hours rent is 15000 no include a feul . available a driver</p>
    <a href='https://www.instagram.com/ahsanzaidi51272/' class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
<div className='col-md-4 col-10 mx-auto'>
  <div class="card" >
  <img src={cer}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"> legender</h5>
    <p class="card-text">24 hours rent is 15000 no include a feul . available a driver</p>
    <a href='https://www.instagram.com/ahsanzaidi51272/' class="btn btn-primary">booking now</a>
  </div>
</div>

</div>
</div>
</div>
</div>
</div>


    </>
  );
};
export default Services;