import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="mt-20 py-8 border-t border-slate-800/60 text-center text-slate-400">
        © {new Date().getFullYear()} – Persönliche Seite
      </footer>
    </div>
  )
}
