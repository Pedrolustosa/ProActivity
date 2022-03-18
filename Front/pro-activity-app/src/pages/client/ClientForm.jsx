import React from 'react'
import { Button } from 'react-bootstrap';
import TitlePage from './../../components/TitlePage';
import { useHistory, useParams } from 'react-router-dom';

export default function ClientForm() {
    let history = useHistory();
    let { id } = useParams();

    return (
        <>
            <TitlePage title={'Cliente Formulário ' + (id !== undefined ? id : '')} >
                <Button variant='outline-info' onClick={() => history.goBack()}>
                    <i className='fas fa-arrow-alt-circle-left me-2'></i>
                    Voltar
                </Button>
            </TitlePage>
            <div>Novo Cliente</div>
        </>
    )
}
