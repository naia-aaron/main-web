import React from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="bg-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on industrial policy, events, and NAIA initiatives.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-800 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-2 text-sm text-blue-200">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}