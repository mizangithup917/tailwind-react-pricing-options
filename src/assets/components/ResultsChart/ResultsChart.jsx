import React from 'react';
import { LineChart, Line, YAxis, XAxis } from 'recharts';


const resultData = [
{
"id": "S001",
"name": "Aisha Rahman",
"physics": 85,
"chemistry": 78,
"math": 92,
"english": 88
},
{
"id": "S002",
"name": "Rafi Ullah",
"physics": 74,
"chemistry": 69,
"math": 80,
"english": 75
},
{
"id": "S003",
"name": "Nusrat Jahan",
"physics": 91,
"chemistry": 87,
"math": 95,
"english": 90
},
{
"id": "S004",
"name": "Imran Hossain",
"physics": 66,
"chemistry": 72,
"math": 70,
"english": 68
},
{
"id": "S005",
"name": "Mehzabin Sultana",
"physics": 79,
"chemistry": 81,
"math": 76,
"english": 83
},
{
"id": "S006",
"name": "Tarek Siddique",
"physics": 58,
"chemistry": 62,
"math": 55,
"english": 60
},
{
"id": "S007",
"name": "Fatima Noor",
"physics": 94,
"chemistry": 90,
"math": 98,
"english": 93
},
{
"id": "S008",
"name": "Karim Mahmud",
"physics": 71,
"chemistry": 68,
"math": 73,
"english": 70
},
{
"id": "S009",
"name": "Sajjad Khan",
"physics": 82,
"chemistry": 75,
"math": 84,
"english": 79
},
{
"id": "S010",
"name": "Lina Akter",
"physics": 88,
"chemistry": 85,
"math": 90,
"english": 86
}
]


const ResultsChart = () => {
  return (
       <div className='container mx-auto mt-15 '>
         <LineChart width={1200} height={500} data={resultData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Line dataKey={'math'} stroke='red'></Line> 
          <Line dataKey={'physics'} stroke='green'></Line> 
          <Line dataKey={'chemistry'} stroke='blue'></Line> 
        </LineChart>
       </div>
  );
};

export default ResultsChart;