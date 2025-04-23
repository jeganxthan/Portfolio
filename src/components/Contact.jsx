import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { Copy } from 'lucide-react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const text = "jegan4044@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Copied!');
      })
      .catch(() => {
        toast.error('Copy failed.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.warn('⚠️ Please fill in all fields before submitting.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      return;
    }

    const serviceId = 'service_geduira';
    const templateId = 'template_jd1jcl1';
    const publicKey = 'Fuz632gghYjDrB8Jq';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Jeganathan',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success('🚀 Email sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        toast.error('❌ Failed to send email.', {
          position: 'top-right',
          autoClose: 4000,
          theme: 'dark',
        });
      });
  };


  return (
    <div className='flex md:flex-row flex-col justify-between p-10 bebas-neue-regular' id='contact'>
      <div>
      <h1 className='md:text-4xl text-2xl font-bold text-center md:text-left bg-gradient-to-l from-white via-gray-600 to-gray-300 bg-clip-text text-transparent  '>contact</h1>
      <p className='roboto md:w-[500px] md:text-2xl mt-4 tracking-wider text-center bg-gradient-to-b from-white via-gray-400 to-gray-300 bg-clip-text text-transparent '> Got a question, idea, or just want to say hello? I’d love to hear from you! 
      Fill out the form and I’ll get back to you as soon as possible.</p>
      <div className="roboto p-4 max-w-md mx-auto bg-gray-600 rounded-xl shadow-md space-y-3 text-white mt-10">
      <div className="flex justify-between items-center">
        <p className="text-base">{text}</p>
        <button
          onClick={handleCopy}
          className="hover:text-blue-400 transition duration-200"
          aria-label="Copy text"
        >
          <Copy size={20} />
        </button>
      </div>
    </div>
      <div className='flex flex-row gap-4 mt-10 justify-center mb-4'>
      <div className="hover:bg-gray-300 p-2 hover:text-black rounded-lg relative transition duration-200">
      <a
        href="https://www.linkedin.com/in/jeganathan-i-430869258"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
      >
        <Linkedin />
      </a>
    </div>
      <div className="hover:bg-gray-300 p-2 hover:text-black rounded-lg relative transition duration-200">
      <a
        href="https://github.com/jeganxthan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
      >
        <Github />
      </a>
    </div>
      <div className="hover:bg-gray-300 p-2 hover:text-black rounded-lg relative transition duration-200">
      <a
        href="https://www.instagram.com/jeganxthan/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn profile"
      >
        <Instagram />
      </a>
    </div>
        
      </div>
      </div>
      <div className='flex justify-center md:h-[500px] md:w-[600px] items-center shadow-lg shadow-gray-600 hover:scale-105 h-[380px] w-[260px] ml-4 max-[320px]:ml-[-8px] max-[425px]:ml-10 max-[375px]:ml-[10px]'>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-8 items-center roboto'>
          <div className='flex'>
          <h1 className='text-2xl bebas-neue-regular'>SAY HELLO!!</h1>
          </div>
          <input
            className='p-2 md:w-[500px] md:h-[60px] w-[200px] h-[20px] text-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:shadow-md focus:shadow-gray-300 md:text-xl rounded-md'
            type="text"
            placeholder="Your Name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
           className='p-2 md:w-[500px] md:h-[60px] w-[200px] h-[20px] text-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:shadow-md focus:shadow-gray-300 md:text-xl rounded-md'
            type="email"
            placeholder="Your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
           className='p-2 md:w-[500px] md:h-[120px] w-[200px] h-[90px] text-sm bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:shadow-md focus:shadow-gray-300 md:text-xl rounded-md'
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="relative overflow-hidden px-6 py-2 text-white bg-black group mt-2 rounded-md h-14">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500 bebas-neue-regular">
              Submit
            </span>
            <span className="absolute inset-0 -left-[20%] -right-[20%] bg-white z-0 transform scale-x-0 skew-x-[-12deg] group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </button>
        </form>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          limit={2}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default Contact;
