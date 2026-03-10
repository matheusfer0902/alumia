import Image from "next/image";
import ChecagensColunm from "@/components/checagensColumn";

export default function Metodologia() {

  return (   
    <div className="container my-10 mx-auto flex flex-col lg:flex-row font-sans antialiased">

      <div className="lg:w-2/3 px-10 space-y-6 text-[1.375rem] ">
        
        <h1 className="text-3xl font-bold">Como funcionam as nossas checagens</h1>

        <div className="relative w-full h-56 sm:h-64 md:h-[350px] cursor-pointer">
          <Image 
          src={'/institucional1.svg'} 
          alt={'/institucional1.svg'} 
          fill
          style={{objectFit: "cover"}}
          className="rounded-md"
          />
        </div>
          

        <p className="font-bold">
        O processo de checagem é realizado em três etapas: 
        </p>

        <p>
        <span className="font-bold">Pré-checagem: </span> Esse processo se constrói a partir do monitoramento interno, com reuniões de pautas da equipe,
        e externo, com demandas enviadas pelo público aos contatos do projeto.
        Em seguida, a equipe traça um caminho investigativo. 
        </p>

        <p>
        <span className="font-bold">Checagem:</span> Um checador é designado para apurar as informações a partir de diversas frentes.
        Esse responsável inicial entra em contato com as fontes, com o objetivo de levantar dados, realizar entrevistas e etiquetar a checagem.
        As etiquetas utilizadas seguem o Manual de Checagem da Aletheia/Alumia:  
        </p>

        <ul className="[&_li]:before:content-['-'] [&_li]:before:mr-3 list-none pl-0 ml-5">
            <li>Confiável</li> 
            <li>Falso</li>
            <li>Não é fato</li> 
            <li>Confiável, mas</li>
            <li>Discutível</li>
            <li>Enganoso</li>
            <li>Insustentável</li>
            <li>Exagerado</li>
            <li>Inverificável</li>
        </ul>


        <p>
        <span className="font-bold">Pós-checagem:</span> Essa etapa marca a fase de verificação cruzada das informações.
        O relatório produzido por um checador inicial é repassado para a equipe de revisores, que revisita as fontes utilizadas no processo investigativo.
        Por fim, a etiqueta é mantida ou reformulada, a partir de uma segunda apuração feita pelo revisor.
        </p>

      </div>



      <div className="lg:w-1/3">
        <ChecagensColunm />
      </div>
          
    </div>
  );

}