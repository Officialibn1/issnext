import Image from 'next/image'
import Link from 'next/link'
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
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#ourServices">Our Services</Link></li>
                    <li><Link href="#testimonials">Testimonials</Link></li>
                    <li><Link href="#">Projects</Link></li>
                    <li><Link href="#contactUs">Contact Us</Link></li>
                    <li><Link href="/about">About Us</Link></li>
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