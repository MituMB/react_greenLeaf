import React from 'react'
import Carousel from 'react-elastic-carousel'
import video from '../assets/images/video/2.jpg'
import playBtn from '../assets/images/icon/play-btn.png'
import client1 from '../assets/images/testimonial/2.png'
import client2 from '../assets/images/testimonial/4.png'

import { ImQuotesLeft } from "react-icons/im";


const Review = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        // { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        // { width: 850, itemsToShow: 3 },
        // { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      ]
  return (
    <section class="feedback-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <div class="title">
                        <h2>Customers Review</h2>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-5 col-sm-12">
                <div class="video-holder w-100 mb-2  mb-lg-0">
                    <img src={video} alt="" class="img-fluid" />
                    <div class="overlay">
                        <div class="icon-holder">

                            <a class="html5lightbox" title="TrimScapers Video Gallery" href="https://www.youtube.com/watch?v=jKYhLpHJv8U">
                                    <img src={playBtn} alt="Play Button"  style={{width: "100px",height:" 100px"}}/>
{/* <!--                                   <i class="icon fa fa-play"></i>--> */}
                               <span class="ripple">
                                   
                               </span>
                                </a>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="testimonial-area">
                    <div class="testimonial-active owl-carousel">
                {/* <button onClick={() => this.carousel.slidePrev()}>Prev</button>
          <button onClick={() => this.carousel.slideNext()}>Next</button> */}
          {/* <Carousel  itemsToShow={2}> */}
          <Carousel breakPoints={breakPoints}>

                        <div class="testimonial-item">
                            <div className="icon">
                            <ImQuotesLeft />
                            </div>
                            <div class="client-review">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatum similique perferendis</p>

                            </div>
                            <div class="client-img">
                                <img src={client1} alt="" />
                            </div>
                            <div class="client-info">
                                <div class="meta">
                                    <h5>- Millar Costa</h5>
                                    <span class="thm-clr"> Developer</span>
                                </div>

                            </div>
                        </div>

                        <div class="testimonial-item">
                        <div className="icon">
                            <ImQuotesLeft />
                            </div>
                            <div class="client-review">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatum similique perferendis</p>

                            </div>
                            <div class="client-img">
                                <img src={client2} alt="" />
                            </div>
                            <div class="client-info">
                                <div class="meta">
                                    <h5>- John Doe</h5>
                                    <span class="thm-clr"> Developer</span>
                                </div>

                            </div>
                        </div>

                        <div class="testimonial-item">
                        <div className="icon">
                            <ImQuotesLeft />
                            </div>
                            <div class="client-review">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatum similique perferendis</p>

                            </div>
                            <div class="client-img">
                                <img src={client1} alt="" />
                            </div>
                            <div class="client-info">
                                <div class="meta">
                                    <h5>- Millar Costa</h5>
                                    <span class="thm-clr"> Developer</span>
                                </div>

                            </div>
                        </div>

                        <div class="testimonial-item">
                        <div className="icon">
                            <ImQuotesLeft />
                            </div>
                            <div class="client-review">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatum similique perferendis</p>

                            </div>
                            <div class="client-img">
                                <img src={client2} alt="" />
                            </div>
                            <div class="client-info">
                                <div class="meta">
                                    <h5>- John Doe</h5>
                                    <span class="thm-clr"> Developer</span>
                                </div>

                            </div>
                        </div>
          </Carousel>




                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Review