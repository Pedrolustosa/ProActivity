import React from 'react';
import Activity from './Activity';

export default function ActivitiesList(props) {
  return (
    <div className='mt-0'>
      {props.activities.map((act) => (
        <Activity 
          key={act.id} 
          act={act} 
          editActivity={props.editActivity}
          handleConfirmModal={props.handleConfirmModal}
        />
      ))}
  </div>
  )
}
