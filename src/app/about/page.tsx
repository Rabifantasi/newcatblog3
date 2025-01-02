import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image 
        src="/5.png" 
        alt="About Cats" 
        className="rounded-md mb-4" 
        width={1000} 
        height={300} 
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Responsive image sizes
      />
      <h1 className="text-4xl font-bold mb-4 text-center text-purple-600">About Us</h1>
      <p className="mb-4 text-center text-gray-700 text-base sm:text-lg md:text-xl">
        Welcome to All About Cats! We are a passionate group of cat lovers dedicated to sharing our love for these adorable creatures. Our mission is to provide valuable information, tips, and a dash of humor to fellow cat enthusiasts.
      </p>
      <h2 className="text-3xl font-semibold mb-2 text-center text-pink-500">Our Story</h2>
      <p className="mb-4 text-center text-gray-700 text-base sm:text-lg md:text-xl">
        Our journey began with a simple love for cats. From playful kittens to wise old cats, we have always been fascinated by their unique personalities and behaviors. We believe that every cat deserves a loving home, and we aim to educate and inspire others to give them the care they need.
      </p>
      <h2 className="text-3xl font-semibold mb-2 text-center text-pink-500">What We Offer</h2>
      <ul className="list-disc list-inside mb-4 text-center">
        <li className="text-blue-500 text-base sm:text-lg md:text-xl">Cat Care Tips: Learn how to keep your furry friend healthy and happy.</li>
        <li className="text-blue-500 text-base sm:text-lg md:text-xl">Fun Cat Facts: Discover interesting facts about our feline friends.</li>
        <li className="text-blue-500 text-base sm:text-lg md:text-xl">Cute Cat Memes: Enjoy a laugh with our collection of funny cat memes.</li>
        <li className="text-blue-500 text-base sm:text-lg md:text-xl">Product Reviews: Read reviews on the best cat products and toys.</li>
      </ul>
      <h2 className="text-3xl font-semibold mb-2 text-center text-pink-500">Join Our Community</h2>
      <p className="mb-4 text-center text-gray-700 text-base sm:text-lg md:text-xl">
        We invite you to join our community of cat lovers! Share your stories, tips, and cat pictures with us. Follow us on social media for the latest updates and connect with other cat enthusiasts.
      </p>
      <h2 className="text-3xl font-semibold mb-2 text-center text-pink-500">Contact Us</h2>
      <p className="mb-4 text-center text-gray-700 text-base sm:text-lg md:text-xl">
        If you have any questions, suggestions, or just want to chat about cats, feel free to reach out! We’d love to hear from you.
      </p>
    </div>
  );
};

export default About;
