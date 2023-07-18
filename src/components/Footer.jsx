import React from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from 'react-elastic-carousel'
import f1 from '../assets/images/footer/1.jpg'
import f2 from '../assets/images/footer/2.jpg'

const Footer = () => {
  //Owl Carousel Settings
//   const options = {
//     loop: true,
//     center: true,
//     items: 3,
//     margin: 0,
//     autoplay: true,
//     dots: true,
//     autoplayTimeout: 8500,
//     smartSpeed: 450,
//     nav: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 3
//         }
//     }
// };
  return (
    <footer class="footer-area">
    <div class="footer-top">
        <div class="subscribe-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="left-content">
                            <p>Stay with us & get notifications,latest updates, news and special offers </p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="subscribe-form">
                            <form action="#">
                                <input type="text" name="email" placeholder="Your E-mail Address..." />
                                <button class="thm-bg-clr" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="footer-mid-area">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 col-sm-6">
                    <div class="single-footer-widget pdtop-50">
                        <div class="title">
                            <h3>Usefull Links</h3>
                            <div class="underline thm-bg-clr"></div>
                        </div>
                        <ul class="usefull-links mr-5">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Why Choose Us</a></li>
                            <li><a href="#">Our Works</a></li>
                            <li><a href="#">News & Updates</a></li>
                            <li><a href="#">Get a Quote</a></li>
                        </ul>
                        <ul class="usefull-links">
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">FAQ’s</a></li>
                            <li><a href="#">Pricing Plans</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="single-footer-widget pdtop-50">
                        <div class="title">
                            <h3>Recent Post</h3>
                            <div class="underline thm-bg-clr"></div>
                        </div>
                        <div class="recent-post-slider">
                            <div class="r-slider-active owl-carousel">
         
                            
                            <Carousel itemsToScroll={1} itemsToShow={1} enableAutoPlay loop={true}>
                            <div class="single-item">
                                    <div class="img-holder">
                                        <img src={f1} alt="" />

                                    </div>
                                    <div class="text-holder">
                                        <h5><a href="#">Some Recent posts title will go here</a></h5>
                                        <div class="meta">
                                            <span class="thm-clr">Written By</span>
                                            <p>Merry Hasan <span class="thm-clr">|</span> On 22 june,2018</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-item">
                                    <div class="img-holder">
                                        <img src={f2} alt="" />

                                    </div>
                                    <div class="text-holder">
                                        <h5><a href="#">Some Recent posts title will go here</a></h5>
                                        <div class="meta">
                                            <span class="thm-clr">Written By</span>
                                            <p>Merry Hasan <span class="thm-clr">|</span> On 22 june,2018</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                             
                         

                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="footer-logo">
                           <div class="logo">
                            <a href="index-2.html">
                       <i class="flaticon-hand-with-growing-plant thm-clr"></i><span><span class="thm-clr">Green</span>World</span>
                        </a>
                        </div>
                        </div>
                        <ul class="footer-contact-info">
                            <li>
                                <div class="icon-holder">
                                    <span class="flaticon-placeholder thm-clr"></span>
                                </div>
                                <div class="text-holder">
                                    <h3>Address:</h3>
                                    <p>Company Address will go here</p>
                                    {/* <!-<a class="map-find" href="#">Find Us On Map</a> --> */}
                                </div>
                            </li>
                            <li>
                                <div class="icon-holder">
                                    <span class="flaticon-phone-contact thm-clr"></span>
                                </div>
                                <div class="text-holder">
                                    <p><span>Phone:</span> +99168...</p>
                                </div>
                            </li>
                            <li>
                                <div class="icon-holder">
                                    <span class="flaticon-email thm-clr"></span>
                                </div>
                                <div class="text-holder">
                                    <p><span>Email:</span> Support@company.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer-bottom-area">
                        <div class="copyright-text float-left">
                            <p>Copyright © 2023 <a class="thm-clr" href="#">GreenWorld</a> by <a class="thm-clr" href="#"></a>. All Rights Reserved.</p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
