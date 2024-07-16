import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-purple-600 to-indigo-400 min-h-screen mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-lg mb-4">
                Welcome to our advanced face recognition attendance system. We are dedicated to streamlining attendance tracking, boosting productivity, and providing valuable insights.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-lg mb-4">
                Our mission is to leverage cutting-edge technology to simplify and enhance the process of attendance management. By utilizing state-of-the-art face recognition, we aim to provide a seamless and efficient solution for organizations of all sizes.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
            <ul className="list-disc list-inside mb-4">
                <li className="mb-2"><strong>Accuracy:</strong> Precise attendance tracking for better productivity management.</li>
                <li className="mb-2"><strong>Efficiency:</strong> Streamlined attendance process for optimized workflow.</li>
                <li className="mb-2"><strong>Insights:</strong> Real-time data and analytics to help manage productivity effectively.</li>
                <li className="mb-2"><strong>Security:</strong> Ensuring the privacy and security of all user data.</li>
                <li className="mb-2"><strong>Support:</strong> Dedicated customer support to assist with any queries or issues.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-lg">
                If you have any questions or would like to learn more about our system, please feel free to <a href="mailto:contact@faceidattendance.com" className="text-blue-500 underline">contact us</a>.
            </p>
        </div>
    );
}

export default AboutUs;
