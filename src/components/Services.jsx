import React from 'react'
import Service1 from '../assets/images/service/7.jpg'
import Service2 from '../assets/images/service/8.jpg'
import Service3 from '../assets/images/service/9.jpg'


const Services = () => {
  return (
    <>
        <section class="service-area" id="services">
    <div class="container">
        <div class="section-title text-center">
            <div class="title">
                <h2>Services We Offer</h2>
            </div>
            <div class="underline thm-bg-clr"></div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="service-slider">
                    <div class="service-slider-active owl-carousel d-flex flex-wrap">

                        <div class="single-service-item">
                            <div class="service-box ">
                                <div class="title text-center">
                                    <h3><a href="">Spring & Fall Cleanup</a></h3>
                                </div>
                                <div class="img-holder">
                                    <img src={Service1} alt="" class="img-fluid" />
                                    <div class="overlay-box style-one">
                                        <div class="content">
                                            <a href="">Read More <span class="fas fa-long-arrow-alt-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-holder">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit architecto...</p>
                                </div>
                            </div>
                        </div>


                        <div class="single-service-item">
                            <div class="service-box">
                                <div class="title text-center">
                                    <h3><a href="">Snow & Ice Removal</a></h3>
                                </div>
                                <div class="img-holder">
                                    <img src={Service2} alt="" class="img-fluid" />
                                    <div class="overlay-box style-one">
                                        <div class="content">
                                            <a href="">Read More <span class="fas fa-long-arrow-alt-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-holder">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit architecto...</p>
                                </div>
                            </div>
                        </div>


                        <div class="single-service-item">
                            <div class="service-box">
                                <div class="title text-center">
                                    <h3><a href="">Stone & Hardscaping</a></h3>
                                </div>
                                <div class="img-holder">
                                    <img src={Service3} alt="" class="img-fluid" />
                                    <div class="overlay-box overlay-style-one">
                                        <div class="content">
                                            <a href="">Read More <span class="fas fa-long-arrow-alt-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-holder">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit architecto...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>



</section>
  {/* Slogan area--> */}

   <section class="slogan-area">
       <div class="container">
           <div class="row justify-content-center">
               <div class="col-lg-8">
                   <div class="inner-content">
                       <div class="mid-content">

                           <h2>Become a part of our family by joining our Campaign & help us by donating</h2>
                           <a href="" class="btn1 thm-bg-clr">contact us</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </section>


    </>

  )
}

export default Services