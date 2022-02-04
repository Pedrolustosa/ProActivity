import React from 'react';

export default function Activity(props) {
    function priorityLabel(param) {
        switch (param) {
          case '1':
            return 'Baixa';
          case '2':
            return 'Normal';
          case '3':
            return 'Alta';
          default:
            return 'Não Definido';
        }
      }
    
      function priorityStyle(param, icon) {
        switch (param) {
          case '1':
            return icon ? 'smile' : 'success';
          case '2':
            return icon ? 'meh' : 'warning';
          case '3':
            return icon ? 'frown' : 'danger';
          default:
            return 'Não Definido';
        }
      }

  return (
    <div className={'card mb-2 shadow-lg border-3 border-' + priorityStyle(props.act.priority)}>
        <div className='card-body'>
            <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                    <span className={'badge rounded-pill me-1 bg-' + priorityStyle(props.act.priority)}>
                        {props.act.id}
                    </span>
                    - Título
                </h5>
                <h6>
                    Prioridade:
                    <span className={'ms-1 text-' + priorityStyle(props.act.priority)}>
                        <i className={'me-1 far fa-' + priorityStyle(props.act.priority, true)}></i>
                        {priorityLabel(props.act.priority)}
                    </span>
                </h6>
            </div>
        <p className='card-text mt-1 mb-1'>{props.act.name}</p>

        <hr />

        <p className='card-text mt-1'>{props.act.description}</p>
            <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                <button className='btn btn-sm btn-outline-primary me-2'>
                    <i className='fas fa-pen me-2'></i>Editar
                </button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => props.deleteActivity(props.act.id)}>
                    <i className='fas fa-trash me-2'></i>Deletar
                </button>
            </div>
        </div>
     </div>
  )
}
