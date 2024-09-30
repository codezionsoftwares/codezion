import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import BlogSlider from './BlogSlider'
import { Helmet } from 'react-helmet-async';

function Service2() {
  return (
    <div>
    <Helmet>
      <title>Social Media Marketing Agency | SMM Company</title>
      <meta name="title" content="Social Media Marketing Agency | SMM Company"/>
      <meta name="description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta name="keywords" content="SMM Agency, Social Media Marketing Agency, Social Media Marketing Company"/>
      <meta property="og:title" content="Social Media Marketing Agency | SMM Company"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/SMM"/>
      <meta property="og:description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Social Media Marketing Agency | SMM Company"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Enhance your brand’s online presence with Codezion's Social Media Marketing! Engage your audience, boost visibility, and drive results. Get started today!"/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
    </Helmet>
      <Layout/>
      <section className="carrier_cont container section-padding pt-0">
        <div className="row tag_row">
          <div className="col-lg-12 tags_main">
            <span className="tag__name">I'm Looking For : </span>
            <span className="tags">Graphic Designer <i className="far fa-angle-double-right"></i></span>

            <span className="tags">Full stack developer <i className="far fa-angle-double-right"></i></span>
            <span className="tags">React Developer <i className="far fa-angle-double-right"></i></span>
            <span className="tags">All <i className="far fa-angle-double-right"></i></span>
          </div>
        </div>

        <div className="row hero-2 px-5 align-items-center">
          <div className="mt-5 col-lg-6 col-md-6 col-sm-12 divs">
            <img src="assets/images/10.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-2-cont divs">
            <div className="div-1">
              <p className="orange-text">
              Improve your Online Presence with Our Digital Marketing Expertise
              </p>

              <h3 className="rect-title text-dark fw-bold">Social Media Marketing</h3>
            </div>
            <div className="div-2 mt-5">
              <p className="page-2-desc">
                Social Trendzz is a leading social media marketing agency that
                focuses on driving impactful business growth through social media
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid pccAdd section-padding">
        <div className="container px-lg-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="subtitle">PPC ads campaign</h3>
              <h1 className="main__title text-dark">
                Trusted Social Media Marketing Services to Take your Business to
                the Next Level
              </h1>
              <p className="main__desc">
                Leading social media platforms such as Facebook, Instagram,
                Twitter, and LinkedIn have vast potential to help businesses find
                potential customers and drive sales, and profit. Getting
                professional assistance is the right way to leverage the fullest
                potential of these social platforms to drive the growth of your
                business. Social Trendzz helps you target those platforms that
                accommodate most of your target customers with powerful
                strategies. We provide world-class social media management
                services driven by a solid strategy, to businesses of all sizes be
                they small, enterprise, or established brands. We create and run
                your social media campaign with a defined goal and among your
                target customers to increase leads, conversion, and sales.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-mar">
              <img src="assets/images/11.png" alt="" className="rounded-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="campain container-fluid section-padding p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Strategy Development
                </h3>
                <p className="service__desc">
                  Defining the goals, target audience, and approach for a social media marketing campaign.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/8.png" className="box-icon" alt=""/> Content Creation and Management
                </h3>
                <p className="service__desc">
                  Developing and scheduling engaging, relevant content to be posted on social media channels.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Analytics and Optimization
                </h3>
                <p className="service__desc">
                  Measuring the success of a social media marketing campaign and making data-driven adjustments to improve performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services services-second container-fluid section-padding">
        <div className="container main__service px-5">
          <h5 className="text-center orange-text">Our Process</h5>
          <h1 className="text-center title__workflow mb-5">
            What Our Social Media
            <span className="text-dark fw-700">Marketing Services Include</span>
          </h1>

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/16.png" className="box-icon" alt=""/> Facebook Advertising Services
                    </h3>
                    <p className="service__desc">
                      We at Social Trendzz, a social media marketing company, assist businesses to boost brand awareness by running a Facebook campaign aligned with your business goal. Our experts help you drive more customers to your business.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/17.png" className="box-icon" alt=""/> LinkedIn Marketing Services
                    </h3>
                    <p className="service__desc">
                      Our experts set up a LinkedIn campaign and run it successfully while ensuring its reach among the targeted audience. We help you connect with your potential customers to grab opportunities to increase leads, conversion, and sales.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/18.png" className="box-icon" alt=""/> Instagram Marketing Services
                    </h3>
                    <p className="service__desc">
                      With us, you can harness the power of Instagram to attract more followers for your business. Our social media experts create the targeted campaign to boost your brand engagement and also improve the visibility of your Instagram account.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/19.png" className="box-icon" alt=""/> YouTube Marketing Services
                    </h3>
                    <p className="service__desc">
                      Video advertising is on the rise of late and many businesses already benefit from this. At Social Trendzz, our social media marketing services help you target YouTube to grow your business. We create and advertise videos on YouTube.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/20.png" className="box-icon" alt=""/> Pinterest Marketing ServicesAdvertisement
                    </h3>
                    <p className="service__desc">
                      Pinterest has a vast potential to help the business grow by achieving its goal. We render Pinterest marketing services to help your business increase vast traffic to your website and increase sales by drawing the attention of more people with different interests.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/21.png" className="box-icon" alt=""/> Twitter Marketing Services
                    </h3>
                    <p className="service__desc">
                      Twitter is one of the best platforms to find potential customers and grow business. No matter what type of business you run, we help you boost your business through our best-in-class Twitter marketing services.
                    </p>

                    <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comtainer-fluid ppc-marketing section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ppc-image">
              <img src="assets/images/12.png" alt="" />
            </div>
            <div className="col-lg-6 ppc-clg">
              <h5 className="orange-text">Pay per click</h5>

              <h3>
                Why Social 
                <span className="text-dark fw-bold">Media<br />for Business</span>
              </h3>

              <p className="text-gray">
                We target different channels to target multiple platforms to match
                the diversified needs of our clients.
              </p>

              <div className="ppc-content-box">
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (4).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">4.74 Billion</h4>
                    <p className="text-gray">
                      Google is one of the platforms that let you target different
                      categories of audiences. We run the most effective campaign
                      for Google AdWords India to help you find potential
                      customers for your products.
                    </p>
                  </div>
                </div>
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (5).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">2 Hours and 28 Minutes</h4>
                    <p className="text-gray">
                      We create an impeccable strategy to run your Display
                      advertisement. We run a Google Display advertising campaign
                      to help your brand grow and generate more sales.
                    </p>
                  </div>
                </div>
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (6).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">$268+ Billion</h4>
                    <p className="text-gray">
                      Whether you want to promote your business or products and
                      services, YouTube is the right platform. A one of the
                      top-rated PPC consultants India, we set up effective
                      campaigns to help you get maximum advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="comtainer-fluid drive-mode section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/13.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Social media Marketing</h5>

              <h3 className="h1-gray">
                Contact Us To Share <br />Your
                <span className="text-dark fw-bold">Social Media Marketing Requirements</span>
              </h3>

              <p className="text-gray fw-light">
                We target different channels to target multiple platforms to match
                the diversified needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pricing-section container-fluid section-padding">
        <div className="container">
          <h4 className="orange-text text-center mb-3">Services Plan</h4>
          <h1 className="h1-gray text-center mb-5">
            Explore Social Media
            <span className="text-dark fw-bold">Advertising Service Plans</span>
          </h1>
          <button className="btn-thm-main abs-btn">
            Elevate your social media advertising with <br />
            plans designed to fit your needs.
          </button>
          <div className="row justify-content-center">
            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <div className="card" style={{width: '18rem' }}>
                <div className="card-body border-bottom">
                  <h5 className="card-title fw-bold">Lite Plan</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Standard
                    consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> 20% of ad
                    spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Up to 2
                    networks included
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card" style={{width: '18rem' }}>
                <div className="card-body border-bottom">
                  <h5 className="card-title fw-bold">Buisiness Plan</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Standard
                    consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> 20% of ad
                    spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" /> Up to 2
                    networks included
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section> */}

      <section className="container-fluid  section-padding pt-5">
        <div className="container">
          <h1 className="h1-gray text-center">
            Our <span className="text-dark fw-bold">Blogs</span>
          </h1>
          <p className="text-center blog-para">
            Our workflow is simple and well-defined. We as an online advertising
            agency follow multiple steps to create <br /> and deliver the best solutions
            based on the needs of clients. Our steps include
          </p>
          <BlogSlider/>
        </div>
      </section>
      <section className="comtainer-fluid detailed-reporting section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/image 7.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Social Media Marketing</h5>

              <h3 className="h1-gray">
                Detailed
                <span className="text-dark fw-bold"> Reporting</span>
              </h3>

              <p className="text-gray fw-light">
                We send you a detailed report of even every small performance of a
                campaign and help you know how beneficial the campaign is for your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="comtainer-fluid ppc-marketing section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ppc-image">
              <img src="assets/images/12.png" alt="" />
            </div>
            <div className="col-lg-6 ppc-clg">
              <h5 className="orange-text mb-4">FAQs</h5>

              <h3 className="h1-gray">
                Know about
                <span className="text-dark fw-bold">The basics Of Digital Marketing.</span>
              </h3>

              <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                      aria-controls="collapseOne">
                      <i className="fa fa-dot-circle"></i> What is social media
                      advertising?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Social media advertising is a method of promoting products
                      or services through various social media platforms, using
                      paid ads and targeting specific audiences to generate leads,
                      sales, and brand awareness.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                      aria-controls="collapseTwo">
                      <i className="fa fa-dot-circle"></i>How does targeting work in
                      social media advertising?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Social media advertising is a method of promoting products
                      or services through various social media platforms, using
                      paid ads and targeting specific audiences to generate leads,
                      sales, and brand awareness.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                      aria-controls="collapseThree">
                      <i className="fa fa-dot-circle"></i> What are the benefits of
                      social media advertising?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse border-0" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Social media advertising is a method of promoting products
                      or services through various social media platforms, using
                      paid ads and targeting specific audiences to generate leads,
                      sales, and brand awareness.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed fw-bold border-0 outline-none shadow-none" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                      aria-controls="collapseFour">
                      <i className="fa fa-dot-circle"></i> How much does social media
                      advertising cost?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Social media advertising is a method of promoting products
                      or services through various social media platforms, using
                      paid ads and targeting specific audiences to generate leads,
                      sales, and brand awareness.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Service2