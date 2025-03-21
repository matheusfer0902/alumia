const faqItems = [
  {
    id: 1,
    question: "O que é o Alumia Laboratório?",
    answer:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Informação verificada: falsa. Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus.",
  },
  {
    id: 2,
    question: "Como posso um fato ou notícia para vocês checarem?",
    answer:
      "Habitant morbi tristique senectus et netus et malesuada. Informação verificada: falsa. Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus. <span class='bg-[#FFC31A] font-bold'>Miguezinho</span> para o texto parecer diferente.",
  },
  {
    id: 3,
    question: "Qual é a equipe que forma o projeto?",
    answer:
      "Informazione <span class='bg-[#FFC31A] font-bold'>verificadis falsificaedus</span>. Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus.",
  },
  {
    id: 4,
    question: "Por que não deixar o texto corrido preenchendo toda a largura da página?",
    answer:
      "Linhas de texto devem ter um comprimento máximo (geralmente entre 45 e 90 caracteres, incluindo espaços) para que a leitura não seja uma tortura. É um dos motivos de textos acadêmicos serem divididos em 2 colunas. Você não quer que alguém sofra lendo o seu site, né? Foi o que pensei…",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-light">Perguntas Frequentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((item) => (
            <div key={item.id}>
              <h3 className="text-xl sm:text-2xl font-bold">{item.question}</h3>
              <p
                className="text-base sm:text-lg mt-2 text-[#050505]"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
