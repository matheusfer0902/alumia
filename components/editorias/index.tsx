export default function Editorias() {
  const categorias = ["Meio Ambiente", "Política", "Saúde", "Zap Notícias"];

  return (
    <section className="w-full py-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4">Editorias</h2>
        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria, index) => (
            <span
              key={index}
              className="bg-[#FFC31A] text-[#050505] text-lg sm:text-2xl font-bold"
            >
              {categoria}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
