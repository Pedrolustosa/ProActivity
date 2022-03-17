import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';

const clients = [
    {
        id: 1,
        name: 'Microsoft',
        responsable: 'Pedro 0',
        contate: '81999999999',
        situation: 'Active'
    },
    {
        id: 2,
        name: 'Apple',
        responsable: 'Pedro 1',
        contate: '81999999999',
        situation: 'Inactive'
    },
    {
        id: 3,
        name: 'Amazon',
        responsable: 'Pedro 2',
        contate: '81999999999',
        situation: 'Inactive'
    },
    {
        id: 4,
        name: 'Google',
        responsable: 'Pedro 3',
        contate: '81999999999',
        situation: 'Active'
    }
]

export default function ClientList() {
    return (
        <>

            <TitlePage title='Cliente Lista' />
            <InputGroup className="mt-2 mb-3">
                <InputGroup.Text>Buscar: </InputGroup.Text>
                <FormControl
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
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.responsable}</td>
                            <td>{client.contate}</td>
                            <td>{client.situation}</td>
                            <td>
                                <div className='btn btn-sm btn-outline-info me-1'><i className='fas far-user-edit me-2'></i> Editar</div>
                                <div className='btn btn-sm btn-outline-danger'><i className='fa-solid fa-toggle-off me-2'></i> Desativar</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
