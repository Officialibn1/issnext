import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <section className="aboutUs">

        <div className="sectionHeader">
            <div>
                <div className="pageHeadingContainer">
                    {/* <!-- Services section title --> */}
                    <h2>About Us</h2> 
                </div>
            </div>
        </div>

        {/* <!-- About Us content --> */}
        <div className="aboutContent">
            {/* <!-- Heading --> */}
            <div className="aboutContentHeading">
                <div className="container">
                    <h1>
                        About Internet Service Studio (ISS)
                    </h1>
                </div>
            </div>

            {/* <!-- Content --> */}
            <div className="aboutContentText">
                <div className="container">
                    <p>
                        Internet Service Studio is a well-established platform and an ideal business partner for all your online requirements. An Internet service studio is a company specializing in providing a wide array of digital services, such as <b>website development, web design, digital marketing, search engine optimization, creative writing, corporate identity, company profile creation, social media management, graphic design, domain and hosting solutions</b>, and other digital necessities for our clients. Our primary objective is to assist businesses in transitioning to the digital landscape and enhancing their online presence. The company typically offers comprehensive solutions, including strategy formulation, project management, and technical support. Our focus is on delivering top-notch services that foster growth and success for clients in the digital age.
                    </p>

                    <div className="pageNavigationLink">
                        <Link href="/#contactUs">Contact Us</Link>
                    </div>
                </div>
            </div>

            {/* <!-- Tools we use --> */}
            <div className="aboutContentHeading">
                <div className="container">
                    <h1>
                        Tools We Use
                    </h1>
                </div>
            </div>
            
            <div className="toolsIcons">
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/adobexd.jpeg" alt="adobexd" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/expressnodejs.jpeg" alt="expressnodejs" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/github.jpeg" alt="github" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/react.jpeg" alt="react" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/reactnative.jpeg" alt="reactnative" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/sketch.jpeg" alt="sketch" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/next 2.jpeg" alt="nextjs" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/styledcomponents.jpeg" alt="styledcomponents" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/figma.jpeg" alt="figma" />
                </div>
                {/* <!-- Item --> */}
                <div className="toolsIconsItem">
                    <Image height={80} width={125} src="/materialui.jpeg" alt="materialui" />
                </div>
            </div>
            </div>

            <div className="aboutContent">

                <div className="aboutContentHeading">
                    <div className="container">
                        <h1>
                            Our Clients Reviews 
                        </h1>
                    </div>
                </div>
            </div>
        </section>




        <section className="testimonials" id="testimonials">



            
            {/* <!-- Testimonial Content --> */}
            <div className="testimonialCarousel">
                {/* <!-- Item One --> */}
                <div className="testimonialCarouselItem">
                    <div className="cardBorder"></div>
                    <i className="bi bi-chat-quote"></i>
                    <div className="carouselItemHeader">
                        <h1>Sarah Thompson</h1>

                        <h3>Marketing Manager, TechSolutions Inc.</h3>
                    </div>

                    <div className="carouselItemDesc">
                        <p>
                            Working with Internet Solution Studio (ISS) has been a game-changer for our company. They transformed our outdated website into a sleek, user-friendly masterpiece. Their team&apos;s expertise and attention to detail truly exceeded our expectations. We&apos;re now seeing increased traffic and user engagement. Internet Solution Studio (ISS) is the real deal!

                        </p>
                    </div>
                </div>

                {/* <!-- Item Two --> */}
                <div className="testimonialCarouselItem">
                    <div className="cardBorder"></div>
                    <i className="bi bi-chat-quote"></i>
                    <div className="carouselItemHeader">
                        <h1>John Smith</h1>

                        <h3>CEO, E-Commerce Emporium</h3>
                    </div>

                    <div className="carouselItemDesc">
                        <p>
                            Internet Solution Studio (ISS) took our e-commerce platform to the next level. Their creative solutions and commitment to our project were remarkable. They not only improved our website&apos;s performance but also enhanced the overall user experience. Our sales have skyrocketed since the launch. Thank you, Internet Solution Studio (ISS)!
                        </p>
                    </div>
                </div>

                {/* <!-- Item Three --> */}
                <div className="testimonialCarouselItem">
                    <div className="cardBorder"></div>
                    <i className="bi bi-chat-quote"></i>
                    <div className="carouselItemHeader">
                        <h1>Emily Davis</h1>

                        <h3>Founder, Nature Explorers Blog</h3>
                    </div>

                    <div className="carouselItemDesc">
                        <p>
                            I couldn&apos;t be happier with the website Internet Solution Studio (ISS) created for my blog. They perfectly captured the essence of my brand and made it come to life online. The design is stunning, and the site loads lightning-fast. Their team&apos;s professionalism and prompt communication made the entire process a breeze. I highly recommend Internet Solution Studio (ISS)!
                        </p>
                    </div>
                </div>

                {/* <!-- Item Four --> */}
                <div className="testimonialCarouselItem">
                    <div className="cardBorder"></div>
                    <i className="bi bi-chat-quote"></i>
                    <div className="carouselItemHeader">
                        <h1>Robert Johnson</h1>

                        <h3>CFO, Financial Futures LLC</h3>
                    </div>

                    <div className="carouselItemDesc">
                        <p>
                            Internet Solution Studio (ISS) played a pivotal role in enhancing our online presence. They seamlessly integrated complex financial tools into our website, making it an invaluable resource for our clients. Their technical proficiency and commitment to delivering on time and within budget were impressive. Internet Solution Studio (ISS) is our go-to partner for web solutions.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default AboutPage