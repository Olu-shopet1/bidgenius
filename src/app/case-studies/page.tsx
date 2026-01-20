'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Plus, Search, Filter } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  description: string
  organization: string
  value: string
  date: string
  vertical: string
  tags: string[]
}

export default function CaseStudies() {
  const [caseStudies] = useState<CaseStudy[]>([
    {
      id: '1',
      title: 'Manchester Metro Extension',
      description: 'Complete electrification and extension of the Manchester Metro line',
      organization: 'Transport for Greater Manchester',
      value: '£28M',
      date: '2024-03',
      vertical: 'Rail',
      tags: ['electrification', 'social value', 'sustainability'],
    },
    {
      id: '2',
      title: 'North Sea Wind Farm Connection',
      description: 'High-voltage grid connection for offshore wind farm',
      organization: 'National Grid ESO',
      value: '£45M',
      date: '2023-11',
      vertical: 'Energy',
      tags: ['renewable', 'grid', 'offshore'],
    },
    {
      id: '3',
      title: 'Thames Water Asset Management',
      description: 'Comprehensive digital asset management system implementation',
      organization: 'Thames Water',
      value: '£15M',
      date: '2024-01',
      vertical: 'Utilities',
      tags: ['digital transformation', 'asset management', 'water'],
    },
    {
      id: '4',
      title: 'HMRC Office Modernization',
      description: 'Full modernization of regional HMRC offices',
      organization: 'HMRC',
      value: '£22M',
      date: '2023-08',
      vertical: 'Government',
      tags: ['sustainability', 'security', 'modernization'],
    },
    {
      id: '5',
      title: 'CrossCountry Rail Signaling Upgrade',
      description: 'Digital signaling upgrade across 120 miles of mainline track',
      organization: 'Network Rail',
      value: '£38M',
      date: '2024-02',
      vertical: 'Rail',
      tags: ['signaling', 'digital', 'capacity'],
    },
  ])

  const verticals = ['All Verticals', 'Rail', 'Energy', 'Utilities', 'Government', 'Cross-sector']
  const [selectedVertical, setSelectedVertical] = useState('All Verticals')

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Case Studies</h1>
              <p className="text-slate-600 mt-2">Manage your project portfolio and evidence library</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
              <Plus size={20} />
              Add Case Study
            </button>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-300 rounded-lg">
              <Filter size={20} className="text-slate-600" />
              <select
                value={selectedVertical}
                onChange={(e) => setSelectedVertical(e.target.value)}
                className="border-0 focus:outline-none focus:ring-0"
              >
                {verticals.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies
              .filter((cs) => selectedVertical === 'All Verticals' || cs.vertical === selectedVertical)
              .map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg border border-slate-200 hover:shadow-lg transition-shadow p-6">
                  {/* Vertical Badge */}
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                    {caseStudy.vertical}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{caseStudy.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{caseStudy.description}</p>

                  {/* Details */}
                  <div className="space-y-2 text-sm mb-4 pb-4 border-b border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-600">{caseStudy.organization}</span>
                      <span className="font-semibold text-slate-900">{caseStudy.value}</span>
                    </div>
                    <div className="text-slate-500">{caseStudy.date}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}
