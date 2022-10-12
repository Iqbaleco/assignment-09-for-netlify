import React from 'react';

const Quiz = ({ quiz }) => {
    const { correctAnswer, options, question } = quiz;


    return (
        <div>
            {
                <div className="grid grid-cols-2 gap-4">
                    <div className="card w-50% bg-cyan-200 shadow-xl m-10">
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h2 className='font-bold text-lg'>
                                {question}
                            </h2>
                            <div>
                                <h3 className='font-bold border-solid border-2 border-cyan-600 m-2'>{options[0]}</h3>
                                <h3 className='font-bold border-solid border-2 border-cyan-600 m-2'>{options[1]}</h3>
                                <h3 className='font-bold border-solid border-2 border-cyan-600 m-2'>{options[2]}</h3>
                                <h3 className='font-bold border-solid border-2 border-cyan-600 m-2'>{options[3]}</h3>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
};

export default Quiz;