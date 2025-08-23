export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} wes.dev</span>
        <a href="https://github.com/Wes2024" className="hover:underline">GitHub</a>
      </div>
    </footer>
  );
}
