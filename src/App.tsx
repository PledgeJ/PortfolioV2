import './App.css'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl border border-zinc-800 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-sky-400">
          Vite + React + TS
        </h1>
        <p className="mt-2 text-zinc-400">
          Successfully running Tailwind CSS v4!
        </p>
        <button className="mt-6 rounded-lg bg-sky-500 px-4 py-2 font-semibold text-zinc-950 hover:bg-sky-400 transition-colors">
          Let's Build
        </button>
      </div>
    </div>
  )
}

export default App
