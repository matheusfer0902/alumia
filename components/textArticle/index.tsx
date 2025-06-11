const TextComponent = ({ content }: any) => {
  return (
    <div className="container mx-auto p-6">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* <blockquote className="border-l-4 border-[#FFC31A] pl-4 italic mt-6 text-lg font-semibold mb-4">
        “Pessoal, atenção! O Uber de placa PBN 7D10 de nome Silvino é um ladrão sequestrador. Obriga a vítima a fazer pix e leva o celular, ele está armado! Vamos compartilhar. Boa noite, pessoal, compartilhar em grupos para todos ficarem atentos.”
      </blockquote> */}
    </div>
  );
};

export default TextComponent;