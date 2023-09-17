import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">

        <div className="sectionHeader">
            <div>
                <div className="container">
                    {/* <!-- Services section title --> */}
                    <h1>Testimonials</h1>
                    
                    {/* <!-- Section text --> */}
                    <p>
                        Why our clients love to work with us !
                    </p>
                </div>
            </div>
        </div>
        
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
                    &quot;Working with Internet Solution Studio (ISS) has been a game-changer for our company. They transformed our outdated website into a sleek, user-friendly masterpiece. Their team&apos;s expertise and attention to detail truly exceeded our expectations. We&apos;re now seeing increased traffic and user engagement. Internet Solution Studio (ISS) is the real deal!&quot;

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
                    &quot;Internet Solution Studio (ISS) took our e-commerce platform to the next level. Their creative solutions and commitment to our project were remarkable. They not only improved our website&apos;s performance but also enhanced the overall user experience. Our sales have skyrocketed since the launch. Thank you, Internet Solution Studio (ISS)!&quot;
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
                        &quot;I couldn&apos;t be happier with the website Internet Solution Studio (ISS) created for my blog. They perfectly captured the essence of my brand and made it come to life online. The design is stunning, and the site loads lightning-fast. Their team&apos;s professionalism and prompt communication made the entire process a breeze. I highly recommend Internet Solution Studio (ISS)!&quot;
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
                    &quot;Internet Solution Studio (ISS) played a pivotal role in enhancing our online presence. They seamlessly integrated complex financial tools into our website, making it an invaluable resource for our clients. Their technical proficiency and commitment to delivering on time and within budget were impressive. Internet Solution Studio (ISS) is our go-to partner for web solutions.&quot;
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Testimonials