import api from '../../api/activity';
import TitlePage from '../../components/TitlePage';
import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ActivityForm from './ActivityForm';
import ActivitiesList from './ActivitiesList';

export default function Activity() {
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);

    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState({ id: 0 });

    const handleActivityModal = () => setShowActivityModal(!showActivityModal);
    const handleConfirmModal = (id) => {
        if (id !== 0 && id !== undefined) {
            const activity = activities.filter((activity) => activity.id === id);
            setActivity(activity[0]);
        } else {
            setActivity({ id: 0 });
        }
        setSmShowConfirmModal(!smShowConfirmModal);
    }

    const takeAllActivies = async () => {
        const response = await api.get('activity');
        return response.data;
    };

    const newActivity = () => {
        setActivity({ id: 0 });
        handleActivityModal();
    }

    useEffect(() => {
        const getActivity = async () => {
            const allActivities = await takeAllActivies();
            if (allActivities) setActivities(allActivities);
        };
        getActivity();
    }, [])

    function cleanFields() {
        document.getElementById('name').value = '';
        document.getElementById('title').value = '';
        document.getElementById('priority').value = '';
        document.getElementById('description').value = '';
    };

    const addActivity = async (act) => {
        handleActivityModal();
        const response = await api.post('activity', act);
        if (act.name === '') {
            alert(`Os Campos são obrigatórios`);
            document.getElementById('name').style.borderColor = "red";
        } else {
            setActivities([...activities, response.data]);
            cleanFields();
        }
    };

    const cancelActivity = () => {
        setActivity({ id: 0 });
        handleActivityModal();
    }

    const updateActivity = async (act) => {
        handleActivityModal();
        const response = await api.put(`activity/${act.id}`, act);
        const { id } = response.data;

        setActivities(
            activities.map((item) => (item.id === id ? response.data : item))
        );
        setActivity({ id: 0 });
    }

    const deleteActivity = async (id) => {
        handleConfirmModal(0);
        if (await api.delete(`activity/${id}`)) {
            const activityFilter = activities.filter((activity) => activity.id !== id);
            setActivities([...activityFilter]);
        }
    };

    function editActivity(id) {
        const activity = activities.filter((activity) => activity.id === id);
        setActivity(activity[0]);
        //Modal
        handleActivityModal();
    };

    return (
        <>
            <TitlePage title={'Atividade' + (activity.id !== 0 ? activity.id : '')}>
                <Button variant="outline-warning" onClick={newActivity}>
                    <i className='fas fa-plus'></i>
                </Button>
            </TitlePage>

            <ActivitiesList
                activities={activities}
                editActivity={editActivity}
                handleConfirmModal={handleConfirmModal}
            />

            <Modal show={showActivityModal} size="lg" onHide={handleActivityModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Atividade {activity.id !== 0 ? activity.id : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm
                        activities={activities}
                        activSelected={activity}
                        addActivity={addActivity}
                        updateActivity={updateActivity}
                        cancelActivity={cancelActivity}
                    />
                </Modal.Body>
            </Modal>

            <Modal size='sm' show={smShowConfirmModal} onHide={handleConfirmModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Excluindo Atividade{' '} {activity.id !== 0 ? activity.id : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza excluir essa atividade {activity.id} ?
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <button className='btn btn-outline-success' onClick={() => deleteActivity(activity.id)}>
                        <i className='fas fa-check me-2'></i>
                        sim
                    </button>
                    <button className='btn btn-danger' onClick={() => handleConfirmModal(0)}>
                        <i className='fas fa-times me-2'></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
