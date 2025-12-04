import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Stripe-style Navbar — Demo</h1>
        <p className="text-slate-600">Hover the "Solutions" menu on desktop to see the mega menu. On mobile, open the hamburger and tap Solutions.</p>
      </main>
    </div>
  );
}

export default App;
