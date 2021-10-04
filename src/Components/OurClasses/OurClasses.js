import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';


const OurClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('./total-class.json')
            .then(response => response.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center fs-2 text-danger fw-bold m-2 p-2'>Our Classes</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
                    {
                        classes.map(pd => <Single key={pd.id} pd={pd}></Single>)
                    }
                </div>
            </div>

        </div>
    );
};

export default OurClasses;