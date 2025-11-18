import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { ArrowRight, Lock, Bike, Compass, Camera, Cpu } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-sky-100 to-amber-100 border border-slate-200 p-10">
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-sky-300/30 rounded-full blur-3xl" />
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Abenteuer. Motoren. Technik.
          </h1>
          <p className="mt-4 text-slate-700 max-w-2xl">
            Ich sammle hier meine Touren, Fahrzeuge und Technik‑Spielereien – von Reisen mit Drohne & Kamera
            bis hin zu nerdigen Setups. Aktuell ist die Reise‑Sektion freigeschaltet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-slate-700">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200"><Compass size={16}/>Outdoor & Reisen</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200"><Bike size={16}/>Motorrad</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200"><Camera size={16}/>Kamera & Drohne</span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200"><Cpu size={16}/>Tech & Audio</span>
          </div>
          <div className="mt-8">
            <Link to="/reisen" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
              Reisebereich ansehen <ArrowRight className="translate-x-0 group-hover:translate-x-1 transition"/>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Link to="/reisen" className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-emerald-400/80 transition shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Meine Reisen</h3>
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </div>
          <p className="mt-2 text-slate-600">Interaktive Karte, Timeline und Details.</p>
        </Link>

        {[{to:'/fahrzeuge',label:'Fahrzeuge'},{to:'/ps-farbebild',label:'PS-Farbebild'},{to:'/technik',label:'Tech Specs'},{to:'/erfolge',label:'Achievements'},{to:'/projekte',label:'Projekte'}].map((i)=>(
          <div key={i.to} className="rounded-xl border border-slate-200 bg-white p-6 opacity-90">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{i.label}</h3>
              <Lock />
            </div>
            <p className="mt-2 text-slate-600">Wird vorbereitet</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}
