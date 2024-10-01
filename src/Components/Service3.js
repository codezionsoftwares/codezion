import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Footer from './Footer'
import BlogSlider from './BlogSlider'
import { Helmet } from 'react-helmet-async';


function Service3() {
  return (
    <div>
    <Helmet>
      <title>Digital Marketing Company | Best SEO Service Company | Ecommerce SEO Agency</title>
      <meta name="title" content="Digital Marketing Company | Best SEO Service Company | Ecommerce SEO Agency"/>
      <meta name="description" content="Unlock sales and brand awareness with our top-notch SEO services. Contact Codezion for a free consultation and outpace your competitors today!"/>
      <meta name="keywords" content="SEO Service, digital marketing company, SEO Services India, Digital Marketing Services "/>
      <meta property="og:title" content="Digital Marketing Company | Best SEO Service Company | Ecommerce SEO Agency"/>
      <meta property="og:site_name" content="codezion"/>
      <meta property="og:url" content="https://www.codezion.com/seo"/>
      <meta property="og:description" content="Unlock sales and brand awareness with our top-notch SEO services. Contact Codezion for a free consultation and outpace your competitors today!"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content="https://www.codezion.com/assets/images/logo 1.png"/>
      <meta name="twitter:card" content="summary"/>
      <meta name="twitter:title" content="Digital Marketing Company | Best SEO Service Company | Ecommerce SEO Agency"/>
      <meta name="twitter:site" content="@codezion"/>
      <meta name="twitter:description" content="Unlock sales and brand awareness with our top-notch SEO services. Contact Codezion for a free consultation and outpace your competitors today!"/>
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

        <div className="row hero-2  px-5 align-items-center">
          <div className="mt-5 col-lg-6 col-md-6 col-sm-12  divs">
            <img src="assets/images/seo-1.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 hero-2-cont divs">
            <div className="div-1">
              <p className="orange-text">
                Promote Your Brand Across Multiple Social Media Channels
              </p>

              <h3 className="rect-title text-dark fw-bold">Digital Marketing Services</h3>
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
              <img src="assets/images/seo-2.png" alt="" className="rounded-5" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="campain container-fluid section-padding p-0">
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
      </section> */}

      <section className="services services-second container-fluid section-padding">
        <div className="container main__service px-5">
          <h5 className="text-center orange-text">Our Process</h5>
          <h1 className="text-center title__workflow mb-5">
            What Our SEO
            <span className="text-dark fw-700"> Services Include</span>
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

      {/* <section className="pricing-section ps-2 container-fluid section-padding pt-0">
        <div className="container">
          <h4 className="orange-text text-center mb-3">Services Plan</h4>

          <h1 className="h1-gray text-center mb-5">
            Explore Social Media
            <span className="text-dark fw-bold">Advertising Service Plans</span>
          </h1>

          <div className="row justify-content-center">
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
                    <img src="assets/images/fe_check.png" alt="" />
                    Standard consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    20% of ad spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    Up to 2 networks included
                  </li>
                </ul>
              </div>
            </div>
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
                    <img src="assets/images/fe_check.png" alt="" />
                    Standard consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/iges/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    20% of ad spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    Up to 2 networks included
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
                    <img src="assets/images/fe_check.png" alt="" />
                    Standard consultation & reporting plan
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />Up to 2
                    networks included
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    20% of ad spend / month Up to 8 advertising campaigns Up to 2
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    consultations per month 50K initial investment
                  </li>
                  <li className="list-group-item border-0">
                    <img src="assets/images/fe_check.png" alt="" />
                    Up to 2 networks included
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="seperate mt-5">
            <h1 className="h1-gray text-center mt-5 text-sm-center">
              SEO Solutions That Boost
              <span className="text-dark fw-bold"> Traffic and Enhance Revenued</span>
            </h1>

            <div className="para-list col-lg-10 mt-3 m-auto">
              <p>
                If you’re seeking significant business growth, SEO, or search
                engine optimization, is the strategy for you.
              </p>
              <p>
                What is SEO? SEO is a digital marketing approach that helps your
                website appear in relevant search results on search engines like
                Google, driving more qualified traffic to your site. It involves
                various techniques, from incorporating keywords on your pages to
                earning links to your website.
              </p>
              <p>
                A tailor-made SEO campaign from Social Trendzz offers a
                comprehensive solution to SEO (on-page SEO, off-page SEO, and
                technical SEO), enabling your most valuable audience to find you
                online without you dedicating hours of effort.
              </p>
              <p>
                Your SEO service plan can also take advantage of Social Trendzz’s
                revenue acceleration platform, which utilizes billions of data
                points, combined with our extensive experience, to provide
                actionable insights that boost revenue.
              </p>
              <p>
                With more than $3 billion generated in revenue for our clients
                over the past five years, Social Trendzz and our award-winning
                team of SEO specialists are a proven formula for website SEO
                solutions.
              </p>
              <p>
                Are you prepared to start generating revenue from organic search?
              </p>
              <p>
                Contact us online to chat with a knowledgeable strategist from our
                SEO team about not only enhancing your company’s search engine
                rankings but also increasing your revenue from them.”
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="comtainer-fluid seo-mode section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/seo-3.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">Social media Marketing</h5>

              <h3 className="h1-gray">
                Contact us Today Visibility! <br />
                <span className="text-dark fw-bold">to Start Boosting your Online
                </span>
              </h3>

              <button className="btn-thm-main mt-4">Request a Quote</button>
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
                <p> We first gather your digital marketing requirements. Gather details about your business, target audience,
                  market, goal, etc. </p>
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

      <section className="comtainer-fluid seo-mode-2 section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/seo-4.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h5 className="orange-text mb-4">SEO(Search Engine Optimization)</h5>

              <h3 className="h1-gray text-dark fw-bolder">Reporting</h3>

              <p className="mt-4">
                Our Experts Access the Analytic Tool to get Details on How the SEO
                Campaign is going on. We include every Detail in our Report and
                Send it to you.
              </p>
              <button className="btn-thm-main mt-4">Get Free SEO Audit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid blogfour section-padding pt-5">
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
      <Footer/>
    </div>
  )
}

export default Service3