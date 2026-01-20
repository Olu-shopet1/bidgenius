'use client'

import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Calendar } from 'lucide-react'

export default function Analytics() {
  const scoreData = [
    { date: '20 Jan', initial: 100, final: 108 },
    { date: '19 Jan', initial: 100, final: 106 },
    { date: '18 Jan', initial: 100, final: 107 },
    { date: '17 Jan', initial: 100, final: 109 },
    { date: '16 Jan', initial: 100, final: 105 },
  ]

  const verticalData = [
    { name: 'Rail', value: 95 },
    { name: 'Energy', value: 88 },
    { name: 'Utilities', value: 92 },
    { name: 'Government', value: 85 },
  ]

  const toneData = [
    { name: 'Executive', value: 19 },
    { name: 'Detailed', value: 15 },
    { name: 'Strategic', value: 13 },
  ]

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
              <p className="text-slate-600 mt-2">Track bid performance and evaluation scores</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-300 rounded-lg">
              <Calendar size={20} className="text-slate-600" />
              <select className="border-0 focus:outline-none focus:ring-0">
                <option>Last 30 days</option>
                <option>Last 7 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Total Responses', value: '31', subtext: 'Generated in this period' },
              { label: 'Avg Initial Score', value: '100%', subtext: 'Before improvements' },
              { label: 'Avg Final Score', value: '108%', change: '+8%', subtext: 'After improvements' },
              { label: 'Improvements Applied', value: '0', subtext: 'Total suggestions applied' },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200">
                <p className="text-slate-600 text-sm font-medium">{metric.label}</p>
                <p className="text-3xl font-bold text-slate-900 mt-2">{metric.value}</p>
                {metric.change && <p className="text-green-600 text-sm font-medium mt-1">{metric.change}</p>}
                <p className="text-xs text-slate-500 mt-2">{metric.subtext}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Score Trend */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Score Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={scoreData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[80, 120]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="initial" stroke="#94A3B8" name="Before Improvements" />
                  <Line type="monotone" dataKey="final" stroke="#3B82F6" name="After Improvements" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Performance by Vertical */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Performance by Vertical</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={verticalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tone Distribution */}
          <div className="bg-white rounded-lg p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Tone Distribution</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={toneData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {toneData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
