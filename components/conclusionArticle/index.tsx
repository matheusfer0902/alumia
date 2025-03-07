import React from 'react';

const VerificationComponent = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">O que verificamos?</h2>
      <p className="text-lg mb-4">
        Vivamus tincidunt velit ut erat dignissim efficitur. Cras porttitor justo at velit tincidunt, ac molestie arcu sodales. Sed vitae magna <strong>eget justo blandit facilisis</strong>. Etiam dictum elit eget lacus fringilla, sed varius mi pulvinar. Nunc sit amet mi ut purus elementum fermentum. Vivamus varius magna et elit porta varius. Mauris id augue ac ante varius ultrices.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Conclusão</h2>
      <p className="text-lg mb-4">
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Informação verificada: <strong>falsa</strong>. Quisque lobortis urna sed orci vehicula, vel gravida lorem tempus. Nam sollicitudin mauris in elit consectetur, non laoreet sem tristique.
      </p>
    </div>
  );
};

export default VerificationComponent;