import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50 text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="mt-20 py-8 border-t border-slate-200/80 text-center text-slate-500">
        © {new Date().getFullYear()} – Persönliche Seite
      </footer>
    </div>
  )
}
