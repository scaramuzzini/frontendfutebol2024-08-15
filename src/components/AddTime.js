import { useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
}
function AddTime({onTimeAdded}) {
    const [nome,setNome] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoTime = {
            nome
        };

        try {
            const response = await axios.post(
                'https://146d-191-165-254-55.ngrok-free.app/times',
                novoTime,
                {
                    headers:headers
                }
            );
            console.log(response);
            setNome('');
            onTimeAdded(response.data);
        } catch(error) {
            console.error('Falha ao criar novo time:'+error);
        }


    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} ></input>
                <button type="submit">Adicionar time</button>
            </form>
        </>
    )
}

export default AddTime;