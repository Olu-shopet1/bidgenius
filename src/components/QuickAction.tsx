import React from 'react'
import { Zap, Plus, ArrowRight } from 'lucide-react'

interface QuickActionProps {
  title: string
  description: string
  icon: 'Zap' | 'Plus'
}

export default function QuickAction({ title, description, icon }: QuickActionProps) {
  const Icon = icon === 'Zap' ? Zap : Plus

  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
          <Icon size={24} className="text-blue-600" />
        </div>
        <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-600 transition-colors" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  )
}
