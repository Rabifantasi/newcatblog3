export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 sm:py-10 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 custom:px-[5%] mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
            Connect with Us
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            We love hearing from our community! Feel free to reach out with your thoughts and suggestions.
          </p>
        </div>
        <div className="mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            &copy; {new Date().getFullYear()} All About Cat. All Rights Reserved.
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2">
            <span className="text-red-500">&hearts;</span> for cat lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
