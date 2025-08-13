"use client";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <section>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Shinobi</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '3rem' }}>
          Welcome to Shinobi. The blog for web developers and ninjas.
        </p>
      </section>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/blog">
          <Button variant="primary" className="text-lg px-8 py-4">
            Visit Blog
          </Button>
        </Link>
        
        <Link href="/preview">
          <Button variant="secondary" className="text-lg px-8 py-4">
            Preview Components
          </Button>
        </Link>
      </div>
    </div>
  );
}
