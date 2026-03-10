import Image from "next/image";
import ChecagensColunm from "@/components/checagensColumn";

export default function Institutional() {

  return (   
    <div className="container my-10 mx-auto flex flex-col lg:flex-row font-sans antialiased">

      <div className="lg:w-2/3 px-10 space-y-6 text-[1.375rem] ">
        
        <h1 className="text-3xl font-bold">QUEM SOMOS</h1>

        <div className="relative w-full h-56 sm:h-64 md:h-[350px] cursor-pointer">
          <Image 
          src={'/institucional1.svg'} 
          alt={'/institucional1.svg'} 
          fill
          style={{objectFit: "cover"}}
          className="rounded-md"
          />
        </div>
          

        <p>
        Alumia é um laboratório dedicado ao combate à desinformação.
        É formado por pesquisadores, jornalistas, docentes e discentes da Universidade Federal da Paraíba (UFPB) 
        das áreas de jornalismo, mídias digitais, radialismo, relações públicas e informática.
        </p>

        <p>
        Busca-se, com esta iniciativa, proporcionar ao município de João Pessoa-PB uma experiência educativa e inovadora, 
        que conecte a população com as plataformas de identificação e checagem de conteúdos falsos e desinformativos. 
        </p>

        <p>
        O laboratório desenvolve suas atividades em duas frentes: combativa e educativa. 
        Assim, realiza serviços de fact-checking por meio de uma metodologia transparente e apartidária, 
        buscando contribuir com a circulação de informação segura. Em paralelo, colabora com a 
        educação midiática para a sociedade, promovendo uma rede de informações para enfrentar o fenômeno da desinformação.
        </p>

        <p>
        Além disso, integra inovações tecnológicas em suas abordagens, utilizando ferramentas avançadas 
        para otimizar a verificação de fatos e facilitar o acesso à informação. 
        O laboratório realiza a análise de informações em suspeição, preferencialmente relacionadas 
        ao território pessoense ou que envolvam diretamente pessoas e organizações desta cidade e região. 
        </p>

        <p>
        Quanto aos objetivos, visa desenvolver e validar ferramentas tecnológicas para monitorar e detectar 
        o alto engajamento de notícias e conteúdos midiáticos em portais, redes sociais e outros, além de apoiar 
        a avaliação da veracidade de informações amplamente divulgadas. Também realiza programas de capacitação voltados 
        a jornalistas, pesquisadores, estudantes de comunicação e tecnologia, educadores e alunos do ensino médio, focando 
        no combate às fake news e deepfakes.
        </p>

        <p>
        O financiamento do laboratório é misto, realizado por recursos financeiros externos via edital nº 010/2024 da 
        Agência de Inovação Tecnológica de João Pessoa - INOVATEC - JP, Secretaria de Ciência e Tecnologia e da 
        Secretaria de comunicação da Prefeitura de João Pessoa, além de contar com a estrutura física e de pesquisadores, 
        docentes e discentes da própria UFPB. 
        </p>

        <p>
        As entidades parceiras do Alumia são:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Aletheia - Plataforma e movimento para a democratização do fact-checking</li>
          <li>Associação Paraibana de Imprensa – API</li>
          <li>Associação de Mídia Digital – AMIDI</li>
          <li>Rede Nacional de Combate à Desinformação – RNCD</li>
        </ul>

        <h1 className="text-3xl font-bold">CONHEÇA O ALUMIA</h1>
        <p>
          O Alumia é sediado em João Pessoa, 
          no Centro de Comunicação Turismo e Artes, da Universidade Federal da Paraíba.
          O laboratório funciona a partir de cinco frentes, sendo estas:
        </p>
        <ul className="list-disc list-inside space-y-1">
            <li>Coordenação Geral</li>
            <li>Coordenação Executiva</li>
            <li>Coordenação de Jornalismo</li>
            <li>Coordenação de Tecnologia</li>
            <li>Coordenação de Capacitação</li>
        </ul>

        <p>Contatos</p>
        <ul className="list-disc list-inside space-y-1">
            <li><span className="font-bold">WhatsApp: </span>(83) 98797-2930</li>
            <li><a href="https://www.instagram.com/alumia.laboratorio"><span className="font-bold">Instagram:</span>@alumia.laboratorio</a></li>
        </ul>
      </div>



      <div className="lg:w-1/3">
        <ChecagensColunm />
      </div>
          
    </div>
  );

}