import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl font-bold"><Link to='/'>Quizsy</Link></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/chart'>Chart</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;