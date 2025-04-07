// app/page.tsx

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Welcome to ForgeAI</h1>
      <p className="mb-6">
        We’re building the next generation of AI-powered solutions. Our mission is to 
        streamline innovation and deliver real-world value using cutting-edge technology.
      </p>

      <div className="grid gap-4">
        {/* Example "call to action" cards or feature boxes */}
        <div className="p-4 border rounded">
          <h2 className="font-semibold text-xl mb-2">Forge Insights</h2>
          <p>Leverage advanced AI analytics for powerful data insights.</p>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-semibold text-xl mb-2">Forge Automations</h2>
          <p>Automate repetitive tasks to free up your time and accelerate growth.</p>
        </div>
      </div>
    </section>
  );
}
