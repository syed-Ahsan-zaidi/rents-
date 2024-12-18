import React from'react';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import'../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contect from './Contact';
import Services from './Services';
import Navbar from './Navbar';



const app = () =>{
  return (
    <>

<Navbar/>
<section className='' id='hom'>
  
  <Home />
  </section>
  <section className='' id='about'>

  <About/>

  </section>
  <section className=''  id='seh'>
  <Services/>
  </section>
  
  <section className=''id='contect'>
  <Contect />

  </section>
    </>
  );
};
export default app;