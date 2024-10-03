import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Layout from './Layout'
import PartnerSlider from './PartnerSlider'
import TestimialSleder from './TestimialSleder'
import { Helmet } from 'react-helmet-async';

function Service1() {
  return (
    <div>
    <Helmet>
      <title>PPC Agency | Google Ads Management Services</title>
      <meta name="title" content="PPC Agency | Google Ads Management Services"/>
      <meta name="description" content="Maximize your ROI with Codezion's expert PPC services! Drive targeted traffic, increase conversions, and watch your business grow."/>
      <meta name="keywords" content="PPC Agency, Pay Per Click Service, Google Ads Management Service, PPC Consultant"/>
      <meta property="og:title" content="PPC Agency | Google Ads Management Services"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/PPC"/>
      <meta property="og:description" content="Maximize your ROI with Codezion's expert PPC services! Drive targeted traffic, increase conversions, and watch your business grow."/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="PPC Agency | Google Ads Management Services"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Maximize your ROI with Codezion's expert PPC services! Drive targeted traffic, increase conversions, and watch your business grow."/>
      <meta name="twitter:image" content="https://www.codezion.com/"/>
      <meta name="twitter:image:alt" content="codezionsoftware"/>
    </Helmet>
      <Layout/>
      <section className="carrier_cont main-2 container section-padding pt-0">
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
            <img src="assets/images/Rectangle 9.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-2-cont divs">
            <div className="div-1">
              <p className="orange-text">
                Hire PPC Experts to Leverage the Power of Google Ads Paid
                Campaigns to Drive Business Success
              </p>

              <h3 className="rect-title text-dark fw-bold">Pay Per Click</h3>
            </div>
            <div className="div-2 mt-5">
              <p className="page-2-desc">
                Social Trendzz is a leading PPC management company in India, our
                team of google ads specialists is here to help you unlock new
                opportunities and drive success for your business.
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
                Hire Experts to Leverage the Power of Google Paid Campaigns to
                Drive Business Success
              </h1>
              <p className="main__desc">
                We are a reputed PPC campaign management company India and create
                a winning PPC campaign for your business to help you discover
                unlocked opportunities. Our experts minimize your effort to get
                more traffic on your website to improve its performance. We sketch
                out a unique strategy to boost your ROIs. Our unmatched expertise
                in PPC lets you discover those customers who are ready to purchase
                your products and services. Be it Facebook, Google AdWords, or
                YouTube advertisements, we are ready to run advertisements on
                multiple platforms. We have been serving clients from multiple
                industries across the world.
              </p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 img-mar">
              <img src="assets/images/Mask group.png" alt="" className="rounded-5" />
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
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Campaign Creation
                </h3>
                <p className="service__desc">
                  Our experts will create a winning Google Ads campaign to
                  maximize your business’s online visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/8.png" className="box-icon" alt=""/> Strategy
                  Development
                </h3>
                <p className="service__desc">
                  Our experts will create a winning Google Ads campaign to
                  maximize your business’s online visibility.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
              <div className="content">
                <h3 className="service__title">
                  <img src="assets/images/icons/7.png" className="box-icon" alt=""/> Platform
                  Management
                </h3>
                <p className="service__desc">
                  Our team is equipped to run advertisements on multiple
                  platforms, including Facebook, Google AdWords, and YouTube, to
                  reach your target audience and drive results for your business.
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
            What Our SEO
            <span className="text-dark fw-700">Services Include</span>
          </h1>

          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/10.png" className="box-icon" alt=""/> Display Advertisement
                    </h3>
                    <p className="service__desc">
                      Make your reach among 90% of online users with our display advertisement. Our experts set up and run the most effective campaign that appears on different Google partner websites. We display the finest combination of ads and images to catch the attention of users.
                    </p>

                   <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/11.png" className="box-icon" alt=""/> Search Advertisement
                    </h3>
                    <p className="service__desc">
                      Leverage the power of our social marketing media services to reach your prospects. We as a B2B digital marketing company serve businesses of all sizes and help them make their social media presence more powerful to drive more leads, conversions.
                    </p>

                   <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/12.png" className="box-icon" alt=""/> Video Advertisement
                    </h3>
                    <p className="service__desc">
                      Our specialization also includes running video campaigns to make your online branding successful. Our professionals are versed in the latest practices and implement these successfully to create an outcome-driven campaign.
                    </p>

                   <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/13.png" className="box-icon" alt=""/>  Mobile Advertisement
                    </h3>
                    <p className="service__desc">
                      Are you seeking to target fast-growing mobile users? We at Social Trendzz are here to assist you with our vast capability of mobile advertisement. Our experts create a mobile ad campaign that aids business in reaching mobile users most effectively.
                    </p>

                   <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/14.png" className="box-icon" alt=""/> Social Advertisement
                    </h3>
                    <p className="service__desc">
                      Maximizing your reach among your targeted audience is necessary to grow your business. We are a group of PPC experts who run social advertising. Our experts create social ads to help you make an impeccable presence among your targeted market.
                    </p>

                   <Link to="" className="service__link">
                      Learn more <i className="fa fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 cards_cont">
                  <div className="content">
                    <h3 className="service__title">
                      <img src="assets/images/icons/15.png" className="box-icon" alt=""/> Remarketing Advertisement
                    </h3>
                    <p className="service__desc">
                      Remarketing is one of the effective ways of engaging with your potential customers. We create remarketing campaigns driven by a robust strategy. Our PPC experts India launch your remarketing campaign to target past customers.
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
              <img src="assets/images/image 5.png" alt="" />
            </div>
            <div className="col-lg-6 ppc-clg">
              <h5 className="orange-text">Pay per click</h5>

              <h3>
                PPC
                <span className="text-dark fw-bold">Marketing <br />Channels</span>
              </h3>

              <p className="text-gray">
                We target different channels to target multiple platforms to match
                the diversified needs of our clients.
              </p>

              <div className="ppc-content-box">
                <div className="main-ppc-cont">
                  <img src="assets/images/SVG (4).png" alt="" />

                  <div className="text-box">
                    <h4 className="text-dark fw-bold">Google AdWords</h4>
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
                    <h4 className="text-dark fw-bold">Display Advertisements</h4>
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
                    <h4 className="text-dark fw-bold">YouTube Advertisements</h4>
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
              <img src="assets/images/image 6.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Pay per click</h5>

              <h3 className="mb-4">
                Drive More
                <span className="text-dark fw-bold">Sales, <br />Conversion</span>
                & Revenue
              </h3>

              <p className="text-gray fw-light">
                We target different channels to target multiple platforms to match
                the diversified needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding workflow-cont section-padding">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-lg-9">
              <div className="workflow-hedding">
                <h1 className="text-center title__workflow">
                  Our
                  <span className="text-dark fw-700">Workflow</span>
                </h1>
                <p className="text-center w-75 m-auto mb-5 text-tertiary fw-600">
                  Our workflow is simple and well-defined. We as an online
                  advertising agency follow multiple steps to create and deliver
                  the best solutions based on the needs of clients. Our steps
                  include
                </p>
              </div>
            </div>
          </div>
          <div className="row jiop" style={{backgroundColor: '#d6fcff', borderRadius: '10px' }}>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="work-top-bg-color"></div>
              <div className="workflow-card-detail">
                <div className="workflow-image">
                  <img src="assets/images/Frame 16.png" alt=''/>
                </div>
                <h6>Requirement Gathering</h6>
                <p>
                  We first gather your digital marketing requirements. Gather
                  details about your business, target audience, market, goal, etc.
                </p>
              </div>
              <div className="workflow-number">
                <h2 className="mt-2">01</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="workflow-number">
                <h2 className="mt-2">02</h2>
              </div>
              <div className="workflow-card-detail bo-redus">
                <p>
                  After gathering every necessary detail related to your business
                  and requirements, we create a unique digital marketing strategy
                  for you.
                </p>
                <h6>Create Strategy</h6>
                <div className="workflow-image">
                  <img src="assets/images/Frame 16 (1).png" alt=''/>
                </div>
              </div>
              <div className="work-top-bg-color"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="work-top-bg-color"></div>
              <div className="workflow-card-detail">
                <div className="workflow-image">
                  <img src="assets/images/Frame 16 (2).png" alt=''/>
                </div>
                <h6 className="mt-2">Promote</h6>
                <p>
                  Once we create the digital marketing strategy for your business,
                  we implement it and promote your brand and services on the
                  desired platforms.
                </p>
              </div>
              <div className="workflow-number">
                <h2 className="mt-2">03</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
              <div className="workflow-number">
                <h2 className="mt-2">04</h2>
              </div>
              <div className="workflow-card-detail bo-redus">
                <div className="workflow-image">
                  <img src="assets/images/Frame 16 (3).png" alt=''/>
                </div>
                <h6>Reporting</h6>
                <p>
                  We gather the analytic tool to access each important detail
                  related to your digital marketing campaign and send a detailed
                  report to you.
                </p>
              </div>
              <div className="work-top-bg-color"></div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-padding hero__container product-section mt-5'>
    <div className="container  ">
    <div className='row justify-content-center'>
      <div className="col-lg-10">
      <h1 className="text-center title__milestone">Our
      <span className="text-dark fw-bold"> Product</span></h1>
      <p>Browse a comprehensive list of Google products designed to help you work and play, stay organised, get answers, keep in touch, grow your business and more. We're passionate about creative product design, so before bringing each new item into our assortment we make it a point to ask: "What makes this an uncommon good?"</p>
      </div>
    </div>
    <div className="row pt-4">
      <div className="col-lg-3 col-sm-6">
        <div className="product-box">
          <div className="product-image">
            <img src="assets/images/product/1.png" alt="" />
          </div>
          <div className="product-text">
            <Link to='#'>Godaharidev Jewells</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="product-box">
          <div className="product-image">
            <img src="assets/images/product/2.png" alt="" />
          </div>
          <div className="product-text">
            <Link to=''>Tyresolio</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="product-box">
          <div className="product-image">
            <img src="assets/images/product/3.png" alt="" />
          </div>
          <div className="product-text">
            <Link to='#'>Jewllio</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="product-box">
          <div className="product-image">
            <img src="assets/images/product/4.png" alt="" />
          </div>
          <div className="product-text">
            <Link to='#'>Radhika Garments</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  {/* ---testimonial--- */}
  <section className='section-padding services  mt-0 testimonial-section p-0'>
    <div className="container">
    <h1 className="text-center title__milestone">Our
    <span className="text-dark fw-bold"> Testimonials</span></h1>
    <TestimialSleder/>
    </div>
  </section>
  {/* testimonial end */}
  <section className="trusted--sectiona section-padding p-0">    
    <PartnerSlider/>
  </section>
    <Footer/>
    </div>
  )
}

export default Service1