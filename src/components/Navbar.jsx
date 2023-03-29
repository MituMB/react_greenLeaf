import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [visible, setvisible] = useState(false);

  const searchToggle = () => {
    settoggle(!toggle);
    console.log(!toggle);
  };

  const fixNav = () => {
    const scroll = document.documentElement.scrollTop;
    // console.log(scroll);
    if (scroll > 50) {
      setvisible(true);
    } else if (scroll <= 50) {
      setvisible(false);
    }
  };
  window.addEventListener("scroll", fixNav);
  return (
    <div>
 <div className={visible ? "header-bottom-area fixed" : "header-bottom-area" }>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner-content">
                            <div class="menu-left float-left">
                                <nav class="main-menu navbar navbar-expand-lg navbar-light">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                  <span class="navbar-toggler-icon">
                                    <FaBars />
                                  </span>
                                </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar navbar-nav">
                                        <li class="nav-item">
                                          <Link class="nav-link" to="/">Home</Link>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" href="#about">About Us</a>
                                        </li><li class="nav-item">
                                          <a class="nav-link" href="#services">Services</a>
                                        </li><li class="nav-item">
                                          <Link class="nav-link" to="/#works">Works</Link>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" href="#blogs">Blog</a>
                                          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link class="dropdown-item" to="/blog-list">Blog List</Link></li>
                                          
                                          </ul>
                                        </li>
                                          
                                        </ul>

                                    </div>
                                </nav>
                            </div>

                            <div class="menu-right float-right">
                                <div class="inner-search-box">
                                    <div class="search-toggle" onClick={searchToggle}>
                                    <BiSearch/>
                                      {/* <i class="fa fa-search"></i> */}
                                      </div>
                                     <div className={toggle ? "search-box visible" : "search-box "}>
                                        <form method="post">
                                            <div class="form-group">
                                                <input type="search" name="search" placeholder="Search Here" required />
                                                <button type="submit"><BiSearch/></button>
                                            </div>
                                        </form>
                                    </div> 
                                   
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar