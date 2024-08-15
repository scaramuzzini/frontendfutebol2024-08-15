import axios from 'axios';
import { useEffect, useState } from 'react';
import AddTime from './AddTime';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function TimesList() {

    const [times,setTimes] = useState([]);

    const fetchTimes = async () => {
        const response = await axios
            .get('https://146d-191-165-254-55.ngrok-free.app/times'
                , {
                    headers: headers
                }
            );
        console.log(response.data);
        setTimes(response.data);
    };

    const handleTimeAdded = (novoTime) => {
        setTimes([...times, novoTime]);
    };

    useEffect(() => {
        fetchTimes();
    }, []);

    return (
        <>
            <h2>Tabela de Times</h2>
            <AddTime onTimeAdded={handleTimeAdded}/>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Time</th>
                        <th>Ano de Fundação</th>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time) => (
                        <tr key={time.id}>
                            <td>{time.id}</td>
                            <td>{time.nome}</td>
                            <td>{time.ano_fundacao}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </>
    );
}

export default TimesList;