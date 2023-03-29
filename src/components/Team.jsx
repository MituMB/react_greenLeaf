import React from 'react'
import T1 from '../assets/images/team/3.jpg'
import T2 from '../assets/images/team/4.jpg'
import T3 from '../assets/images/team/5.jpg'
import T4 from '../assets/images/team/6.jpg'
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";

const Team = () => {
  return (
    <section class="team-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <div class="title">
                        <h2>Our Volunteers</h2>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="team-slider">
                    <div class="team-slider-active owl-carousel">
                        <div class="single-team">
                            <div class="row d-flex flex-wrap">
                                <div class="col-lg-3 col-sm-6 my-2">
                                    <div class="team-profile">
                                        <div class="img-holder">
                                            <img src={T1} alt="" class="img-fluid" />
                                            <ul class="link">
                                                <li><a href=""><TfiFacebook /></a></li>
                                                <li><a href=""><TfiTwitterAlt /></a></li>
                                                <li><a href=""><TfiLinkedin /></a></li>
                                                <li><a href=""><AiOutlineGoogle /></a></li>
                                            </ul>

                                        </div>
                                        <div class="text-holder">
                                            <h3 class="thm-clr">Member Name</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 my-2">
                                    <div class="team-profile">
                                        <div class="img-holder">
                                            <img src={T2} alt="" class="img-fluid" />
                                            <ul class="link">
                                            <li><a href=""><TfiFacebook /></a></li>
                                                <li><a href=""><TfiTwitterAlt /></a></li>
                                                <li><a href=""><TfiLinkedin /></a></li>
                                                <li><a href=""><AiOutlineGoogle /></a></li>
                                            </ul>

                                        </div>
                                        <div class="text-holder">
                                            <h3 class="thm-clr">Member Name</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 my-2">
                                    <div class="team-profile">
                                        <div class="img-holder">
                                            <img src={T3} alt="" class="img-fluid" />
                                            <ul class="link">
                                            <li><a href=""><TfiFacebook /></a></li>
                                                <li><a href=""><TfiTwitterAlt /></a></li>
                                                <li><a href=""><TfiLinkedin /></a></li>
                                                <li><a href=""><AiOutlineGoogle /></a></li>
                                            </ul>

                                        </div>
                                        <div class="text-holder">
                                            <h3 class="thm-clr">Member Name</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-sm-6 my-2">
                                    <div class="team-profile">
                                        <div class="img-holder">
                                            <img src={T4} alt="" class="img-fluid" />
                                            <ul class="link">
                                            <li><a href=""><TfiFacebook /></a></li>
                                                <li><a href=""><TfiTwitterAlt /></a></li>
                                                <li><a href=""><TfiLinkedin /></a></li>
                                                <li><a href=""><AiOutlineGoogle /></a></li>
                                            </ul>

                                        </div>
                                        <div class="text-holder">
                                            <h3 class="thm-clr">Member Name</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                        </div>
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

export default Team