import React from 'react'

const ContactUs = () => {
  return (
    // <!-- Contact Us -->
    <section className="contactUs" id="contactUs">
        {/* <!-- Header --> */}
        <div className="sectionHeader">
            <div>
                <div className="container">
                    {/* <!-- Contact Us section title --> */}
                    <h1>Contact Us</h1>
                    
                    {/* <!-- Section text --> */}
                    <p>
                        Ready to embark on your next project or seeking additional details before taking the plunge? Simply complete our contact form, and we&apos;ll reach out to you with the information you need.
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- Contact us Form container --> */}
        <div className="formContainer">
            <form action="" method="post">

                {/* <!-- Full Name --> */}
                <div className="inputFieldContainer">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" name="fullName" id="fullName" className="fullName" required />
                </div>

                {/* <!-- Email --> */}
                <div className="inputFieldContainer">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="email" required />
                </div>

                {/* <!-- Message --> */}
                <div className="inputFieldContainer">
                    <label htmlFor="message">Message:</label>
                    <textarea  name="message" id="message" className="message" required></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    </section>
  )
}

export default ContactUs