import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async';

function Careers() {
  return (
    <div>
    <Helmet>
      <title>Careers | Join Codezion Softwares</title>
      <meta name="title" content="Careers | Join Codezion Softwares"/>
      <meta name="description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="keywords" content="career, career option in it, it jobs, jobs in it company"/>
      <meta property="og:title" content="Careers | Join Codezion Softwares"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/careers"/>
      <meta property="og:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Careers | Join Codezion Softwares"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Kickstart or advance your career with Codezion Softwares! Explore exciting opportunities to work on innovative projects, grow professionally, and thrive in a supportive environment. Join us and shape the future of technology!"/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
    </Helmet>
    {/* ---meta tag end--------- */}
    <Layout/>
      <section className="section-padding subheader-section">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                <div className="subheader">
                  <h1>Careers</h1>
                  <span><Link to="/">Home <i className="fa fa-chevron-right"></i></Link> Careers</span>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='section-padding'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="gallery-images">
                <img src="assets/images/gallery/1.png" alt="" />
              </div>
              <div className="row">
                <div className="col-lg-5">
                  <div className="gallery-images">
                    <img src="assets/images/gallery/2.png" alt=""/>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="gallery-images">
                    <img src="assets/images/gallery/3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
              <div className="col-lg-6">
                <div className="gallery-images">
                    <img src="assets/images/gallery/4.png" alt="" />
                  </div>
                  <div className="gallery-images">
                    <img src="assets/images/gallery/5.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                    <div className="gallery-images">
                      <img src="assets/images/gallery/6.png" alt="" />
                    </div>
              </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5">
              <div className="career-title">
                <h6>OUR CULTURE</h6>
                <h4>United by a shared passion for <br /> technology and a drive to <br /> make an impact</h4>
                <Link to="/contact" className='btn thm-btn text-white rounded-2 px-3 mt-3'>GET IN TOUCH <i className='fa fa-arrow-right'></i></Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="culture border-left">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam maxime ratione aspernatur excepturi, maiores magni. Vitae accusamus odit culpa sapiente voluptates, deserunt, possimus incidunt animi expedita ea minus dolor nulla?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam maxime ratione aspernatur excepturi, maiores magni. Vitae accusamus odit culpa sapiente voluptates, deserunt, possimus incidunt animi expedita ea minus dolor nulla?</p>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i className="fa fa-hand-holding-heart"></i>
                <h5>Collaboration</h5>
                <p>We blend a kaleidoscope of talents, sparking a stmphony of creativity that guides us toword breakthroughs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i className="fa fa-hand-holding-heart"></i>
                <h5>Innovation</h5>
                <p>We blend a kaleidoscope of talents, sparking a stmphony of creativity that guides us toword breakthroughs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="culture-box">
              <i className="fa fa-hand-holding-heart"></i>
                <h5>Empowerment</h5>
                <p>We blend a kaleidoscope of talents, sparking a stmphony of creativity that guides us toword breakthroughs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding p-0'>
        <div className="row">
          <div className="col-lg-3 col-md-6 p-0 d-flex align-items-center ">
              <div className="p-5 recruitment-box">
                <div>
                <h3>Recruitment Process</h3>
                <p>We do the hiring process very smoothly. which is completely dependent on the caliber of the condidtae.</p>
                </div>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/cv.png" alt="" />
              <div className="recuir-title">
                <h2>01</h2>
                <h6>CV Screening</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/interview.png" alt="" />
              <div className="recuir-title">
                <h2>02</h2>
                <h6>Technical Interview</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="recruitment-image">
              <img src="assets/images/gallery/hr.png" alt="" />
              <div className="recuir-title">
                <h2>03</h2>
                <h6>HR Round</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding pb-0'>
        <div className="container">
        <div className="join-title text-center">
            <h3 className='py-4'>Why Join HawksCode?</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join1.png" alt="" />
                <div className="howkacode-text">
                  <h5>Cutting-Edge-Projects</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join2.png" alt="" />
                <div className="howkacode-text">
                  <h5>Career Growth</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join3.png" alt="" />
                <div className="howkacode-text">
                  <h5>Competitive Compensation</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join4.png" alt="" />
                <div className="howkacode-text">
                  <h5>Comprehensive Benefits</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join5.png" alt="" />
                <div className="howkacode-text">
                  <h5>Global Exposure</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join6.png" alt="" />
                <div className="howkacode-text">
                  <h5>Learning Opportunities</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="join-card">
              <img src="assets/images/icons/join7.png" alt="" />
                <div className="howkacode-text">
                  <h5>Startup Culture with Stability</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dicta id hic doloremque! Facere in explicabo </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-padding'>
        <div className="container">
        <div className="section-headding text-center mb-5">
          <h2>What's your Forte?</h2>
        </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box">
              <img src="assets/images/icons/briefcase.png" alt="" />
                <h6>Business Analyst</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              <img src="assets/images/icons/digital-marketing.png" alt="" />
                <h6>Digital Marketing</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              <img src="assets/images/icons/python.png" alt="" />
                <h6>Python Developer</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="fort-box border-left">
              {/* <i className="fab fa-laravel"></i> */}
              <img src="assets/images/icons/web-development.png" alt="" />
                <h6>Larawel Developer</h6>
                <p>Role & Responsibility</p>
                <Link to="/careerdetails" className='btn-thm-main sm-btn'>Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Careers