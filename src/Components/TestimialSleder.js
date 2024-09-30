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
            This glowing feedback showcases our commitment to timely delivery and quality results. We appreciate Rahul's trust and look forward to continuing our partnership!
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
            Avinash’s feedback highlights our commitment to prompt service and high-quality results. We’re grateful for his trust and look forward to future collaborations!
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
            Ghanshyam’s enthusiastic feedback reflects our dedication to prompt and effective service. We truly appreciate his confidence in us and look forward to supporting him again!
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
            Ritesh’s feedback emphasizes our commitment to swift and effective service. We are grateful for his trust and look forward to continuing our partnership in the future!
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