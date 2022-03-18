import React from 'react';
import TitlePage from '../../components/TitlePage';
import { Card, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <>
            <TitlePage title='Dashboard'/>
            <div className='mt-5'>
                <Row>

                    <Col>
                        <div className="shadow p-1 mb-5 bg-body rounded">
                            <Card border='success' >
                                <Card.Header className='bg-success'>
                                    <h5 className='text-center fw-bold'>
                                        Clientes atuais
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className='text-center'>25</h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div className="shadow p-1 mb-5 bg-body rounded">
                            <Card border='info'>
                                <Card.Header className='bg-info'>
                                    <h5 className='text-center fw-bold'>
                                        Atividades totais
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className='text-center'>256</h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div className="shadow p-1 mb-5 bg-body rounded">
                            <Card border='warning'>
                                <Card.Header className='bg-warning'>
                                    <h5 className='text-center fw-bold'>
                                        Atividades Urgentes
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className='text-center'>25</h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col>
                        <div className="shadow p-1 mb-5 bg-body rounded">
                            <Card border='danger'>
                                <Card.Header className='bg-danger'>
                                    <h5 className='text-center fw-bold'>
                                        Atividades Atrasadas
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className='text-center'>2</h1>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </div>
        </>
    );
}