import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';


const MarksChart = ({marksPromise}) => {

  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing for the chart
   
  const marksChartData = marksData.map(studentData => {
     const student ={
      id: studentData.student_id,
      name: studentData.name,
      chemistry:studentData.chemistry,
      physics:studentData.physics,
      math:studentData.math,
      english:studentData.english
     }

     const avg = (student.chemistry + student.physics + student.english + student.math) /4;

     student.avg = avg;

     return student;
  })
  
  console.log(marksChartData);

  return (
    <div className='container mx-auto mt-15 mb-20'>
      <BarChart width={1200} height={400} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill='yellow'></Bar>
        <Bar dataKey="chemistry" fill='#8884d8'></Bar>
        <Bar dataKey="physics" fill='red'></Bar>
        <Bar dataKey="english" fill='blue'></Bar>
        <Bar dataKey="math" fill='green'></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;