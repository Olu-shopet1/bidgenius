'use client'

import React from 'react'
import { BarChart3, FileText, Settings, Search, BarChart, Calculator } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
  { icon: BarChart3, label: 'Dashboard', href: '/' },
  { icon: FileText, label: 'Generate Response', href: '/generate' },
  { icon: FileText, label: 'Case Studies', href: '/case-studies' },
  { icon: FileText, label: 'Knowledge Base', href: '/knowledge-base' },
  { icon: Calculator, label: 'Cost Calculator', href: '/cost-calculator' },
  { icon: BarChart, label: 'Analytics', href: '/analytics' },
  { icon: Search, label: 'Search', href: '/search' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold">
            BG
          </div>
          <div>
            <h1 className="font-bold text-lg">BidGenius</h1>
            <p className="text-xs text-slate-400">AI Response System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Settings */}
      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  )
}
