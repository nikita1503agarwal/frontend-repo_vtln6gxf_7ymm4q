import { Link, NavLink } from 'react-router-dom'
import { Globe2, Car, Palette, Wrench, Trophy, Boxes, Lock } from 'lucide-react'

const navItems = [
  { to: '/reisen', label: 'Meine Reisen', icon: Globe2, active: true },
  { to: '/fahrzeuge', label: 'Meine Fahrzeuge', icon: Car, locked: true },
  { to: '/ps-farbebild', label: 'PS-Farbebild', icon: Palette, locked: true },
  { to: '/technik', label: 'Technische Specs', icon: Wrench, locked: true },
  { to: '/erfolge', label: 'Achievements', icon: Trophy, locked: true },
  { to: '/projekte', label: 'Projekte', icon: Boxes, locked: true },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold tracking-tight text-lg">Persönliche Seite</Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            if (item.locked) {
              return (
                <div key={item.to} className="group px-3 py-2 rounded-lg text-slate-400/70 border border-slate-800/60 flex items-center gap-2 cursor-not-allowed">
                  <Icon size={18} />
                  <span>{item.label}</span>
                  <Lock size={16} className="opacity-70" />
                </div>
              )
            }
            return (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `px-3 py-2 rounded-lg flex items-center gap-2 ${isActive ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-slate-800'}`}>
                <Icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
