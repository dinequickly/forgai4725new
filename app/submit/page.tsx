import IdeaSubmissionForm from '@/components/IdeaSubmissionForm';

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit Your Startup Idea</h1>
        <p className="text-gray-300 mb-8 text-center">
          Have a great startup idea? Share it with us and we&apos;ll help you bring it to life!
        </p>
        
        <IdeaSubmissionForm />
      </div>
    </div>
  );
}