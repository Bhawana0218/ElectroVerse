import React , { useState } from 'react';
import Confirm from '/src/assets/Confirm.png';
const Contact = () =>{
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    return (
    <div className="bg-gray-800 text-white relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* <div className="max-w-4xl mx-auto px-4"> */}
         <div
          className="absolute inset-0 w-full h-full object-cover mt-6">
        
        <img src='https://png.pngtree.com/background/20230521/original/pngtree-commercial-electronics-store-of-many-screens-picture-image_2683696.jpg'
          className='w-full h-full object-cover'
          style={{filter: 'brightness(0.5) saturate(1.1)'}}/>
          <div className="absolute inset-0  bg-transparent bg-linear-to-r from-purple-400 to-pink-300 opacity-20"></div>
         </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-6 flex flex-col items-center">
          <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-white bg-clip-text text-transparent mb-1 mt-10  drop-shadow-lg">
            Get In Touch
          </h2>
          <p className="text-white text-lg drop-shadow">
            Have questions about our ElectroVerse Products?  We would love to hear from you!
          </p>
        </div>

        <div className="w-[85%] bg-gray-900 bg-opacity-20 rounded-2xl shadow-2xl p-6 md:p-12 backdrop-blur-sm border border-purple-500/20">
          {isSubmitted ? (
            <div className="text-center py-12">
                <img src={Confirm} alt='' className='h-18 w-18 inline-flex rounded-full mb-6'/>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className=' background-blur-md shadow-lg opacity-90'>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2"> Full Name
                  </label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-700 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2"> Email Address
                  </label>
                  <input
                    type="email" id="email"name="email"value={formData.email} onChange={handleChange}required  placeholder="abc@email.com"
                    className="w-full px-4 py-3 bg-gray-700 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"                  
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-300 mb-2"> Subject
                </label>
                <input
                  type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-gray-700 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message" name="message" value={formData.message} onChange={handleChange}  required rows={5} placeholder="Tell us about your fitness goals..."
                  className="w-full px-4 py-3 bg-gray-700 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"               
                />
                 </div>
              <button
                type="submit"
                onClick={()=>{window.scrollTo(0,0)}}
                className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              > Send Message
              </button>
            </form>
            </div>
          )}
        </div>
      </div>
     </div>
  );
};
export default Contact;
