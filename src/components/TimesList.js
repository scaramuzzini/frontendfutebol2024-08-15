import axios from 'axios';
import { useEffect, useState } from 'react';
import AddTime from './AddTime';
import EditTime from './EditTime';
import { toast } from 'sonner'
const headers = {
    "ngrok-skip-browser-warning": "123"
}

function TimesList() {

    const [times,setTimes] = useState([]);
    const [editTime, setEditTime] = useState(null);

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


    // deletar um time
    const handleDelete = async (time) => {
        const response = await axios
        .delete(`https://146d-191-165-254-55.ngrok-free.app/times/${time.id}`
            , {
                headers: headers
            }
        );
        toast.info(`Time ${time.nome} deletado`) 
        console.log(response.data);
        fetchTimes();
    }
    

    const handleEdit = (time) => {
        setEditTime(time)
    }


    useEffect(() => {
        fetchTimes();
    }, []);

    return (
        <>
            <h2>Tabela de Times</h2>

            { editTime ? (
                <EditTime onTimeUpdated={handleTimeAdded} time={editTime}/>
            ) : (
                <AddTime onTimeAdded={handleTimeAdded}/>
            )}


                {/* <EditTime onTimeUpdated={handleTimeAdded} time={editTime}/>
             */}
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
                            <td>
                                <button onClick={() => handleEdit(time)}>Editar</button>
                                <button onClick={() => handleDelete(time)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </>
    );
}

export default TimesList;