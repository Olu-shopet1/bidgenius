'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface AnalyticsChartsProps {
  scoreData: Array<{ date: string; initial: number; final: number }>
  verticalData: Array<{ name: string; value: number }>
  toneData: Array<{ name: string; value: number }>
}

export default function AnalyticsCharts({
  scoreData,
  verticalData,
  toneData,
}: AnalyticsChartsProps) {
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']

  return (
    <>
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
            <Line
              type="monotone"
              dataKey="initial"
              stroke="#94A3B8"
              name="Before Improvements"
            />
            <Line
              type="monotone"
              dataKey="final"
              stroke="#3B82F6"
              name="After Improvements"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance by Vertical */}
      <div className="bg-white rounded-lg p-6 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Performance by Vertical
        </h3>
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

      {/* Tone Distribution */}
      <div className="bg-white rounded-lg p-6 border border-slate-200 lg:col-span-2">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Tone Distribution</h3>
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={toneData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {toneData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}
