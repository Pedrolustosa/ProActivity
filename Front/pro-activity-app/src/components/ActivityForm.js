import { useState, useEffect } from 'react';

const activityBegin = {
    id: 0,
    name: '',
    title: '',
    priority: 0,
    description: ''
}

export default function ActivityForm(props) {
    const [activity, setActivity] = useState(activityActual()); 

    useEffect(() =>{
        if(props.activSelected.id !== 0) setActivity(props.activSelected);
    }, [props.activSelected]);

    const handleCancel = (e) => {
        e.preventDefault();

        props.cancelActivity();

        setActivity(activityBegin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(props.activSelected.id !== 0 )
            props.updateActivity(activity);
        else
            props.newActivity(activity);

        setActivity(activityBegin );
    };

    const updateActivity = () => {
    };

    const inputTextHandler = (e) => {
        const {name, value} = e.target;
        setActivity({...activity, [name]: value});
    };

    function activityActual(){
        if(props.activSelected.id !== 0){
            return props.activSelected;
        } else {
            return activityBegin;
        }
    };

    return (
        <>
        <h1>Atividade {activity.id !== 0 ? activity.id : ''}</h1>
        <form className='row g-3 mt-3 mb-2 pt-1 pb-3' onSubmit={handleSubmit}>
            <div className='col-md-2'>
                <label className='form-label'>Prioridade</label>
                <select id='priority' name='priority' value={activity.priority} onChange={inputTextHandler} className='form-select' placeholder='Escolha a Prioridade'>
                    <option defaultValue='0'>Selecionar...</option>
                    <option value='1'>Baixa</option>
                    <option value='2'>Normal</option>
                    <option value='3'>Alta</option>
                </select>
            </div>
            <div className='col-md-2'>
                <label className='form-label'>Nome</label>
                <input id='name' name='name' type='text' value={activity.name} onChange={inputTextHandler} placeholder='Nome' className='form-control' />
            </div>
            <div className='col-md-4'>
                <label className='form-label'>Título</label>
                <input id='title' name='title' type='text' value={activity.title} onChange={inputTextHandler} placeholder='Título' className='form-control' />
            </div>
            <div className='col-md-4'>
                <label className='form-label'>Descrição</label>
                <textarea id='description' name='description' type='text' rows={1} value={activity.description} onChange={inputTextHandler} placeholder='Descrição' className='form-control' />
            </div>
            <div className='col-12 mt-3'>
            {activity.id === 0 ? (
                        <button
                            className='btn btn-outline-secondary'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i>
                            Atividade
                        </button>
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-success me-2'
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i>
                                Salvar
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                onClick={handleCancel}
                            >
                                <i className='fas fa-plus me-2'></i>
                                Cancelar
                            </button>
                        </>
                    )}
            </div>
        </form>
        </>
    );
}
