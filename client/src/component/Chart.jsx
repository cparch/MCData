import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Chart = (props) => {
  return (
    <div>
      {/* {console.log(props.data)} */}
      <Bar
      data={props.data}
      options={{
        legend:{
          display:true,
          position: 'top',
          labels:{
            fontSize: 30,
          }
          
        }
      }}
    />
    </div>
  )
}

export default Chart;
