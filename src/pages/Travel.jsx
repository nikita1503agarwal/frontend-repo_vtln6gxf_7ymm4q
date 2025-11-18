import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/Layout'
import WorldMap from '../components/WorldMap'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Travel() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeCountry, setActiveCountry] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        // try to fetch; if empty, seed then refetch
        let res = await fetch(`${API}/api/trips`)
        let data = await res.json()
        if (!data.items || data.items.length === 0) {
          await fetch(`${API}/api/seed`, { method: 'POST' })
          res = await fetch(`${API}/api/trips`)
          data = await res.json()
        }
        setTrips(data.items || [])
      } catch (e) {
        setError('Konnte Reisen nicht laden.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const visitedCountries = useMemo(() => {
    const set = new Set()
    trips.forEach((t) => (t.locations || []).forEach((l) => l.country_code && set.add(l.country_code)))
    return set
  }, [trips])

  const tripsByCountry = useMemo(() => {
    const map = {}
    trips.forEach((t) => {
      (t.locations || []).forEach((l) => {
        if (!map[l.country_code]) map[l.country_code] = []
        map[l.country_code].push(t)
      })
    })
    return map
  }, [trips])

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Meine Reisen</h1>
        <p className="text-slate-300">Klicke auf ein farbiges Land, um Reisen zu sehen. Grau = noch unbesucht.</p>
      </div>

      {loading ? (
        <p>Lade Karte…</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WorldMap visited={visitedCountries} onCountryClick={(id) => setActiveCountry(id)} />
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 p-4 bg-slate-900/60">
              <h3 className="font-semibold mb-2">Reiseübersicht</h3>
              {!activeCountry ? (
                <p className="text-slate-400">Wähle ein Land auf der Karte, um Reisen zu sehen.</p>
              ) : (
                <div className="space-y-3">
                  {(tripsByCountry[activeCountry] || []).map((t) => (
                    <div key={t.id} className="border border-slate-800 rounded-lg p-3 bg-slate-900">
                      <div className="font-medium">{t.title}</div>
                      <div className="text-sm text-slate-400">{t.date_text}</div>
                      <details className="mt-2">
                        <summary className="cursor-pointer text-blue-300">Details</summary>
                        <div className="text-sm text-slate-300 mt-2 whitespace-pre-line">{t.description}</div>
                        {t.people?.length > 0 && (
                          <div className="text-sm text-slate-400 mt-1">Personen: {t.people.join(', ')}</div>
                        )}
                        {t.photo_placeholders?.length > 0 && (
                          <div className="mt-2">
                            <div className="text-xs uppercase tracking-wide text-slate-400">Fotos (Platzhalter):</div>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {t.photo_placeholders.map((p, idx) => (
                                <div key={idx} className="text-xs px-2 py-1 bg-slate-800 rounded border border-slate-700">[{p}]</div>
                              ))}
                            </div>
                          </div>
                        )}
                        {t.video_urls?.length > 0 && (
                          <div className="mt-3 space-y-2">
                            <div className="text-xs uppercase tracking-wide text-slate-400">Videos:</div>
                            {t.video_urls.map((v, idx) => (
                              <div key={idx} className="aspect-video w-full">
                                <iframe className="w-full h-full rounded border border-slate-800" src={v.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')} title={`video-${idx}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                              </div>
                            ))}
                          </div>
                        )}
                      </details>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-xl border border-slate-800 p-4 bg-slate-900/60">
              <h3 className="font-semibold mb-2">Timeline</h3>
              <div className="space-y-3 max-h-[50vh] overflow-auto pr-2">
                {trips.map((t) => (
                  <div key={t.id} className="border-l-2 border-blue-600 pl-3">
                    <div className="text-sm text-slate-400">{t.date_text}</div>
                    <div className="font-medium">{t.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
