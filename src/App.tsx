/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Lock, 
  Terminal, 
  Cpu, 
  Layers, 
  Code2, 
  ChevronRight, 
  ExternalLink,
  Info,
  CheckCircle2,
  AlertCircle,
  Monitor,
  Activity
} from "lucide-react";
import { useState, useEffect } from "react";

const SECTIONS = [
  {
    id: "overview",
    title: "AI Studio Build",
    icon: <Cpu className="w-5 h-5" />,
    description: "Your agent-powered development environment.",
    content: (
      <div className="space-y-6">
        <p className="text-zinc-400 leading-relaxed">
          Google AI Studio Build is an agent-centric development platform. You describe what you want, and I build it directly in your environment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
            <h4 className="font-mono text-xs uppercase text-zinc-500 tracking-wider">The Agent</h4>
            <p className="text-sm text-zinc-300">I have full access to your workspace. I can read, write, and execute code, and even manage database schemas.</p>
          </div>
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 space-y-2">
            <h4 className="font-mono text-xs uppercase text-zinc-500 tracking-wider">The Preview</h4>
            <p className="text-sm text-zinc-300">A live instance of your app runs on port 3000. Changes I make are visible almost instantly after a turn finishes.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "preview",
    title: "Live Preview",
    icon: <Monitor className="w-5 h-5" />,
    description: "Real-time application visualization.",
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-zinc-400">
            This module demonstrates how your changes are reflected in real-time. The preview below is a window into your live application.
          </p>
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-500 uppercase font-bold">Live Stream</span>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative aspect-video rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl">
            {/* Simulated Iframe/Preview Header */}
            <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
              <div className="flex-1 max-w-sm h-4 bg-zinc-800 rounded mx-auto flex items-center justify-center">
                <span className="text-[8px] font-mono text-zinc-500 truncate px-4">localhost:3000/app-preview</span>
              </div>
            </div>
            
            {/* The Actual Preview Content */}
            <div className="w-full h-full p-8 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center p-3 shadow-lg">
                <Cpu className="w-full h-full text-white" />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400">Application Frame</h3>
                <p className="text-xs text-zinc-500 max-w-[200px]">Development build running with hot module replacement disabled for stability.</p>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-4">
                <div className="h-1 bg-zinc-800 rounded-full" />
                <div className="h-1 bg-emerald-500/50 rounded-full" />
                <div className="h-1 bg-zinc-800 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Refreshes", val: "Instant" },
            { label: "Stability", val: "99.9%" },
            { label: "Environment", val: "Dev" }
          ].map((stat, i) => (
            <div key={i} className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <span className="block text-[10px] uppercase text-zinc-500 font-mono mb-1">{stat.label}</span>
              <span className="block text-sm font-bold text-zinc-200">{stat.val}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: "database",
    title: "Database (Firestore)",
    icon: <Database className="w-5 h-5" />,
    description: "Persistent, real-time data storage.",
    content: (
      <div className="space-y-6">
        <p className="text-zinc-400">
          In this environment, we use **Firebase Firestore** as our primary database. It's a scalable, NoSQL database that pushes data updates to clients in real-time.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-emerald-400 text-sm">Provisioned by Me</p>
              <p className="text-xs text-zinc-400 italic">I can automatically set up the Firestore project, define your schema, and deploy security rules.</p>
            </div>
          </div>
          <div className="bg-zinc-950 p-4 rounded border border-zinc-800 font-mono text-xs text-emerald-400/90 shadow-inner">
            <pre>{`// Example: Fetching data
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

const notes = await getDocs(collection(db, 'notes'));`}</pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "auth",
    title: "Authentication",
    icon: <Lock className="w-5 h-5" />,
    description: "Secure user identities and roles.",
    content: (
      <div className="space-y-6">
        <p className="text-zinc-400">
          **Firebase Authentication** handles the heavy lifting of user login. We default to Google Login for seamless integration.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <h4 className="text-sm font-medium text-zinc-200 mb-2">Zero-Trust Security</h4>
            <p className="text-sm text-zinc-400">
              Users are authenticated on the client, and their identity is verified by **Firestore Security Rules** on every database request. I generate these rules to ensure users can only access their own data.
            </p>
          </div>
          <div className="bg-zinc-950 p-4 rounded border border-zinc-800 font-mono text-xs text-blue-400 shadow-inner">
            <pre>{`// Example: Login
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase-config';

await signInWithPopup(auth, new GoogleAuthProvider());`}</pre>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "workflow",
    title: "The Setup Flow",
    icon: <Terminal className="w-5 h-5" />,
    description: "How to bring it all together.",
    content: (
      <div className="space-y-4">
        <ol className="space-y-3">
          {[
            "Description: You tell me what data you need (e.g., 'I want a task manager').",
            "Provisioning: I call the Firebase setup tool to create your cloud resources.",
            "Schema: I create a 'firebase-blueprint.json' to map out your database structure.",
            "Rules & SDK: I deploy security rules and write the React hooks to connect your UI."
          ].map((step, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-zinc-500 font-mono shrink-0">0{i + 1}</span>
              <span className="text-zinc-300">{step}</span>
            </li>
          ))}
        </ol>
        <div className="pt-4 p-4 border border-zinc-800 bg-zinc-900/50 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
          <p className="text-xs text-zinc-400">
            You'll see a small popup to confirm the Firebase project when we start the setup.
          </p>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");

  const currentSection = SECTIONS.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-zinc-900 selection:text-white">
      {/* Background Grid Pattern (Recipe 1 Style) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 1px 1px, #141414 1px, transparent 0)`,
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-12 relative flex flex-col md:flex-row gap-12">
        {/* Left Sidebar - Navigation */}
        <aside className="w-full md:w-80 shrink-0 space-y-8">
          <div>
            <h1 className="text-2xl font-serif italic text-zinc-800 tracking-tight mb-1">
              The Mastery Guide
            </h1>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              Session.ID: AI_STUDIO_001
            </p>
          </div>

          <nav className="space-y-1">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full group text-left px-4 py-4 border-b border-zinc-300 transition-all flex items-center gap-4 relative overflow-hidden ${
                  activeTab === section.id 
                  ? 'bg-zinc-900 text-zinc-50 border-zinc-900' 
                  : 'hover:bg-zinc-200 text-zinc-600'
                }`}
              >
                <div className={`${activeTab === section.id ? 'text-zinc-100' : 'text-zinc-500'}`}>
                  {section.icon}
                </div>
                <div className="flex-1">
                  <span className="block font-medium text-sm">{section.title}</span>
                  <span className="block text-[10px] uppercase tracking-tighter opacity-70">
                    {section.description}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${activeTab === section.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
              </button>
            ))}
          </nav>

          <div className="p-6 bg-white border border-zinc-300 rounded-sm shadow-sm space-y-4">
             <div className="flex items-center gap-2 text-zinc-800">
               <Layers className="w-4 h-4" />
               <span className="text-xs font-bold uppercase tracking-widest">Stack Audit</span>
             </div>
             <div className="space-y-2">
               {[
                 { name: "Frontend", val: "React 19 + Vite" },
                 { name: "Styling", val: "Tailwind 4.x" },
                 { name: "Persist", val: "Firestore (Ready)" },
                 { name: "Identity", val: "Firebase Auth (Ready)" },
               ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center text-[10px] font-mono">
                   <span className="text-zinc-400">{item.name}</span>
                   <span className="text-zinc-600">{item.val}</span>
                 </div>
               ))}
             </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 bg-zinc-900 text-zinc-50 rounded-xl shadow-2xl overflow-hidden border border-zinc-800 flex flex-col">
          {/* Dashboard Header */}
          <div className="px-8 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Connection Status: Optimized
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-1 bg-zinc-800" />
              <div className="w-12 h-1 bg-zinc-700" />
              <div className="w-4 h-1 bg-zinc-800" />
            </div>
          </div>

          <div className="flex-1 p-8 md:p-12 relative overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-zinc-800 rounded text-[9px] font-mono text-zinc-400 border border-zinc-700 uppercase">
                      Module: {activeTab}
                    </span>
                  </div>
                  <h2 className="text-4xl font-serif italic text-zinc-100 italic">
                    {currentSection?.title}
                  </h2>
                </div>

                <div className="prose prose-invert max-w-none">
                  {currentSection?.content}
                </div>

                {activeTab === 'workflow' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
                    onClick={() => alert("Ready! Just ask me to 'Set up Firebase' to begin implementation.")}
                  >
                    <Code2 className="w-5 h-5" />
                    Initialize Production Stack
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer bar */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-950/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                V4.1.14_STABLE
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                TSX_RUNTIME
              </span>
            </div>
            <a 
              href="https://ai.studio/build" 
              target="_blank" 
              rel="noreferrer"
              className="px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-600 flex items-center gap-2 text-[10px] font-mono text-zinc-400 transition-colors group"
            >
              PROJECT_DOCS
              <ExternalLink className="w-3 h-3 group-hover:text-zinc-200 transition-colors" />
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
