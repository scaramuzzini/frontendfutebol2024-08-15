import axios from 'axios';
import { useEffect, useState } from 'react';

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
    }

    useEffect(() => {
        fetchTimes();
    }, []);

    return (
        <>
            <h2>Tabela de Times</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Time</th>
                    </tr>
                </thead>
                <tbody>
                    {times.map((time) => (
                        <tr>
                            <td>{time.id}</td>
                            <td>{time.nome}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </>
    );
}

export default TimesList;