import React from "react";
import user from "../assets/images/blog/user.jpg";
import { TfiFacebook } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
const UserProfile = () => {
  return (
    <div>
        <div className="container">

      <div class="pg-heading my-4">
        <div class="title-holder">
          <h2>User Profile</h2>
        </div>
      </div>
<div className="row">
    <div className="col-md-4">

      <div class="single-sidebar">
        <div class="profile">
          <figure class="img-holder  text-center">
            <img src={user} alt="" />
            <figcaption class="meta">
              <span class="thm-clr">Merry Hasan</span>
              <p> Freelancer , Designer & Content Writer </p>
{/* 
              <a href="">
                Read Bio <i class="fas fa-long-arrow-alt-right"></i>{" "}
              </a> */}
            </figcaption>
          </figure>
          <ul class="link">
            <li>
              <a href="">
                <TfiFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <TfiTwitterAlt />
              </a>
            </li>
            <li>
              <a href="">
                <TfiLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineGoogle />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-8">
    <div class="blog-item mb-3">
                    {/* <div class="img-holder">
                        <img src={b1} alt="" class="img-fluid" />
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

                    </div> */}
                    <div class="text-holder">
                        <h3>Blog post title will go here</h3>
                        <div class="meta">
                            
                           <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                </div>
                <div className="blog-item">
                <div class="text-holder">
                        <h3>Blog post title will go here</h3>
                        <div class="meta">
                            
                           <span class="thm-clr">|</span> On 22 june,2018
                        </div>
                    </div>
                </div>
    </div>
</div>
        </div>
    </div>
  );
};

export default UserProfile;
