import ChecagensColunm from "@/components/checagensColumn";

interface InfoPageProps {
  title?: string;
  info?: string;
}

export default function infoPage(data: InfoPageProps) {

  return (   
    <div className="container my-10 mx-auto flex flex-col lg:flex-row font-sans antialiased">

      <div className="cursor-pointer lg:w-2/3 px-10 space-y-6 text-[1.375rem] ">
        
        <h1 className="text-3xl font-bold">{data.title}</h1>

        <p>{data.info}</p>

      </div>

      <div className="lg:w-1/3">
        <ChecagensColunm />
      </div>
          
    </div>
  );

}