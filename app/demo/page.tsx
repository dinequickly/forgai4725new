// app/demo/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Intro Section */}
      <section className="py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">See Our Platform in Action</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Explore a live, interactive walkthrough of our powerful features
          </p>
        </div>
      </section>

      {/* Video or Interactive Embed */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6 overflow-hidden">
            {/* Replace with your actual video embed or interactive demo */}
            <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
              <p className="text-lg text-muted-foreground">Demo Video Player</p>
              {/* For an actual video, you would use something like:
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                title="Product Demo" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe> */}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights (In-Context) */}
      <section className="py-8 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Experience These Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Import your data with one click</h3>
              <p className="text-muted-foreground text-center">Seamlessly integrate your existing data into our platform with just a single click.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Generate AI-driven insights</h3>
              <p className="text-muted-foreground text-center">Our advanced AI analyzes your data to provide valuable insights instantly.</p>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Share results with collaborators</h3>
              <p className="text-muted-foreground text-center">Easily collaborate with your team by sharing insights and reports in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Walkthrough / Screenshots */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
          
          {/* Step 1 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">Step 1</div>
                <h3 className="text-xl font-semibold mb-3">Sign up and connect your data sources</h3>
                <p className="text-muted-foreground mb-4">Create your account and integrate with your existing data providers through our simple connection interface.</p>
              </div>
              <div className="md:w-1/2 bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual screenshot */}
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <p className="text-muted-foreground">Step 1 Screenshot</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">Step 2</div>
                <h3 className="text-xl font-semibold mb-3">Configure your dashboard preferences</h3>
                <p className="text-muted-foreground mb-4">Customize your experience by selecting the metrics and insights most relevant to your needs.</p>
              </div>
              <div className="md:w-1/2 bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual screenshot */}
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <p className="text-muted-foreground">Step 2 Screenshot</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">Step 3</div>
                <h3 className="text-xl font-semibold mb-3">Analyze results and take action</h3>
                <p className="text-muted-foreground mb-4">Review the AI-generated insights and implement the suggested actions to improve performance.</p>
              </div>
              <div className="md:w-1/2 bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual screenshot */}
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <p className="text-muted-foreground">Step 3 Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Interactive Section (Optional) */}
      <section className="py-12 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Try It Now</h2>
          <p className="text-lg text-muted-foreground mb-8">Experience a simplified version of our platform with this interactive demo</p>
          
          {/* Interactive Demo Container */}
          <div className="aspect-video bg-background rounded-lg border border-border mb-8 mx-auto max-w-3xl">
            {/* Replace with your actual interactive demo */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Demo Placeholder</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            This is a sandbox environment with pre-loaded data. Your information is not stored.
          </p>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Dive In?</h2>
          <p className="text-lg mb-8">Get started with your free account or schedule a personalized demo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center justify-center rounded-full bg-background text-foreground px-6 py-3 font-medium transition-colors hover:bg-secondary">
              Get Started Free
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-transparent border border-primary-foreground px-6 py-3 font-medium transition-colors hover:bg-primary-foreground/10">
              Book a Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-2">Do I need to install anything?</h3>
              <p className="text-muted-foreground">No, our platform is entirely web-based. You only need a modern browser to access all features.</p>
            </div>
            
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-2">Is my data safe during the demo?</h3>
              <p className="text-muted-foreground">Absolutely. The demo environment uses pre-loaded sample data. Your own data is only processed when you create a full account.</p>
            </div>
            
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-2">Can I invite my team to try the demo?</h3>
              <p className="text-muted-foreground">Yes, you can share the demo link with your team members. For collaborative features, we recommend signing up for a free trial.</p>
            </div>
            
            <div className="p-6 bg-background rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-medium mb-2">How long does the free trial last?</h3>
              <p className="text-muted-foreground">Our free trial gives you full access to all features for 14 days, with no credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Using a simplified version that matches the design */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/next.svg"
                alt="Company Logo"
                width={100}
                height={24}
                className="dark:invert"
              />
            </Link>
          </div>
          
          <div className="flex gap-6">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}