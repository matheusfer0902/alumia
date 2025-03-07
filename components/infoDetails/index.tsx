import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
  isTrue: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ isTrue }) => {
  const imageSrc = isTrue ? '/infoTrue.png' : '/infoFalse.svg';
  const altText = isTrue ? 'Informação Verdadeira' : 'Informação Falsa';

  return (
    <div className="flex justify-center mt-6">
      <Image
        src={imageSrc}
        alt={altText}
        width={500} 
        height={300} 
      />
    </div>
  );
};

export default ImageComponent;