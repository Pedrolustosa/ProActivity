import React from 'react';

export default function ActivityForm() {
  return (
        <form className='row g-3 mt-3 mb-2 pt-1 pb-3'>
            <div className="col-md-1">
                <label className='form-label'>Id</label>
                <input id='id' type='number' placeholder='Id' min='0' className='form-control'
                    readOnly disabled
                    value={Math.max.apply(Math, activities.map(item => item.id)) + 1} />
            </div>
            <div className='col-md-2'>
                <label className='form-label'>Prioridade</label>
                <select id='priority' className='form-select'>
                    <option defaultValue='0' selected hidden disabled>Selecionar...</option>
                    <option value='1'>Baixa</option>
                    <option value='2'>Normal</option>
                    <option value='3'>Alta</option>
                </select>
            </div>
            <div className='col-md-2'>
                <label className='form-label'>Nome</label>
                <input id='name' type='text' placeholder='Nome' className='form-control' />
            </div>
            <div className='col-md-3'>
                <label className='form-label'>Título</label>
                <input id='title' type='text' placeholder='Título' className='form-control' />
            </div>
            <div className='col-md-4'>
                <label className='form-label'>Descrição</label>
                <input id='description' type='text' placeholder='Descrição' className='form-control' />
            </div>
            <div className='col-12'>
                <button className='btn btn-outline-primary' onClick={newActivity}>+ Atividade</button>
            </div>
        </form>
  )
}
