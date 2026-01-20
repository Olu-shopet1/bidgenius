'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Zap, Upload, Send } from 'lucide-react'

export default function GenerateResponse() {
  const [vertical, setVertical] = useState('Rail')
  const [tone, setTone] = useState('Executive')
  const [question, setQuestion] = useState('')
  const [generating, setGenerating] = useState(false)
  const [response, setResponse] = useState('')

  const verticals = ['Rail', 'Energy', 'Utilities', 'Government', 'Cross-sector']
  const tones = [
    { value: 'Executive', desc: 'High-level, strategic focus' },
    { value: 'Detailed', desc: 'Comprehensive technical specifications' },
    { value: 'Strategic', desc: 'Balanced vision and details' },
  ]

  const handleGenerate = async () => {
    if (!question.trim()) return
    setGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setResponse(`Generated response for ${vertical} vertical using ${tone} tone:\n\n${question}\n\n[AI Generated Response - This would be replaced with actual AI-generated content]`)
      setGenerating(false)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">Generate Response</h1>
            <p className="text-slate-600 mt-2">AI-powered bid responses with tone customization and team collaboration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel - Inputs */}
            <div className="space-y-6">
              {/* Service Vertical */}
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Service Vertical</label>
                <select
                  value={vertical}
                  onChange={(e) => setVertical(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {verticals.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              {/* Writing Tone */}
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Writing Tone</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {tones.map((t) => (
                    <option key={t.value} value={t.value}>{t.value}</option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-2">
                  {tones.find(t => t.value === tone)?.desc}
                </p>
              </div>

              {/* Bid Question */}
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Bid Question</label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Paste your bid question here... (max 1500 words)"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px] resize-none"
                />
                <p className="text-xs text-slate-500 mt-2">{question.length} / 1500 characters</p>
              </div>

              {/* Evidence Sources */}
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <label className="block text-sm font-semibold text-slate-900 mb-3">Evidence Sources</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <Upload size={32} className="text-slate-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-900">Click to upload case studies</p>
                  <p className="text-xs text-slate-500 mt-1">PDF, DOCX, XLSX, or images</p>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={!question.trim() || generating}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Zap size={20} />
                {generating ? 'Generating...' : 'Generate Response'}
              </button>
            </div>

            {/* Right Panel - Response Output */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 h-fit sticky top-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Generated Response</h3>
              {response ? (
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-lg p-4 text-sm text-slate-700 whitespace-pre-wrap font-mono max-h-[500px] overflow-y-auto">
                    {response}
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Send size={18} />
                    Save & Share
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center">
                  <Zap size={48} className="text-slate-300 mb-4" />
                  <p className="text-slate-500">Ready to Generate</p>
                  <p className="text-sm text-slate-400 mt-2">Enter your bid question, select a tone style, upload evidence files and generate a tailored response.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
