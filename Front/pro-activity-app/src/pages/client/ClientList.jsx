import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';

const clients = [
    {
        id: 1,
        name: 'Microsoft',
        responsable: 'Pedro 0',
        contate: '81999999999',
        situation: 'Ativo'
    },
    {
        id: 2,
        name: 'Apple',
        responsable: 'Pedro 1',
        contate: '81999999999',
        situation: 'Inativo'
    },
    {
        id: 3,
        name: 'Amazon',
        responsable: 'Pedro 2',
        contate: '81999999999',
        situation: 'Em Analise'
    },
    {
        id: 4,
        name: 'Google',
        responsable: 'Pedro 3',
        contate: '81999999999',
        situation: 'Ativo'
    }
]

export default function ClientList() {
    const [termSearch, setTermSearch] = useState('');
    const history = useHistory();

    const handleInputChange = (e) => {
        setTermSearch(e.target.value);
    };

    const clientsFilter = clients.filter((client) => {
        return (
            //client.name.toLocaleLowerCase().indexOf(termSearch) !== -1
            Object.values(client).join(' ').toLowerCase().includes(termSearch.toLowerCase())
        )
    });

    const newClient = () => {
        history.push('/client/detail');
    };

    return (
        <>

            <TitlePage title='Cliente Lista' >
                <Button variant='outline-primary' onClick={newClient}>
                    <i className='fa fa-user-plus me-2'></i>
                    Novo Cliente
                </Button>
            </TitlePage>
            <InputGroup className="mt-2 mb-3">
                <InputGroup.Text>Buscar: </InputGroup.Text>
                <FormControl
                    onChange={handleInputChange}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <table className="table table-striped table-hover">
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Contate</th>
                        <th scope="col">Situation</th>
                        <th scope='col'>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {clientsFilter.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.responsable}</td>
                            <td>{client.contate}</td>
                            <td>{client.situation}</td>
                            <td>
                                <div className='btn btn-sm btn-outline-info me-1' onClick={() => history.push(
                                    `/client/detail/${client.id}`
                                )}><i className='fas fa-user-edit me-2'></i> Editar</div>
                                <div className='btn btn-sm btn-outline-danger'><i className='fa-solid fa-toggle-off me-2'></i> Desativar</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
