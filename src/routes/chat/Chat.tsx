import { useState, useEffect, useRef } from 'react';

import './Chat.css';

export default function Chat() {
    const [lastName, setLastName] = useState(null);

    const [mensagem, setMensagem] = useState([]);
    const [input, setInput] = useState('');

    const endRef = useRef<HTMLDivElement>(null);


    const horaAtual = new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });


    const enviarMensagem = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (input.trim() === '') { return }

        setMensagem([...mensagem, input]);
        setInput('');
    }


    useEffect(() => {
        const names = JSON.parse(localStorage.getItem('names')!) || [];
        if (names.length > 0) {
            setLastName(names[names.length - 1]);
        }
    }, []);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [mensagem]);





    return (
        <main className="main">
            <div className="conteudo">

                <div className="caixa-mensagem">
                    <div className="mensagens">
                        <div>

                        </div>
                        <div className="msg-branca">
                            <p> {lastName?.name1} </p>
                            <p>Olá Tudo bem</p>
                            <p className="hora">12:30</p>
                        </div>

                        {mensagem.map((msg, index) => (
                            <div className="msg-azul" >
                                <p>{lastName?.name2}</p>
                                <p key={index} > {msg} </p>
                                <p className="hora"> {horaAtual}</p>
                            </div>
                        ))}

                        <div ref={endRef}></div>
                    </div>
                </div>
                <form onSubmit={enviarMensagem} className="caixa-inputs">

                    <div className="inputs">
                        <input type="text"
                            name="textoMsg" id="textoMsg"
                            className="ipt-texto"
                            placeholder="Digite uma mensagem..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <button type="submit" className="btn-enviar">Enviar</button>
                    </div>
                </form>

            </div >
        </main >
    )
}