import React from 'react'
import logo from '../updatedimages/Logo Color.png'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg  navbar-dark fixed-top py-0 navbar-bgcolor">
        <div class="d-flex align-items-center  p-2">
            <Link to='/'><img src={logo}class="logo-img"/></Link>
            
            
        </div>
        

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon bg-dark"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-around" id="navmenu" >
          <ul class="navbar-nav ">
            <li class="nav-item px-sm-3 px-md-3 px-3 py-sm-0 py-md-0 py-2">
                
              <h6><Link to='/company'  class="nav-link p-2  hover-underline-animation nav-font">Company </Link></h6>
            </li>
            <li class="nav-item px-sm-3 px-md-3 px-3 py-sm-0 py-md-0 py-2">
                <h6><Link to="/services" class="nav-link p-2  hover-underline-animation nav-font">Accessories</Link></h6>
            </li>
            <li class="nav-item px-sm-3 px-md-3 px-3 py-sm-0 py-md-0 py-2">
              <h6><Link to="/products"class="nav-link p-2  hover-underline-animation nav-font">Internal Components</Link></h6>
            </li>
            <li class="nav-item px-sm-3 px-md-3 px-3 py-sm-0 py-md-0 py-2">
              <h6><Link to="/projects" class="nav-link p-2  hover-underline-animation nav-font">Cables</Link></h6>
            </li>
            <li class="nav-item px-sm-3 px-md-3 px-3 py-sm-0 py-md-0 py-2">
                <h6><Link to="#" class="nav-link p-2  hover-underline-animation nav-font">More</Link></h6>
            </li>
          </ul>
        </div>
        <div class="d-none d-lg-inline px-3">
            <button class="nav-item btn-header p-3"><Link to="/cart" class="nav-link d-inline-block">Cart </Link><i class="bi bi-arrow-right px-2"></i></button>
        </div>
    </nav>
    </div>
  )
}

export default Header
