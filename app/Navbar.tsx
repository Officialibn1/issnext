import Image from 'next/image'
import React from 'react'


const NavBar = () => {
  return (
    // <!-- Nav bar -->
        <nav>
            {/* <!-- Logo Container --> */}
            <a href="#">
                <div className="logo">
                    {/* <!-- Logo Image --> */}
                    <div className="logoImg">
                        <Image src="/isslogobig.png" alt="isslogobig" width={60} height={60}/>
                    </div>
                    
                    {/* <!-- Logo Text --> */}
                    <span>
                        ISS
                    </span>
                </div>
            </a>

            <div className="navLinks">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#ourServices">Our Services</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#contactUs">Contact Us</a></li>
                    <li><a href="/about.html">About Us</a></li>
                </ul>
            </div>

            <div className="navOpen" id="navOpen">
                <i className="bi bi-list"></i>
            </div>

            {/* <!-- Mobile Navlinks --> */}
            <div className="mobileNavLinksContainer" id="mobileNavLinksContainer">
                <div className="mobileNavLinks">
                    <div className="navCloseBtn" >
                        <i className="bi bi-x-lg" id="navCloseBtn"></i>
                    </div>
                    <ul>
                        <li><a id="mobileLink" href="#">Home</a></li>
                        <li><a id="mobileLink" href="#ourServices">Our Services</a></li>
                        <li><a id="mobileLink" href="#testimonials">Testimonials</a></li>
                        <li><a id="mobileLink" href="#">Projects</a></li>
                        <li><a id="mobileLink" href="#contactUs">Contact Us</a></li>
                        <li><a id="mobileLink" href="/about.html">About Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavBar