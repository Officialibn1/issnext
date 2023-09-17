import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <section className="ourServices" id="ourServices">
        <div className="sectionHeader">
            <div>
                <div className="container">
                    {/* <!-- Services section title --> */}
                    <h1>Our Services</h1>
                    
                    {/* <!-- Section text --> */}
                    <p>
                        We offer a wide range of services, encompassing various fields of the tech industry. Our expertise spans everything from Website Development to Digital Marketing, from Graphic Designing to Content Writing. We also specialize in cutting-edge technologies, offering services such as AI Chatbot Design and Mobile App Design. Our proficiency extends to Database & CMS Design, ensuring that our clients have a comprehensive suite of solutions at their fingertips to meet their unique digital needs.
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="servicesListContainer">
                {/* <!-- Card One --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>

                    <div className="cardImg">
                        <Image src="/webdesign.png" alt="webdesign" width={60} height={60} />
                    </div>

                    <h1>Website Development</h1>

                    <p>
                        Web development is our expertise, where we transform your ideas into stunning, functional websites, using a wide array of technologies, including HTML, CSS, JavaScript, PHP, and leverages popular Content Management Systems (CMS) like WordPress and Shopify as well as frameworks such as React, Nextjs, Angular, Vue, and Laravel. Our goal is to craft user-friendly, SEO-optimized websites for an engaging online presence.
                    </p>
                </div>
                {/* <!-- card Two --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>
                    
                    {/* <!-- Card Icon --> */}
                    <div className="cardImg">
                        <Image src="/marketting.png" alt="marketting" width={60} height={60} />
                    </div>

                    <h1>Digital marketing</h1>

                    <p>
                        Our digital marketing strategies cover a wide spectrum, boosting your online presence. This includes SEO, PPC campaigns, engaging social media strategies, impactful email marketing, and high-quality content creation. Our success lies in understanding your audience, achieved through in-depth analysis for tailored, engaging online campaigns.
                    </p>
                </div>
                {/* <!-- Card Three --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>
                    
                    <div className="cardImg">
                        <Image src="/graphicdesign.png" alt="graphic design" width={60} height={60} />
                    </div>

                    <h1>Graphic Desigining</h1>

                    <p>
                        Our graphic design services are tailored to elevate your brand&apos;s visibility. We specialize in crafting visually captivating assets such as logos, branding materials, ads, packaging, print materials, UI designs, and dynamic motion graphics. Using industry-standard tools like Adobe Illustrator, Photoshop, and InDesign, we create designs that leave a lasting impression.
                    </p>
                </div>
                {/* <!-- Card Four --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>

                    <div className="cardImg">
                        <Image src="/contentwriting.png" alt="content writing" width={60} height={60} />
                    </div>

                    <h1>Content Writing</h1>

                    <p>
                        Content is king in the digital world, and our content writing services ensure your message is delivered effectively. Our experienced writers create compelling website content, engaging blog posts, social media content, informative articles, persuasive copywriting, and technical writing that speaks directly to your audience and aligns with your brand&apos;s voice.
                    </p>
                </div>
                {/* <!-- Card Five --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>

                    <div className="cardImg">
                        <Image src="/chatbot.png" alt="chatbot AI design virtual_assistant" width={60} height={60} />
                    </div>

                    <h1>AI Chatbot Design</h1>

                    <p>
                        Leveraging the power of artificial intelligence, we specialize in crafting AI chatbots that enhance customer engagement and streamline interactions. Our AI chatbots are designed to provide instant responses, gather user data, and improve user experiences across various platforms, making customer interactions efficient and productive.
                    </p>
                </div>
                {/* <!-- Card Six --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>

                    <div className="cardImg">
                        <Image src="/mobiledesign.png" alt="mobile design" width={60} height={60} />
                    </div>

                    <h1>Mobile App Design</h1>

                    <p>
                        Our mobile app design services focus on creating intuitive, visually appealing, and user-friendly mobile applications. We pay meticulous attention to both the aesthetics and functionality of your app, ensuring it not only looks great but also provides an exceptional user experience.
                    </p>
                </div>
                {/* <!-- Card Seven --> */}
                <div className="servicesListItem">
                    <div className="cardBorder"></div>

                    <div className="cardImg">
                        <Image src="/database design.png" alt="database design" width={60} height={60} />
                    </div>

                    <h1>Database & CMS Design</h1>

                    <p>
                        We specialize in designing robust databases and Content Management Systems (CMS) tailored to your specific needs. Our solutions are designed for efficient data management, content publishing, and seamless user experiences, making it easy for you to maintain and scale your digital presence.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices