import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function BlogSlider() {
    var settings = {
       dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='pt-5 blogs-section'>
        <Slider {...settings} className=" blog-slider">
            <div className='blog-card'>
              <img src="assets/images/x1.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">HOSTING/DOMAIN SOLUTION</p>
                <p className="mt-4">
                  HOSTING/DOLorem Ipsum is simply dummy text of the printing and
                  typesetting industry.MAIN SOLUTION
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className="blog-card">
              <img src="assets/images/x2.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">Graphic Design</p>
                <p className="mt-4">
                  HOSTING/DOLorem Ipsum is simply dummy text of the printing and
                  typesetting industry.MAIN SOLUTION
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x3.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">App Development</p>
                <p className="mt-4">
                  HOSTING/DOLorem Ipsum is simply dummy text of the printing and
                  typesetting industry.MAIN SOLUTION
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x4.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">Website Development</p>
                <p className="mt-4">
                  HOSTING/DOLorem Ipsum is simply dummy text of the printing and
                  typesetting industry.MAIN SOLUTION
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
            <div className='blog-card'>
              <img src="assets/images/x1.png" alt="" />
              <div className="cont px-4">
                <p className="mt-4 text-dark fw-bold">HOSTING/DOMAIN SOLUTION</p>
                <p className="mt-4">
                  HOSTING/DOLorem Ipsum is simply dummy text of the printing and
                  typesetting industry.MAIN SOLUTION
                </p>
                <Link to="" className="text-gray">Read more <i className="far fa-angle-double-right"></i></Link>
              </div>
            </div>
        </Slider>
    </div>
  )
}

export default BlogSlider