export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Desarrollador web en formación — serio y rápido
      </h1>
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
        HTML/CSS/JS · PrestaShop · Laravel · React + TypeScript
      </p>
      <div className="mt-8 flex gap-4 justify-center">
        <a href="/projects" className="px-4 py-2 rounded-xl border">Ver proyectos</a>
        <a href="/contact" className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">Contacto</a>
      </div>
    </section>
  );
}
