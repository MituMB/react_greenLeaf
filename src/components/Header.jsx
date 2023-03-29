import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsClockHistory } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div class="header-mid-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-12">
                        <div class="hm-left">
                            <div class="logo">
                                <Link to="/">
                           <i class="flaticon-hand-with-growing-plant thm-clr"></i><span><span class="thm-clr">Green</span>World</span>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-sm-8 mt-sm-2">
                        <div class="hm-mid">
                            <ul class="address-info">
                                <li>
                                    <div class="icon-holder">
                                        <span class="flaticon-placeholder thm-clr">
                                        <SlLocationPin />
                                        </span>
                                    </div>
                                    <div class="title-holder">
                                        <span>Big Smart Street</span>
                                        <h4>2nd Cross, Newyork, USA.</h4>
                                    </div>
                                </li>
                                <li>
                                    <div class="icon-holder">
                                        <span class="flaticon-clock thm-clr">
                                            <BsClockHistory />
                                        </span>
                                    </div>
                                    <div class="title-holder">
                                        <span>Mon - Satday</span>
                                        <h4>09.00am to 06.00pm.</h4>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-sm-4 col-12">
                        <div class="hm-right float-right d-flex justify-content-end">
                            <a href="#" class="btn1 thm-bg-clr">FAQ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header