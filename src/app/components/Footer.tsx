export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} All About Cat. All Rights Reserved.</p>
          <p>
            <span className="text-red-500">&hearts;</span> for cat lovers.
          </p>
        </div>
      </footer>
    );
  }