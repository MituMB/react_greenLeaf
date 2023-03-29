import React from 'react'
import AboutImg from '../assets/images/about/2.jpg'

const About = () => {
  return (
    <section class="about-area" id="about">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <div class="title">
                        <h2>About Our Company</h2>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="about-left-content">
                    <div class="img-holder">
                        <img src={AboutImg} alt="" class="img-fluid" />
                    </div>
                    <div class="inner-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur dolorem deleniti. Dolore fugiat omnis error a mollitia perspiciatis, aliquid laudantium accusamus itaque quo iste rerum ratione minima vitae consequuntur.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="about-right-content">
                    <ul>

                        <li class="d-flex">
                            <div class="year">
                                <h3>2000</h3>
                            </div>
                            <div class="text">
                                <h3>Started at Newyork City</h3>
                                <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="year">
                                <h3>2005</h3>
                            </div>
                            <div class="text">
                                <h3>Started at Newyork City</h3>
                                <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                            </div>
                        </li>
                        <li class="d-flex">
                            <div class="year">
                                <h3>2010</h3>
                            </div>
                            <div class="text">
                                <h3>Started at Newyork City</h3>
                                <p>How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="read-more text-center">
                    <a href="" class="btn1 thm-bg-clr">read more</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About