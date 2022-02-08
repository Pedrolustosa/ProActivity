import React from 'react';
import Activity from './Activity';

export default function ActivitiesList(props) {
  return (
    <div className='mt-3'>
      {props.activities.map((act) => (
        <Activity 
          key={act.id} 
          act={act} 
          deleteActivity={props.deleteActivity} 
          editActivity={props.editActivity}
        />
      ))}
  </div>
  )
}
