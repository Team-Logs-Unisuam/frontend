import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(60);

    useEffect(() => {
        const tempo = setInterval(() => {
            if (contador > 0) {
                setContador((prevContador) => prevContador - 1);
            } else {
                setContador(60);
            }
        }, 1000);

        return () => {
            clearInterval(tempo);
        };
    }, [contador]); 


    return (
        <div>
            Próxima atualização em: {contador} segundos
        </div>
    );
};

export default Contador;
