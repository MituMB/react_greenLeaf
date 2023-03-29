import React from 'react'
import b1 from '../assets/images/blog/6.jpg'
import b2 from '../assets/images/blog/7.jpg'
import b3 from '../assets/images/blog/9.jpg'
import b4 from '../assets/images/blog/8.jpg'

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

const BlogSingle = () => {
  return (
    <div>
         <section class="blog-area blog-detail">

          
        <div class="container">
          <h2 className='my-3'>Blog Details...</h2>
            <div class="row">
                <div class="col-lg-8">
                <div class="blog-item">
                    <div class="imgw-100">
                        <img src={b1} alt="" class="img-fluid" />

                    </div>
                    <div class="text-holder w-100">
                        <h1>Blog post title will go here</h1>
                        <div class="tag">
                            <a href=""> nature</a>
                            <a href=""> garden</a>
                            <a href=""> flower</a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illum tempora, assumenda magni tempore! Quod facere esse ea corporis nam iste, quaerat, quibusdam rerum! Doloremque debitis modi facilis culpa est!</p>
                        <div class="meta">
                            <div class="thm-clr">Written By</div>
                            <Link to="/user-acc">Merry Hasan</Link> <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                </div>
            


                    <div class="row">
                        <div class="col-lg-6">
                            <div class="more d-flex">
                                <div class="icon-holder pre float-left">
                                    <a href=""><i class="fas fa-long-arrow-alt-left thm-clr"></i></a>
                                </div>
                                <div class="text-holder text-right">
                                    <h3><a href="">Previous post title will go here</a></h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="more d-flex">
                                <div class="text-holder">
                                    <h3><a href="">Next post title will go here</a></h3>
                                </div>
                                <div class="icon-holder next">
                                    <a href=""><i class="fas fa-long-arrow-alt-right thm-clr"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>
        
                </div>
                <div class="col-lg-4">
                    <aside class="sidebar">
                        <div class="single-sidebar">
                          
                              <div class="search-box">
                                        <form method="post">
                                            <div class="form-group thm-bg-clr p-4">
                                                <input type="search" name="search" placeholder="Search Here" required />
                                                <button type="submit"><i class="fa fa-search"></i></button>
                                            </div>
                                        </form>
                                    </div> 
                          
                            

                        </div>
                       
                        <div class="single-sidebar">
                            <div class="sidebar-title">
                                <h3> Categories</h3>
                            </div>
                            <ul class="categories">
                                <li>
                                <a href="">Gardenning <span>| 6 |</span></a>
                                </li>
                                 <li>
                                <a href="">Enviroment <span>| 8 |</span></a>
                                </li>
                                <li>
                                <a href="">Tips & Tricks <span>| 8 |</span></a>
                                </li>
                                 <li>
                                <a href="">Fertilization<span>| 5 |</span></a>
                                </li>
                                
                            </ul>
                        </div>     
                        <div class="single-sidebar">
                            <div class="sidebar-title">
                                <h3> Popular Post</h3>
                            </div>
                            <ul class="post-holder">
                                <li>
                                    <div class="title-holder float-left">
                                        <h4><a href="">3 Important Reasons to Build a Backyard Fire Pit.</a></h4>
                                    </div>
                                    <div class="icon-holder">
                                    <a href=""><i class="fas fa-long-arrow-alt-right thm-clr"></i></a>
                                </div>
                                </li> <li>
                                    <div class="title-holder float-left">
                                        <h4><a href="">3 Important Reasons to Build a Backyard Fire Pit.</a></h4>
                                    </div>
                                    <div class="icon-holder">
                                    <a href=""><i class="fas fa-long-arrow-alt-right thm-clr"></i></a>
                                </div>
                                </li> <li>
                                    <div class="title-holder float-left">
                                        <h4><a href="">3 Important Reasons to Build a Backyard Fire Pit.</a></h4>
                                    </div>
                                    <div class="icon-holder">
                                    <a href=""><i class="fas fa-long-arrow-alt-right thm-clr"></i></a>
                                </div>
                                </li>
                            </ul>
                            
                        </div>
                        <div class="single-sidebar">
                            <div class="sidebar-title">
                                <h3> Tags</h3>
                                </div>
                                <div class="tags">
                                <a href="">garden</a>
                                <a href="">treeplant</a>
                                <a href="">flower</a>
                                <a href="">grass</a>
                                <a href="">ecosystem</a>
                                <a href="">plantation</a>
                                <a href="">air</a>
                                <a href="">idea</a>
                                <a href="">seed</a>
                                <a href="">enviroment</a>
                                
                            </div>
                            
                        </div>
                        
                    </aside>
                </div>
            </div>
            {/* <!--====== Pagination Start ======--> */}

        </div>
    </section>
    </div>
  )
}

export default BlogSingle