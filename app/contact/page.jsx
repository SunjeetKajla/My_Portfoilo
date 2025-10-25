import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 sm:pt-28 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Contact Me</h1>
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-400">Email</h3>
                <p>sunjeet.kajla@example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">LinkedIn</h3>
                <p>linkedin.com/in/sunjeet-kajla</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">GitHub</h3>
                <p>github.com/sunjeet-kajla</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}