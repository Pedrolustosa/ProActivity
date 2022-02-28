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
        <form className='mt-3 mb-2 pt-1 pb-3' onSubmit={handleSubmit}>
            <div className='row g-3'>
                <div className='col-md-4'>
                    <label className='form-label fw-bold'>Prioridade</label>
                    <select id='priority' name='priority' value={activity.priority} onChange={inputTextHandler} className='form-select' placeholder='Escolha a Prioridade'>
                        <option value='Undefined'>Selecionar...</option>
                        <option value='Low'>Baixa</option>
                        <option value='Mid'>Normal</option>
                        <option value='High'>Alta</option>
                    </select>
                </div>
                <div className='col-md-4'>
                    <label className='form-label fw-bold'>Nome</label>
                    <input id='name' name='name' type='text' value={activity.name} onChange={inputTextHandler} placeholder='Nome' className='form-control' />
                </div>
                <div className='col-md-4'>
                    <label className='form-label fw-bold'>Título</label>
                    <input id='title' name='title' type='text' value={activity.title} onChange={inputTextHandler} placeholder='Título' className='form-control' />
                </div>
            </div>
            <div className='col-md-12'>
                <label className='form-label fw-bold'>Descrição</label>
                <textarea id='description' name='description' type='text' rows={5} value={activity.description} onChange={inputTextHandler} placeholder='Descrição' className='form-control' />
            </div>
            <hr/>
            <div className='col-12 mt-0'>
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
