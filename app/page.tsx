// app/page.tsx
import ChatInterfaceWrapper from '@/components/ChatInterfaceWrapper';

export default function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* AI Orchestrator */}
      <div className="col-span-12 md:col-span-3 bg-black/30 rounded-xl p-4 backdrop-blur-lg border border-purple-400/20 neon-grid">
        <h3 className="text-sm font-semibold mb-4">AI Co-Pilot</h3>
        <div className="space-y-4">
          <div className="p-3 bg-purple-900/30 rounded-lg cursor-move hover:bg-purple-900/50">
            <p className="text-xs">🏗️ Generate landing page layout</p>
          </div>
          <div className="p-3 bg-purple-900/30 rounded-lg cursor-move hover:bg-purple-900/50">
            <p className="text-xs">📈 Create financial projections</p>
          </div>
          <div className="p-3 bg-purple-900/30 rounded-lg cursor-move hover:bg-purple-900/50">
            <p className="text-xs">🛠️ Develop API architecture</p>
          </div>
        </div>
      </div>

      {/* Code Hologram */}
      <div className="col-span-12 md:col-span-6 relative min-h-[300px]">
        <div className="hologram-panel absolute inset-0 bg-gradient-to-b from-purple-900/30 to-blue-900/30 rounded-2xl p-8 neon-grid">
          <div className="flex justify-between mb-6">
            <div className="text-sm">Active Prototype</div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
          <div className="font-mono text-xs space-y-2">
            <div className="text-purple-300">{"// AI-generated code preview"}</div>
            <div>&lt;section class=&quot;<span className="text-yellow-300">container</span>&quot;&gt;</div>
            <div className="ml-4">&lt;h1 class=&quot;<span className="text-green-300">text-4xl</span>&quot;&gt;{'{{'} startupName {'}}'}&lt;/h1&gt;</div>
            <div className="ml-8 text-purple-300">🚀 Auto-generated component</div>
            <div className="ml-4">&lt;p class=&quot;<span className="text-green-300">text-gray-400</span>&quot;&gt;</div>
            <div className="ml-8">{'{{'} valueProposition {'}}'}</div>
            <div className="ml-4">&lt;/p&gt;</div>
            <div>&lt;/section&gt;</div>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="col-span-12 md:col-span-3">
        <div className="h-full min-h-[400px]">
          <ChatInterfaceWrapper />
        </div>
      </div>
    </div>
  );
}
