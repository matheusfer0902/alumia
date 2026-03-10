'use client';

import Navbar from '@/components/shared/navbar';

export default function Custom404() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
      </div>
    </>
  );
}