'use client';

// app/page.tsx
import Hero from '@/components/Hero';
import AnimatedBackground from '@/components/AnimatedBackground';
import ChatInterfaceWrapper from '@/components/ChatInterfaceWrapper';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text-green">AI-Powered</span> Business Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multi-agent system transforms your ideas into complete business assets
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Idea Analysis",
                description: "Our AI agents analyze your business idea and extract key components for optimization",
                icon: "🧠",
                delay: 0.1,
                className: "gradient-border glow-purple"
              },
              {
                title: "Asset Generation",
                description: "Automatically create landing pages, brand kits, workflows, and content",
                icon: "🚀",
                delay: 0.2,
                className: "gradient-border glow-blue"
              },
              {
                title: "Instant Deployment",
                description: "Deploy your assets to the web with one click and start your business journey",
                icon: "🌐",
                delay: 0.3,
                className: "gradient-border glow-pink"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                className={`${feature.className} p-[1px] rounded-xl`}
              >
                <div className="glass-effect rounded-xl p-8 h-full">
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See <span className="gradient-text">ForgeAI</span> in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience how our AI transforms ideas into business assets
            </p>
          </motion.div>
          
          <div className="grid grid-cols-12 gap-6">
            {/* AI Orchestrator */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-3 glass-effect rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-6 gradient-text">AI Co-Pilot</h3>
              <div className="space-y-4">
                {[
                  "🏗️ Generate landing page layout",
                  "📈 Create financial projections",
                  "🛠️ Develop API architecture",
                  "🎨 Design brand identity",
                  "📱 Build mobile app mockup"
                ].map((task, i) => (
                  <div key={i} className="p-4 bg-white/5 rounded-lg cursor-move hover:bg-white/10 transition-all duration-300 border border-white/5">
                    <p className="text-sm">{task}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Code Hologram */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 relative min-h-[400px]"
            >
              <div className="hologram-panel absolute inset-0 glass-effect rounded-xl p-8 border border-white/10">
                <div className="flex justify-between mb-6">
                  <div className="text-sm font-medium gradient-text-blue">Active Prototype</div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 pulsing"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  </div>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <div className="text-purple-300">{"// AI-generated code preview"}</div>
                  <div>&lt;section class=&quot;<span className="text-yellow-300">container mx-auto</span>&quot;&gt;</div>
                  <div className="ml-4">&lt;h1 class=&quot;<span className="text-green-300">text-5xl font-bold</span>&quot;&gt;{'{{'} startupName {'}}'}&lt;/h1&gt;</div>
                  <div className="ml-8 text-purple-300">🚀 Auto-generated component</div>
                  <div className="ml-4">&lt;p class=&quot;<span className="text-green-300">text-xl text-gray-400</span>&quot;&gt;</div>
                  <div className="ml-8">{'{{'} valueProposition {'}}'}</div>
                  <div className="ml-4">&lt;/p&gt;</div>
                  <div className="ml-4">&lt;div class=&quot;<span className="text-green-300">mt-8 flex gap-4</span>&quot;&gt;</div>
                  <div className="ml-8">&lt;button class=&quot;<span className="text-yellow-300">btn-primary</span>&quot;&gt;Get Started&lt;/button&gt;</div>
                  <div className="ml-8">&lt;button class=&quot;<span className="text-yellow-300">btn-secondary</span>&quot;&gt;Learn More&lt;/button&gt;</div>
                  <div className="ml-4">&lt;/div&gt;</div>
                  <div>&lt;/section&gt;</div>
                </div>
              </div>
            </motion.div>

            {/* Chat Interface */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-3"
            >
              <div className="h-full min-h-[400px] glass-effect rounded-xl border border-white/10">
                <ChatInterfaceWrapper />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="gradient-border p-[1px] rounded-2xl glow-purple"
          >
            <div className="glass-effect rounded-2xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Ideas?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who are building their businesses with ForgeAI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/signup" className="gradient-bg px-8 py-4 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  Get Started Free
                </a>
                <a href="/demo" className="glass-effect px-8 py-4 rounded-lg text-white font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  View Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
