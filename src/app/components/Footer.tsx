export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
          <p className="text-sm">
            We love hearing from our community! Feel free to reach out with your thoughts and suggestions.
          </p>
        </div>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} All About Cat. All Rights Reserved.</p>
          <p>
            <span className="text-red-500">&hearts;</span> for cat lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
