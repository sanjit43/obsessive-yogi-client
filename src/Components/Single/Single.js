import React from 'react';

const Single = (props) => {
    const { img, title, description } = props.pd
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;