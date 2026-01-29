export function Footer() {
  return (
    <footer className="py-20 border-t border-black/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 font-bold uppercase tracking-widest text-xs text-center md:text-left">
        <div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter text-black mb-4 justify-center md:justify-start">
            <span>STARTER</span>
          </div>
          <p className="opacity-50">© 2026 MK-STARTER // DEPLOYMENT OS</p>
        </div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
