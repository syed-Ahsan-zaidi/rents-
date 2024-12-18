import React from 'react';
//import r from'../src/images/car-2.jpg';
const Navbar = () => {
    return(
        <>
       <div className="container-fluid nav bg">
<div className="row">
  <div className="col-12 mx-auto">

  
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
<div className="container-fluid">
  
    <a className="navbar-brand" href="#">Rent a car </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#hom">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#seh">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contect">contect</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

</div>
       </div>
        </>
    );
};
export default Navbar;