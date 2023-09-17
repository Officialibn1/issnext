import React from 'react'

const Footer = () => {
  return (
    // <!-- Footer  -->
    <footer>
        <div className="sectionHeader">
            <div>
                <div className="container">
                   <div className="footerItems">
                        <h1>Tel: </h1>
                        <a href="tel:+2347030619855">+234 703 061 9855</a>
                   </div>

                   <div className="footerItems">
                        <h1>Tel: </h1>
                        <a href="tel:+2349038880282">+234 903 888 0282</a>
                   </div>

                   <div className="footerItems">
                        <h1>Email: </h1>
                        <a href="mailto:officialibn00@gmail.com">officialibn00@gmail.com</a>
                   </div>

                   <div className="footerItems">
                    <span>
                        <a href="#"  target='_blank' rel='noopener noreferrer'>
                            <i className="bi bi-facebook"></i>
                        </a>
                    </span>
                    
                    <span>
                        <a href="https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/" target='_blank' rel='noopener noreferrer'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </span>
                    
                    <span>
                        <a href="https://instagram.com/__ibn1?igshid=NGVhN2U2NjQ0Yg==" target='_blank' rel='noopener noreferrer'>
                            <i className="bi bi-instagram"></i>
                        </a>
                    </span>
                    
                    <span>
                        <a href="https://wa.me/message/4K7QPPNRCHWEF1" target='_blank' rel='noopener noreferrer'>
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </span>
                   </div>

                   <div className="footerItems">
                        <p>&copy; 2023, ISS INTERNET SERVICE STUDIO.</p>
                        {/* <!-- <p> Icons made by <a href="https://www.flaticon.com/authors/fauzidea" title="FauzIDEA"  target='_blank' rel='noopener noreferrer'> FauzIDEA </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></p> --> */}
                   </div>

                   <div className="backTop">
                    <a href="#">
                        <i className="bi bi-arrow-up-square-fill"></i>
                    </a>
                   </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer