import React from 'react'
import { BarChart3, Users, TrendingUp, Zap } from 'lucide-react'
import Sidebar from './Sidebar'
import StatCard from './StatCard'
import QuickAction from './QuickAction'
import PortfolioOverview from './PortfolioOverview'
import RecentActivity from './RecentActivity'

export default function Dashboard() {
  const stats = [
    {
      label: 'Case Studies',
      value: '5',
      change: '+12%',
      icon: BarChart3,
    },
    {
      label: 'Responses Generated',
      value: '47',
      change: '+23%',
      icon: Zap,
      period: 'This month',
    },
    {
      label: 'Avg. Response Time',
      value: '1.8 min',
      icon: TrendingUp,
      period: 'Per question',
    },
    {
      label: 'Win Rate',
      value: '68%',
      change: '+8%',
      icon: Users,
      period: 'Last quarter',
    },
  ]

  const recentActivityItems = [
    {
      type: 'Response generated',
      description: 'Network Rail RFP Q12',
      time: '2 hours ago',
    },
    {
      type: 'Case study added',
      description: 'Manchester Metro Extension',
      time: '5 hours ago',
    },
    {
      type: 'Bid submitted',
      description: 'Thames Water Framework',
      time: '1 day ago',
    },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome back</h1>
            <p className="text-slate-600">Your bid response command center</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Quick Actions and Portfolio */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <QuickAction
                  title="Generate Response"
                  description="AI-powered responses tailored to your bid questions"
                  icon="Zap"
                />
                <QuickAction
                  title="Add Case Study"
                  description="Expand your knowledge base with new project evidence"
                  icon="Plus"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Portfolio Overview</h2>
              <PortfolioOverview />
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Recent Activity</h2>
            <RecentActivity items={recentActivityItems} />
          </div>
        </div>
      </main>
    </div>
  )
}
