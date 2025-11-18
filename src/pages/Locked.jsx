import Layout from '../components/Layout'
import { Lock } from 'lucide-react'

export default function Locked({ title, children }) {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto text-center">
        <Lock className="mx-auto mb-4" size={42} />
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-slate-300 mt-2">Dieser Bereich wird vorbereitet.</p>
        {children}
      </div>
    </Layout>
  )
}
