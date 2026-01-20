import React from 'react'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  change?: string
  period?: string
  icon: LucideIcon
}

export default function StatCard({ label, value, change, period, icon: Icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          {period && <p className="text-xs text-slate-500 mt-1">{period}</p>}
          {change && (
            <p className="text-sm text-green-600 font-medium mt-2">{change} from last month</p>
          )}
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <Icon size={24} className="text-blue-600" />
        </div>
      </div>
    </div>
  )
}
