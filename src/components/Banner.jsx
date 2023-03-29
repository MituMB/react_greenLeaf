import React from 'react'
import BannerImg from '../assets/images/bg3.jpg'

const Banner = () => {
  return (
    <div>
       <div class="slider mb-2">
        <div class="slider-area">
            <div class="slider-active owl-carousel">
                <div class="single-slide">
                    <img src={BannerImg} alt="" />
                    
                <div class="slide-content">
                    <span>our clients are our first priority</span>
                    <h1>WELCOME TO BINO</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo, eos doloribus perferendis sint!</p>
                    <div class="btn-group">
                        <a href="" class="btn1 thm-bg-clr">get started now</a>
                        
                    </div>
                </div>

                </div>
                {/* <div class="single-slide">
                    <img src="assets/img/bg2.jpg" alt="" />
          
                <div class="slide-content">
                    <span>our clients are our first priority</span>
                    <h1>WELCOME TO BINO</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nemo, eos doloribus perferendis sint ipsum adipisci suscipit itaque, consequuntur iusto! Labore nulla, similique suscipit, blanditiis voluptatem expedita saepe commodi vero!</p>
                    <div class="btn-group">
                        <a href="" class="btn1 thm-bg-clr">get started now</a>
                        
                    </div>
                </div>
                </div> */}
            </div>
        </div>
    </div>

    </div>
  )
}

export default Banner