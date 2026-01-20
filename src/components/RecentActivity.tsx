import React from 'react'
import { CheckCircle2, Plus, Send } from 'lucide-react'

interface ActivityItem {
  type: string
  description: string
  time: string
}

interface RecentActivityProps {
  items: ActivityItem[]
}

export default function RecentActivity({ items }: RecentActivityProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Response generated':
        return <CheckCircle2 size={20} className="text-green-600" />
      case 'Case study added':
        return <Plus size={20} className="text-blue-600" />
      case 'Bid submitted':
        return <Send size={20} className="text-purple-600" />
      default:
        return <CheckCircle2 size={20} className="text-slate-400" />
    }
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-6 flex items-start gap-4 ${
            index !== items.length - 1 ? 'border-b border-slate-200' : ''
          } hover:bg-slate-50 transition-colors`}
        >
          <div className="pt-1">{getIcon(item.type)}</div>
          <div className="flex-1">
            <p className="font-medium text-slate-900">{item.type}</p>
            <p className="text-sm text-slate-600 mt-1">{item.description}</p>
          </div>
          <span className="text-sm text-slate-500 whitespace-nowrap">{item.time}</span>
        </div>
      ))}
    </div>
  )
}
