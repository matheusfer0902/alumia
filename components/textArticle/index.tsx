'use client';
import parse, { DOMNode } from 'html-react-parser';

interface TextComponentProps {
  content: string;
}

const TextComponent = ({ content }: TextComponentProps) => {

  const options = {

    replace(domNode: DOMNode) {

      if (domNode.type == 'tag') {
        // const el = domNode as Element;
        
        // if (el.name == 'img') {
        //   return(
        //     <img
        //       src={el.attribs.src}
        //       alt={el.attribs.alt || ''}
        //       className="rounded w-[100%] object-cover aspect-video block mx-auto"
        //     />
        //   )
        // }

        //  if (el.name === 'p') {
        //   return (
        //     <p>
        //       {domToReact(el.children as any, options)}
        //     </p>
        //   );
        // }
        

      }

    }

  }
  // return (
  //   <div className="container mx-auto p-6">
  //     <div dangerouslySetInnerHTML={{ __html: content }} />
  //     {/* <blockquote className="border-l-4 border-[#FFC31A] pl-4 italic mt-6 text-lg font-semibold mb-4">
  //       “Pessoal, atenção! O Uber de placa PBN 7D10 de nome Silvino é um ladrão sequestrador. Obriga a vítima a fazer pix e leva o celular, ele está armado! Vamos compartilhar. Boa noite, pessoal, compartilhar em grupos para todos ficarem atentos.”
  //     </blockquote> */}
  //   </div>
  // );

  return (
    <div className="container mx-auto py-3 space-y-5 text-xl">
      {parse(content, options)}
    </div>
  );
};

export default TextComponent;