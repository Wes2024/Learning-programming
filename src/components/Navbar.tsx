export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg">wes.dev</a>
        <ul className="flex items-center gap-6 text-sm">
          <li><a href="/projects" className="hover:underline">Projects</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
