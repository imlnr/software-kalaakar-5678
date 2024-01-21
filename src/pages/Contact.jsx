import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Add your contact form logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject', subject);
    console.log('Message:', message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center light-blue-transparent-bg" style={{ width: '100%', paddingTop: '80px', paddingBottom: '80px' ,paddingRight:'90px', paddingLeft:'100px',}}>
      <div className="flex w-full max-w-screen-xl">
        {/* Map */}
        <div className="bg-white w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490810613!2d77.30125608918739!3d12.954459541829658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705772736831!5m2!1sen!2sin"
            style={{ width: '100%', height: '100%' }}
            title="Google Map"
          ></iframe>
        </div>

        {/* Form */}
        <div className="bg-white p-8 w-full lg:w-1/2 mr-4">
          <h2 className="text-2xl font-semibold mb-6 teal-text">Contact Us</h2>
          <p style={{ color: 'grey' }}>We're open for any suggestion or just to have a chat</p>
              {/* Contact Information */}
              <div className="flex mt-6" style={{ marginbottom:'50px'}}>
            {/* Address */}
            <div className="flex-1 mr-4">
              <h3 className="text-sm font-semibold  mb-2">Address:</h3>
              <p className="text-sm   mb-2" style={{ color: 'grey' }}>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>

            {/* Email */}
            <div className="flex-1 mr-4">
              <h3 className="text-sm font-semibold ">Email:</h3>
              <p className="text-sm   mb-2">eduSprint@yoursite.com</p>
            </div>

            {/* Phone */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold ">Phone:</h3>
              <p className="text-sm   mb-2">+91-9105455891</p>
            </div>
          </div>
          <form className="text-gray-700">
            <div className="mb-6 flex items-center">
              <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-7" htmlFor="name">
                Name:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
                id="name"
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-7" htmlFor="email">
                Email:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
                id="email"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-3" htmlFor="subject">
                Subject:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2 "
                id="subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label className="block text-sm font-bold mb-2 white-text text-left ml-1 mr-2" htmlFor="message">
                Message:
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ml-2"
                id="message"
                placeholder="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div>
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
