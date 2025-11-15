import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 p-4 sm:p-8" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Contact Me</h1>
        <div className="space-y-4 sm:space-y-6">
          <div className="p-4 sm:p-6 rounded-lg" style={{ background: 'var(--foreground)', color: 'var(--background)', opacity: 0.95 }}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium" style={{ color: '#60a5fa' }}>Email</h3>
                <p>sunjeet.kajla@example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium" style={{ color: '#60a5fa' }}>LinkedIn</h3>
                <p>linkedin.com/in/sunjeet-kajla</p>
              </div>
              <div>
                <h3 className="text-lg font-medium" style={{ color: '#60a5fa' }}>GitHub</h3>
                <p>github.com/sunjeet-kajla</p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 rounded-lg" style={{ background: 'var(--foreground)', color: 'var(--background)', opacity: 0.95 }}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg focus:outline-none"
                  style={{ background: 'var(--background)', border: '1px solid', borderColor: 'var(--foreground)', borderOpacity: 0.3, color: 'var(--foreground)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg focus:outline-none"
                  style={{ background: 'var(--background)', border: '1px solid', borderColor: 'var(--foreground)', borderOpacity: 0.3, color: 'var(--foreground)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full p-3 rounded-lg focus:outline-none"
                  style={{ background: 'var(--background)', border: '1px solid', borderColor: 'var(--foreground)', borderOpacity: 0.3, color: 'var(--foreground)' }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 rounded-lg font-medium transition-colors"
                style={{ background: '#2563eb', color: '#ffffff' }}
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