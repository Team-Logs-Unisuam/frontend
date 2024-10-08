const pegarCor = (quantidade) => {
    switch (true) {
        case (quantidade > 1000):
            return 'maisdemil';
        case (quantidade >= 500):
            return 'quinhentosAmil';
        case (quantidade >= 50):
            return 'cinquentaA500';
        case (quantidade > 0):
            return 'umA50';
        default:
            return 'zerado';
    }
};

const Dados = ({ subtitulo, quantidade }) => {
    const cor = pegarCor(quantidade);

    return (
        <div className={`${cor} rounded shadow-md py-4 mx-1`}>
            <h2 className="text-center text-gray-500 font-bold">
                {subtitulo}
            </h2>
            <p className="text-center font-extrabold">
                {quantidade}
            </p>
        </div>
    );
};

export default Dados;
