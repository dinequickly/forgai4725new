"use client";

import { useState } from 'react';

export default function IdeaSubmissionForm() {
  const [idea, setIdea] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!idea.trim()) {
      setMessage('Please enter your idea');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('/api/submit-idea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea, name, email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        setMessage('Thank you for submitting your idea!');
        setIdea('');
        setName('');
        setEmail('');
      } else {
        setIsSuccess(false);
        setMessage(data.message || 'Failed to submit idea. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('An error occurred. Please try again later.');
      console.error('Error submitting idea:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-purple-400/20 neon-grid">
      <h3 className="text-xl font-semibold mb-4">Submit Your Idea</h3>
      
      {message && (
        <div className={`p-3 mb-4 rounded-lg ${isSuccess ? 'bg-green-900/30 text-green-200' : 'bg-red-900/30 text-red-200'}`}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="idea" className="block text-sm font-medium mb-1">
            Your Idea <span className="text-red-400">*</span>
          </label>
          <textarea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full p-3 bg-purple-900/20 rounded-lg border border-purple-400/30 focus:border-purple-400/60 focus:outline-none focus:ring-1 focus:ring-purple-400/60"
            rows={4}
            placeholder="Describe your startup idea..."
            required
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name (optional)
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-purple-900/20 rounded-lg border border-purple-400/30 focus:border-purple-400/60 focus:outline-none focus:ring-1 focus:ring-purple-400/60"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email (optional)
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-purple-900/20 rounded-lg border border-purple-400/30 focus:border-purple-400/60 focus:outline-none focus:ring-1 focus:ring-purple-400/60"
            placeholder="john@example.com"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-medium transition-colors disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Idea'}
        </button>
      </form>
    </div>
  );
}