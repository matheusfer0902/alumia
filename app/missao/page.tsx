// import Image from "next/image";
import ChecagensColunm from "@/components/checagensColumn";

export default function MissaoPage() {

  return (   
    <div className="container my-10 mx-auto flex flex-col lg:flex-row font-sans antialiased">

      <div className="cursor-pointer lg:w-2/3 px-10 space-y-6 text-[1.375rem] ">
        
        <h1 className="text-3xl font-bold">MISSÃO</h1>

        <p>
        Promover uma cultura de enfrentamento à desinformação por meio da checagem de fatos, da pesquisa, da educação midiática e da inovação tecnológica.
        </p>

        <h1 className="text-3xl font-bold">VISÃO</h1>
        <p>
        Tornar-se uma referência acadêmica no enfrentamento à desinformação, reconhecida pela sociedade como uma autoridade em checagem de fatos, 
        além de impulsionar a educação e a inovação tecnológica em prol de uma informação segura e acessível, 
        como um direito fundamental em uma sociedade democrática.
        </p>

        <h1 className="text-3xl font-bold">VALORES</h1>
        <ul className="list-disc list-inside space-y-1">
          <li>Responsabilidade</li>
          <li>Transparência</li>
          <li>Apartidarismo</li>
          <li>Acessibilidade</li>
          <li>Inovação Tecnológica</li>
          <li>Educação Midiática</li>
        </ul>

      </div>

      <div className="lg:w-1/3">
        <ChecagensColunm />
      </div>
          
    </div>
  );

}