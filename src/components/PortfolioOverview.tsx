import React from 'react'

const verticals = [
  { name: 'Rail', count: 2, color: 'bg-blue-500' },
  { name: 'Energy', count: 1, color: 'bg-yellow-500' },
  { name: 'Utilities', count: 1, color: 'bg-cyan-500' },
  { name: 'Government', count: 1, color: 'bg-purple-500' },
  { name: 'Cross-sector', count: 0, color: 'bg-green-500' },
]

export default function PortfolioOverview() {
  return (
    <div className="bg-white rounded-lg p-6 border border-slate-200">
      <div className="space-y-4">
        {verticals.map((vertical) => (
          <div key={vertical.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${vertical.color}`}></div>
              <span className="text-sm font-medium text-slate-700">{vertical.name}</span>
            </div>
            <span className="text-sm font-bold text-slate-900">{vertical.count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
