import { useEffect, useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
}
function EditTime({time, onTimeUpdated}) {
    const [nome,setNome] = useState('');


    useEffect(() => {
        if(time) {
            setNome(time.nome)
        }
    }, [time])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('time',time);
        const editedTime = {
            nome
        };

        try {
            const response = await axios.put(
                `https://146d-191-165-254-55.ngrok-free.app/times/${time.id}`,
                editedTime,
                {
                    headers:headers
                }
            );
            console.log(response);
            setNome('');
            onTimeUpdated(response.data);
        } catch(error) {
            console.error('Falha ao editar o time:' + error);
        }


    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} ></input>
                <button type="submit">Editar time</button>
            </form>
        </>
    )
}

export default EditTime;