import React from 'react';

const Contact = () => {
    return (
        <div className='m-2 p-2'>
            <h2 className='text-danger'>Contact Us</h2>
            <p>We're happy to hear from you! To help us respond as quickly as possible to your message or inquiry, please choose the most appropriate contact email from the following list. You may also reach us by phone or post via the details provided below.</p>
            <h3>Email</h3>
            <p>To reach us via email, please write to the address that best suits your needs.</p>
            <ul>
                <li>Media Inquiries: media@yogiobsessive.org</li>
                <li>Partnerships for Member Discounts: memberbenefits@yogiobsessive.org</li>
                <li>Copyright and Trademark (violations or questions): copyright@yogiobsessive.org</li>
                <li>Accountability: accountability@yogiobsessive.org</li>
            </ul>
            <p>Yogi obsessive will never ask you for financial or sensitive personal information via email. If you receive a message from "Yoga Alliance" requesting that you provide financial or sensitive personal information so that the organization can send you a large sum of money, please notify Yoga Alliance and delete the message and/or mark it as spam. We advise members to never email credit card or bank account information to Yoga Alliance.</p>
        </div>
    );
};

export default Contact;