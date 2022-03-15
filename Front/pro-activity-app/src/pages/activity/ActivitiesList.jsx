import React from 'react';
import ActivityItem from './ActivityItem';

export default function ActivitiesList(props) {
  return (
    <div className='mt-0'>
      {props.activities.map((act) => (
        <ActivityItem 
          key={act.id} 
          act={act} 
          editActivity={props.editActivity}
          handleConfirmModal={props.handleConfirmModal}
        />
      ))}
  </div>
  )
}
