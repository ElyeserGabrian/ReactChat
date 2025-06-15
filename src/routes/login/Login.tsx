import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import "./loginStyle.css";


export default function Login() {
    const [names, setNames] = useState([]);
    const [errorMessage, setErrorMessages] = useState('');

    const navegate = useNavigate();

    async function addNames(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);


        const name1 = formData.get('name1')!
        const name2 = formData.get('name2')!


        const namesExist = JSON.parse(localStorage.getItem('names'));

        console.log(namesExist)

        

        if (name1 !== '' && name2 !== '') {

            const newNames = { name1, name2};
            const updateName = [...names, newNames];
            
            setNames(updateName);

            console.log(updateName)
            
            localStorage.setItem('names', JSON.stringify(updateName))    

            form.reset();
            setErrorMessages('');

            navegate('/chat');
        } else {
            setErrorMessages('Por favor, adicione os dois nome!')
        }
    }


    return (
        <main className='main'>
                <form
                    onSubmit={addNames}
                    method='get'
                    className='container'
                >
                        <div id='inputs'>
                            <div>
                            <label htmlFor="name1"> Adicione o Primeiro Nome</label>
                            <input type="text" name="name1" id="name1" className="input-name" />
                            </div>

                            <div>
                            <label htmlFor="name2">Adicione o segundo Nome</label>
                            <input type="text" name="name2" id="name2" className="input-name" />

                            </div>

                        </div>
                        <button type="submit" className='btn-enviar' >
                           Entrar
                        </button>


                        <div className='msgError'>
                           {errorMessage} 
                        </div>
                        

                </form>
        </main>
    )
}