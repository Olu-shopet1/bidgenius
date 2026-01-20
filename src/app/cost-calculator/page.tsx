'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Calculator, Plus, Trash2, Download } from 'lucide-react'

interface CostItem {
  id: string
  name: string
  amount: number
}

export default function CostCalculator() {
  const [capex, setCapex] = useState<CostItem[]>([
    { id: '1', name: 'Equipment & Hardware', amount: 0 },
    { id: '2', name: 'Infrastructure', amount: 0 },
    { id: '3', name: 'Installation & Setup', amount: 0 },
  ])

  const [opex, setOpex] = useState<CostItem[]>([
    { id: '1', name: 'Personnel & Staff', amount: 0 },
    { id: '2', name: 'Maintenance & Support', amount: 0 },
    { id: '3', name: 'Utilities & Operations', amount: 0 },
  ])

  const [projectDuration, setProjectDuration] = useState<number>(1)

  const totalCapex = capex.reduce((sum, item) => sum + item.amount, 0)
  const totalOpex = opex.reduce((sum, item) => sum + item.amount, 0)
  const totalProjectCost = totalCapex + totalOpex * projectDuration
  const averageAnnualCost = totalOpex

  const handleCapexChange = (id: string, amount: number) => {
    setCapex(capex.map((item) => (item.id === id ? { ...item, amount } : item)))
  }

  const handleOpexChange = (id: string, amount: number) => {
    setOpex(opex.map((item) => (item.id === id ? { ...item, amount } : item)))
  }

  const addCapexItem = () => {
    const newId = Math.max(...capex.map((i) => parseInt(i.id)), 0) + 1
    setCapex([...capex, { id: newId.toString(), name: 'New Item', amount: 0 }])
  }

  const addOpexItem = () => {
    const newId = Math.max(...opex.map((i) => parseInt(i.id)), 0) + 1
    setOpex([...opex, { id: newId.toString(), name: 'New Item', amount: 0 }])
  }

  const removeCapexItem = (id: string) => {
    setCapex(capex.filter((item) => item.id !== id))
  }

  const removeOpexItem = (id: string) => {
    setOpex(opex.filter((item) => item.id !== id))
  }

  const updateCapexName = (id: string, name: string) => {
    setCapex(capex.map((item) => (item.id === id ? { ...item, name } : item)))
  }

  const updateOpexName = (id: string, name: string) => {
    setOpex(opex.map((item) => (item.id === id ? { ...item, name } : item)))
  }

  const exportData = () => {
    const data = {
      projectDuration,
      capex: { items: capex, total: totalCapex },
      opex: { items: opex, total: totalOpex },
      summary: {
        totalCapex,
        totalOpex,
        totalProjectCost,
        averageAnnualCost,
      },
    }
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cost-calculation.json'
    a.click()
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Cost Calculator</h1>
              <p className="text-slate-600 mt-2">Calculate total project costs with CAPEX and OPEX breakdown</p>
            </div>
            <button
              onClick={exportData}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Export
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* CAPEX Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">CAPEX (Capital Expenditure)</h2>
                <div className="space-y-3 mb-4">
                  {capex.map((item) => (
                    <div key={item.id} className="flex gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateCapexName(item.id, e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-1"
                          placeholder="Item name"
                        />
                        <input
                          type="number"
                          value={item.amount}
                          onChange={(e) => handleCapexChange(item.id, parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Amount"
                        />
                      </div>
                      <button
                        onClick={() => removeCapexItem(item.id)}
                        className="text-red-600 hover:text-red-700 pt-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addCapexItem}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4"
                >
                  <Plus size={18} />
                  Add Item
                </button>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-slate-600">Total CAPEX</p>
                  <p className="text-2xl font-bold text-blue-600">${totalCapex.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* OPEX Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">OPEX (Operational Expenditure)</h2>
                <div className="space-y-3 mb-4">
                  {opex.map((item) => (
                    <div key={item.id} className="flex gap-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateOpexName(item.id, e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-1"
                          placeholder="Item name"
                        />
                        <input
                          type="number"
                          value={item.amount}
                          onChange={(e) => handleOpexChange(item.id, parseFloat(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                          placeholder="Annual amount"
                        />
                      </div>
                      <button
                        onClick={() => removeOpexItem(item.id)}
                        className="text-red-600 hover:text-red-700 pt-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={addOpexItem}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4"
                >
                  <Plus size={18} />
                  Add Item
                </button>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-slate-600">Annual OPEX</p>
                  <p className="text-2xl font-bold text-green-600">${totalOpex.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 border border-slate-200 h-full">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Calculator className="text-blue-600" />
                  Summary
                </h2>

                <div className="space-y-4">
                  {/* Project Duration */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Duration (Years)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={projectDuration}
                      onChange={(e) => setProjectDuration(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Metrics */}
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-slate-600">Total CAPEX</p>
                      <p className="text-2xl font-bold text-blue-600">${totalCapex.toLocaleString()}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-slate-600">Total OPEX ({projectDuration} yr{projectDuration > 1 ? 's' : ''})</p>
                      <p className="text-2xl font-bold text-green-600">${(totalOpex * projectDuration).toLocaleString()}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <p className="text-sm text-slate-600">Total Project Cost</p>
                      <p className="text-3xl font-bold text-purple-600">${totalProjectCost.toLocaleString()}</p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                      <p className="text-sm text-slate-600">Average Annual Cost</p>
                      <p className="text-2xl font-bold text-orange-600">
                        ${(totalProjectCost / projectDuration).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-900 mb-3">Cost Breakdown</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">CAPEX %</span>
                        <span className="font-semibold text-slate-900">
                          {totalProjectCost > 0 ? ((totalCapex / totalProjectCost) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">OPEX %</span>
                        <span className="font-semibold text-slate-900">
                          {totalProjectCost > 0 ? ((totalOpex * projectDuration / totalProjectCost) * 100).toFixed(1) : 0}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
