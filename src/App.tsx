import { Navbar, Hero, Features, Pricing, CTA, Footer } from './components';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'About', href: '#about' },
];

function App() {
  return (
    <div className="min-h-screen">
      <Navbar links={navLinks} />
      <Hero />
      <Features />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
