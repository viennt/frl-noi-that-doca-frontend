import React, { PureComponent } from "react";

class ContactUs extends PureComponent {
  render() {
    return (
      <>
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="w-1/2">
              <h2 className="text-black text-4xl my-2">Contact us</h2>
              <div className="bg-blue-600 w-20 h-1"></div>
              <p className="mb-8">Reach out to us for any inquiry</p>
              <form >
                <input type="text" className="w-full border-gray-400 border p-3 mb-2" name="" id="" aria-describedby="helpId" placeholder="Full Name"/>
                <input type="email" className="w-full border-gray-400 border p-3 mb-2"  name="" id="" aria-describedby="helpId" placeholder="Your email"/>
                <textarea className="w-full border-gray-400 border pl-3 pt-3 mb-2" name="" placeholder="Message"></textarea>
                <input className="bg-blue-400 rounded w-full text-center h-10 text-white" type="subbmit" value="SUBMIT"/>
              </form>
            </div>
            <div className="w-1/2"></div>
          </div>
          <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full"></div>
          </div>
        </section>
      </>
    );
  }
}
export default ContactUs;
