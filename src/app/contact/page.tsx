import Image from 'next/image';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image 
        src="/cutecat7.png" 
        alt="cat" 
        className="rounded-md mb-4" 
        width={1000} 
        height={300} 
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Responsive image sizes
      />
      <h1 className="text-4xl font-bold mb-4 text-center text-pink-500">Contact Us</h1>
      <p className="mb-4 text-center text-purple-600 text-base sm:text-lg md:text-xl">
        We love hearing from our readers! Whether you have a question, feedback, or a story to share, feel free to reach out to us using the information below.
      </p>
      <h2 className="text-3xl font-semibold mb-2 text-center text-blue-500">Email Us</h2>
      <p className="mb-4 text-center text-green-600 text-base sm:text-lg md:text-xl">
        For inquiries, suggestions, or collaborations, please email us at:  
        <a href="mailto:rabifantasif@gmail.com" className="text-blue-700 underline"> rabifantasif@gmail.com</a>
      </p>
      <h2 className="text-3xl font-semibold mb-2 text-center text-blue-500">Follow Us on Social Media</h2>
      <p className="mb-4 text-center text-purple-600 text-base sm:text-lg md:text-xl">
        Stay connected and follow us for the latest updates, cat memes, and more!
      </p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li className="text-red-500 text-base sm:text-lg md:text-xl">
          Facebook: <a href="[Your Facebook Link]" className="text-blue-700 underline">Your Facebook Page</a>
        </li>
        <li className="text-red-500 text-base sm:text-lg md:text-xl">
          Instagram: <a href="[Your Instagram Link]" className="text-blue-700 underline">Your Instagram Page</a>
        </li>
        <li className="text-red-500 text-base sm:text-lg md:text-xl">
          Twitter: <a href="[Your Twitter Link]" className="text-blue-700 underline">Your Twitter Page</a>
        </li>
        <li className="text-red-500 text-base sm:text-lg md:text-xl">
          Pinterest: <a href="[Your Pinterest Link]" className="text-blue-700 underline">Your Pinterest Page</a>
        </li>
      </ul>
      <h2 className="text-3xl font-semibold mb-2 text-center text-blue-500">Contact Form</h2>
      <p className="mb-4 text-center text-purple-600 text-base sm:text-lg md:text-xl">
        Alternatively, you can fill out the form below, and we’ll get back to you as soon as possible:
      </p>
      <form className="flex flex-col space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="border border-gray-300 p-2 text-base sm:text-lg md:text-xl" 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="border border-gray-300 p-2 text-base sm:text-lg md:text-xl" 
          required 
        />
        <input 
          type="text" 
          placeholder="Subject" 
          className="border border-gray-300 p-2 text-base sm:text-lg md:text-xl" 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          className="border border-gray-300 p-2 text-base sm:text-lg md:text-xl" 
          required 
          rows={4}
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 text-base sm:text-lg md:text-xl"
        >
          Send Message
        </button>
      </form>
      <h2 className="text-3xl font-semibold mb-2 text-center text-blue-500">Frequently Asked Questions</h2>
      <p className="mb-4 text-center text-base sm:text-lg md:text-xl">Here are some common questions we receive:</p>
      <ul className="list-disc list-inside mb-4 text-center">
        <li className="text-red-500 text-base sm:text-lg md:text-xl"><strong>How can I submit a guest post?</strong> – We welcome guest contributions! Please email us for guidelines.</li>
        <li className="text-red-500 text-base sm:text-lg md:text-xl"><strong>Do you offer advertising opportunities?</strong> – Yes, please reach out to discuss potential partnerships.</li>
        <li className="text-red-500 text-base sm:text-lg md:text-xl"><strong>Can I share your content?</strong> – Feel free to share our posts, but please give us credit and link back to the original article.</li>
      </ul>
      <p className="mb-4 text-center text-purple-600 text-base sm:text-lg md:text-xl">
        Thank you for reaching out to [All About Cat]! We appreciate your interest and look forward to connecting with you.
      </p>
    </div>
  );
};

export default Contact;
