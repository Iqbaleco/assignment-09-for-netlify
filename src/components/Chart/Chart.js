import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'React', question: 8, }, { name: 'JavaScript', question: 10, }, { name: 'CSS', question: 8, }, { name: 'Git', question: 11, },
    ];

    return (

        < div >
            <LineChart width={500} height={400} data={data}>
                <Line type="monotype" dataKey="question" stroke="82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div >
    );
};

export default Chart;