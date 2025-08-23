export default function Projects() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        <li className="border rounded-2xl p-4">
          <h3 className="font-semibold">Portfolio v1</h3>
          <p className="text-sm text-muted-foreground">
            Next.js + TypeScript + Tailwind.
          </p>
        </li>
        <li className="border rounded-2xl p-4">
          <h3 className="font-semibold">Landing HTML</h3>
          <p className="text-sm text-muted-foreground">
            /html-basics/index.html
          </p>
        </li>
      </ul>
    </main>
  );
}
