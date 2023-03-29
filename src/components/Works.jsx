import React from 'react'
import pj1 from '../assets/images/projects/1.jpg'
import pj2 from '../assets/images/projects/2.jpg'
import pj3 from '../assets/images/projects/3.jpg'
import pj4 from '../assets/images/projects/4.jpg'
import pj5 from '../assets/images/projects/5.jpg'



const Works = () => {
  return (
    <section class="project-area" id="works">
    {/* <!--        <div id="particles-js"></div>--> */}
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title float-left">
                    <div class="title">
                        <h2>Our Latest Works</h2>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
                <div class="filters float-right">
                    <ul class="project-filter clearfix">
                        <li class="active" data-filter="*">All Works</li>
                        <li data-filter=".law">Lawn Care</li>
                        <li data-filter=".garden">Garden Care</li>
                        <li data-filter=".planting">Planting</li>
                        <li data-filter=".snow">Snow Removal</li>
                        <li data-filter=".video">Video Gallery</li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="project-list d-flex flex-wrap">
                    <div class="single-project law">
                        <div class="img-holder">
                            <img src={pj1} alt="" />
                            <div class="inner-content">
                                <h3><a href="#">Modren Garden</a></h3>
                                <p>Lawn Care</p>

                            </div>
                            <div class="overlay-box style-one">
                                <div class="content">
                                    <h3><a href="#">Modren Garden</a></h3>
                                    <p>Lawn Care</p>
                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit corrupti..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-project garden">
                        <div class="img-holder">
                        <img src={pj2} alt="" />
                            <div class="inner-content">
                                <h3><a href="#">Wooden Decks</a></h3>
                                <p>Planting</p>

                            </div>
                            <div class="overlay-box style-one">
                                <div class="content">
                                    <h3><a href="#">Wooden Decks</a></h3>
                                    <p>Planting</p>

                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit corrupti..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-project planting">
                        <div class="img-holder">
                        <img src={pj3} alt="" />
                            <div class="inner-content">
                                <h3><a href="#">Bistro Terrace</a></h3>
                                <p>Snow Removal</p>

                            </div>
                            <div class="overlay-box style-one">
                                <div class="content">
                                    <h3><a href="#">Bistro Terrace</a></h3>
                                    <p>Snow Removal</p>


                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit corrupti..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-project snow">
                        <div class="img-holder">
                        <img src={pj4} alt="" />
                            <div class="inner-content">
                                <h3><a href="#">Walkout Patio</a></h3>
                                <p>Lawn Care</p>

                            </div>
                            <div class="overlay-box style-one">
                                <div class="content">
                                    <h3><a href="#">Walkout Patio</a></h3>
                                    <p>Lawn Care</p>


                                    <div class="text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit corrupti..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-project video">
                        <div class="img-holder">
                        <img src={pj5} alt="" />
                            <div class="inner-content">
                                <h3><a href="#">Parking Cleaning</a></h3>
                                <p>Garden Care</p>

                            </div>
                            <div class="overlay-box style-one">
                                <div class="content">
                                    <h3><a href="#">Parking Cleaning</a></h3>
                                    <p>Garden Care</p>

                                    <div class="text">
                                        <p>How all mistaken idea denouncing pleasue & praising complete.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default Works