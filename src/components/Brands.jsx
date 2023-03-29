import React from 'react'
import b1 from '../assets/images/official/1.png'
import b2 from '../assets/images/official/2.png'
import b3 from '../assets/images/official/3.png'
import b4 from '../assets/images/official/4.png'
import b5 from '../assets/images/official/5.png'



const Brands = () => {
  return (
    <section class="official-client-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title text-center">
                    <div class="title">
                        <h2>Our Official Clients</h2>
                        <p>Great Initiative with others..</p>
                    </div>
                    <div class="underline thm-bg-clr"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="brand-slider">

                    <ul class="brand-slider-active owl-carousel d-flex flex-wrap">
                            <li class="single-brand">
                                <img src={b1} alt="" />
                            </li>
                            <li class="single-brand">
                            <img src={b2} alt="" />
                            </li>
                            <li class="single-brand">
                                <img src={b3} alt="" />
                            </li>
                            <li class="single-brand">
                                <img src={b4} alt="" />
                            </li>
                            <li class="single-brand">
                                <img src={b5} alt="" />
                            </li>


                    </ul>


                </div>
            </div>


        </div>
    </div>
</section>
  )
}

export default Brands