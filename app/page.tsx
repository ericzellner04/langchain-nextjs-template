export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#333333]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 border-b">

        {/* Dropdown links */}
        <div>
          <select className="border px-3 py-2">
            <option>Menü</option>
            <option>Produktionen</option>
            <option>Über uns</option>
            <option>Kontakt</option>
          </select>
        </div>

        {/* Logo Mitte */}
        <div className="text-xl font-bold">
          DEIN LOGO
        </div>

        {/* Suche rechts */}
        <div>
          <input
            type="text"
            placeholder="Begriff suchen..."
            className="border px-3 py-2"
          />
        </div>

      </header>

      {/* SPRUCH */}
      <section className="text-center my-10">
        <h2 className="text-2xl font-semibold">
          HIER KOMMT DEIN SPRUCH HIN
        </h2>
      </section>

      {/* FILTER + SUCHE */}
      <section className="max-w-xl mx-auto">

        {/* Filter */}
        <div className="mb-4">
          <select className="w-full border px-3 py-2">
            <option>Filter auswählen</option>
            <option>Land</option>
            <option>Preis</option>
            <option>Kategorie</option>
          </select>
        </div>

        {/* Suchleiste */}
        <div>
          <input
            type="text"
            placeholder="Produktion suchen..."
            className="w-full border px-3 py-2"
          />
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="w-full bg-[#333333] text-white py-2">
            Suchen
          </button>
        </div>

      </section>

    </main>
  );
}
