import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-10">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Willkommen auf meiner persönlichen Seite</h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Hier sammle ich alles, was mich bewegt: Reisen, Fahrzeuge, Technik, kreative Arbeiten und mehr. Der Fokus liegt aktuell auf meinen Reisen – weitere Bereiche folgen Schritt für Schritt.</p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <Link to="/reisen" className="group rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-600 transition">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Meine Reisen</h3>
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </div>
          <p className="mt-2 text-slate-400">Interaktive Karte, Timeline und Detailseiten.</p>
        </Link>

        {[{to:'/fahrzeuge',label:'Meine Fahrzeuge'},{to:'/ps-farbebild',label:'PS-Farbebild'},{to:'/technik',label:'Technische Specs'},{to:'/erfolge',label:'Achievements'},{to:'/projekte',label:'Weitere Projekte'}].map((i)=>(
          <div key={i.to} className="rounded-xl border border-slate-800 bg-slate-900 p-6 opacity-70">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{i.label}</h3>
              <Lock />
            </div>
            <p className="mt-2 text-slate-400">Wird vorbereitet</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}
