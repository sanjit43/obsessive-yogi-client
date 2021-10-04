import React from 'react';

const About = () => {
    return (
        <div className='bg-secondary m-2'>
            <div className='m-2 p-2'>
                <div>
                    <p className='fs-4 fw-bold'>Obessive Yogi is the largest nonprofit association representing the yoga community, with over 7,000 Registered Yoga Schools (RYS) and more than 100,000 Registered Yoga Teachers (RYT) as of April 2020. We foster and support the high quality, safe, accessible, and equitable teaching of yoga.</p>
                </div>
                <div>
                    <input type="text" placeholder='Inter your name' />
                    <br />
                    <input type="text" placeholder='inter your email' />
                    <br />
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </div>

            </div>

        </div>
    );
};

export default About;