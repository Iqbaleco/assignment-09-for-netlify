import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='topic'>
            <div className='m-8'>
                <div className="card card-compact w-96 bg-sky-100 shadow-xl">
                    <figure><img src={logo} alt="Quiz-title" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className='font-bold text-md'>Total Quiz: {total}</p>
                        <div className="card-actions justify-end">
                            <Link to={`/quizzes/${id}`}>
                                <button className="btn btn-primary">Start Quiz</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;