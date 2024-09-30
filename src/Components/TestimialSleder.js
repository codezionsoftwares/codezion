import React from 'react'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

function TestimialSleder() {
    var settings = {
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 1300,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
        dots: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
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
    <div className='row pt-3'>
    <Slider {...settings} className="row testimial-slider">
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Rahul</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            Codezion exceeded our expectations! Their team delivered a custom software solution that was not only innovative but also perfectly aligned with our business needs. The entire process was seamless, from initial consultation to final delivery. Highly recommend them for any software development needs!
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/1.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Avinash</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            Working with Codezion has been a game-changer for our company. Their expertise and dedication to quality helped us streamline our operations with a user-friendly, robust software platform. Their team is professional, communicative, and always ready to assist with any questions or updates we need.
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/2.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Ghanshyam</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            We approached Codezion for a complex mobile app, and they did not disappoint. They took the time to understand our vision and translated it into a functional and beautiful app. The level of care and attention to detail was impressive. We couldn’t be happier with the results!
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/4.png" alt="testi" />
          </div>
        </div>
      </div>
      <div className="testi-main">
        <div className="testi-box">
          <div className="testi-card">
            <h4>Ritesh</h4>
            <p>
            <i className="fa fa-quote-left"></i>
            Codezion Software has truly set the bar high when it comes to customer service and technical expertise. Their team was incredibly responsive and delivered a solution that met our tight deadlines without compromising on quality. We look forward to working with them again in the future.
            </p>
          </div>
          <div className="twsti-info text-end">
            <img src="assets/images/product/3.png" alt="testi" />
          </div>
        </div>
      </div>
    </Slider>
    </div>
  )
}

export default TestimialSleder