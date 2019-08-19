import React from 'react';

const Card = (props) => {
    return (
        <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
            <div className="card-header">Posted Today</div>
            <div className="card-body">
                <h5 className="card-title">{props.post}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    );
}

export default Card;