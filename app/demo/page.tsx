// app/demo/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="flex flex-col">
      {/* Holographic Title */}
      <div className="mb-8 bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-purple-400/20 neon-grid">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">AI Template Gallery</h1>
        <p className="text-sm text-purple-300">
          Browse and deploy pre-built AI solutions for your startup
        </p>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Template 1 */}
        <div className="bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20 overflow-hidden group">
          <div className="h-40 bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center p-4">
            <div className="font-mono text-xs text-center">
              <div className="text-purple-300">// Landing Page Generator</div>
              <div className="text-xs mt-2">Converts product descriptions into full landing pages</div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Startup Landing Page</h3>
            <div className="flex items-center text-xs text-purple-300 mb-4">
              <span className="mr-2">⭐ 4.8</span>
              <span>1.2k deployments</span>
            </div>
            <Link href="/demo/template1" className="block w-full py-2 bg-purple-600 rounded text-center text-sm hover:bg-purple-500">
              Use Template
            </Link>
          </div>
        </div>

        {/* Template 2 */}
        <div className="bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20 overflow-hidden group">
          <div className="h-40 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center p-4">
            <div className="font-mono text-xs text-center">
              <div className="text-blue-300">// Financial Projector</div>
              <div className="text-xs mt-2">Generate 5-year financial forecasts from business plans</div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">Startup Financial Model</h3>
            <div className="flex items-center text-xs text-purple-300 mb-4">
              <span className="mr-2">⭐ 4.9</span>
              <span>3.4k deployments</span>
            </div>
            <Link href="/demo/template2" className="block w-full py-2 bg-purple-600 rounded text-center text-sm hover:bg-purple-500">
              Use Template
            </Link>
          </div>
        </div>

        {/* Template 3 */}
        <div className="bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20 overflow-hidden group">
          <div className="h-40 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 flex items-center justify-center p-4">
            <div className="font-mono text-xs text-center">
              <div className="text-indigo-300">// API Architect</div>
              <div className="text-xs mt-2">Design scalable API structures from product requirements</div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium mb-2">API Blueprint</h3>
            <div className="flex items-center text-xs text-purple-300 mb-4">
              <span className="mr-2">⭐ 4.7</span>
              <span>2.1k deployments</span>
            </div>
            <Link href="/demo/template3" className="block w-full py-2 bg-purple-600 rounded text-center text-sm hover:bg-purple-500">
              Use Template
            </Link>
          </div>
        </div>
      </div>

      {/* Neural Console */}
      <div className="p-4 bg-black/30 rounded-xl backdrop-blur-lg border border-purple-400/20 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-purple-900/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-sm">
              <div className="text-green-400">⬤</div>
              <span>Ready to deploy your custom template</span>
            </div>
          </div>
          <Link href="/contact" className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-500">
            Create Custom
          </Link>
        </div>
      </div>

      {/* FAQ Section - Styled to match the new design */}
      <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-purple-400/20">
        <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-purple-900/20 rounded-lg">
            <h3 className="font-medium mb-2">How do templates work?</h3>
            <p className="text-sm text-purple-200">Our AI templates are pre-built solutions that you can customize and deploy in minutes. Each template is designed for a specific use case.</p>
          </div>
          
          <div className="p-4 bg-purple-900/20 rounded-lg">
            <h3 className="font-medium mb-2">Can I modify the templates?</h3>
            <p className="text-sm text-purple-200">Yes, all templates are fully customizable. You can adjust parameters, change the design, and integrate with your existing systems.</p>
          </div>
          
          <div className="p-4 bg-purple-900/20 rounded-lg">
            <h3 className="font-medium mb-2">Do I need technical skills?</h3>
            <p className="text-sm text-purple-200">No technical skills required. Our templates use natural language interfaces that anyone can use, regardless of technical background.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
