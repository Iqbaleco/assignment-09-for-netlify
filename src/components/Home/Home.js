import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const home = useLoaderData();
    const topics = home.data;
    return (
        <div>
            <div>
                <h1 className='font-bold text-2xl h-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-1 hover:bg-gradient-to-r text-white'>Are you excited to partiticipate this quiz competition?</h1>
            </div>
            <div>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;