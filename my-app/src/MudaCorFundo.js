import React, {useState} from "react";

const MudaCorFundo = () => {
    const [corFundo, setCorFundo] = useState('#ffffff');
    const getCorAleatoria = () => {
        const caracteresCores = '0123456789ABCDEF';
        let cor = '#';
        for (let i = 0; i <6; i++) {
            cor += caracteresCores[Math.floor(Math.random()*16)];
        }
        return cor;
    }

    const mudaCor = () => {
        setCorFundo(getCorAleatoria());
    };

    return (
        <div>
            <h1 style={{backgroundColor: corFundo}}>Hello, World!</h1>
            <button onClick={mudaCor}>Mudar cor de fundo</button>
        </div>
    );
};

export default MudaCorFundo;