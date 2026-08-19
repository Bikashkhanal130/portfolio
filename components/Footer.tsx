export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>© {year} Bikash Khanal. All rights reserved.</p>
        <a href="#top" className="hover:text-accent transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  );
}
