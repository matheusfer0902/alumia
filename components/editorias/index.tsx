export default function Editorias() {
    const categorias = ["Meio Ambiente", "Política", "Saúde", "Zap Notícias"];
  
    return (
      <section className="w-full py-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light mb-4">Editorias</h2>
          <div className="flex space-x-2">
            {categorias.map((categoria, index) => (
              <span key={index} className="bg-[#FFC31A] text-[#050505] text-2xl font-bold">
                {categoria}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  