import React from 'react'
import b1 from '../assets/images/blog/6.jpg'
import b2 from '../assets/images/blog/7.jpg'
import b3 from '../assets/images/blog/9.jpg'
import b4 from '../assets/images/blog/8.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <section class="blog-area" id="blogs">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <div class="title">
                        <h2>Latest blogs</h2>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 mb-3 mb-md-0">
                <div class="blog-item">
                    <div class="img-holder">
                        <img src={b1} alt="" class="img-fluid" />
                        <div class="hover-btn">
                            <a href="" class="btn2 thm-clr">
                          
                            <FaLongArrowAltRight />
                             
                           {/* <i class="fas fa-long-arrow-alt-right"></i> */}
                        </a>
                        </div>
                        <div class="tag">
                            <a href=""> nature</a>
                            <a href=""> garden</a>
                            <a href=""> flower</a>
                        </div>

                    </div>
                    <div class="text-holder">
                        <Link to="/blog-list/1">
                        <h3>Blog post title will go here</h3>
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illum tempora, assumenda magni tempore! Quod facere esse ea corporis nam iste, quaerat, quibusdam rerum! Doloremque debitis modi facilis culpa est!</p>
                        <div class="meta">
                            <div class="thm-clr">Written By</div>
                            <Link to="/user-acc">Merry Hasan</Link> <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="blog-item">
                    <div class="img-holder">
                        <img src={b2} alt="" class="img-fluid" />
                        <div class="hover-btn">
                            <a href="" class="btn2 thm-clr">
                            <FaLongArrowAltRight />
                        </a>
                        </div>
                        <div class="tag">
                            <a href=""> nature</a>
                            <a href=""> garden</a>
                            <a href=""> flower</a>
                        </div>

                    </div>
                    <div class="text-holder">
                        <Link to="/blog-list/1">
                        <h3>Blog post title will go here</h3>
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illum tempora, assumenda magni tempore! Quod facere esse ea corporis nam iste, quaerat, quibusdam rerum! Doloremque debitis modi facilis culpa est!</p>
                        <div class="meta">
                            <div class="thm-clr">Written By</div>
                            <Link to="/user-acc">Merry Hasan</Link> <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-6 mb-3 mb-md-0">
                <div class="blog-item ">
                <div class="text-holder">
                        <Link to="/blog-list/1">
                        <h3>Blog post title will go here</h3>
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illum tempora, assumenda magni tempore! Quod facere esse ea corporis nam iste, quaerat, quibusdam rerum! Doloremque debitis modi facilis culpa est!</p>
                        <div class="meta">
                            <div class="thm-clr">Written By</div>
                            <Link to="/user-acc">Merry Hasan</Link> <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                    <div class="img-holder">
                        <img src={b3} alt="" class="img-fluid" />
                        <div class="hover-btn">
                            <a href="" class="btn2 thm-clr">
                            <FaLongArrowAltRight />
                        </a>
                        </div>
                        <div class="tag">
                            <a href=""> nature</a>
                            <a href=""> garden</a>
                            <a href=""> flower</a>
                        </div>

                    </div>

                </div>
            </div>
            <div class="col-lg-6">
                <div class="blog-item">
                <div class="text-holder">
                        <Link to="/blog-list/1">
                        <h3>Blog post title will go here</h3>
                        </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia illum tempora, assumenda magni tempore! Quod facere esse ea corporis nam iste, quaerat, quibusdam rerum! Doloremque debitis modi facilis culpa est!</p>
                        <div class="meta">
                            <div class="thm-clr">Written By</div>
                            <Link to="/user-acc">Merry Hasan</Link> <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                    <div class="img-holder">
                        <img src={b4} alt="" class="img-fluid" />
                        <div class="hover-btn">
                            <a href="" class="btn2 thm-clr">
                            <FaLongArrowAltRight />
                        </a>
                        </div>
                        <div class="tag">
                            <a href=""> nature</a>
                            <a href=""> garden</a>
                            <a href=""> flower</a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blogs