import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-b from-purple-600 to-indigo-400 font-bold min-h-screen">
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Automated Attendance Management System</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                    <p className="text-white mb-4">
                        Welcome to our advanced face recognition attendance system. We are dedicated to streamlining attendance tracking, boosting productivity, and providing valuable insights for organizations of all sizes.
                    </p>
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                         alt="Team collaboration" 
                         className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-4" />
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-white">
                        Our mission is to leverage cutting-edge technology to simplify and enhance the process of attendance management. By utilizing state-of-the-art face recognition, we aim to provide a seamless and efficient solution for modern workplaces and educational institutions.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                    <ul className="list-disc list-inside text-white">
                        <li className="mb-2">Accuracy: Precise attendance tracking for better productivity management.</li>
                        <li className="mb-2">Efficiency: Streamlined attendance process for optimized workflow.</li>
                        <li className="mb-2">Insights: Real-time data and analytics to help manage productivity effectively.</li>
                        <li className="mb-2">Security: Ensuring the privacy and security of all user data.</li>
                        <li className="mb-2">Support: Dedicated customer support to assist with any queries or issues.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-white">
                        If you have any questions or would like to learn more about our system, please feel free to contact us at{' '}
                        <a href="mailto:contact@faceidattendance.com" className="text-blue-600 hover:underline">
                            contact@faceidattendance.com
                        </a>.
                    </p>
                </section>
            </main>

            <footer className="bg-gradient-to-b from-purple-600 to-indigo-400 py-4 mt-12">
                <div className="container mx-auto px-4 text-center text-white">
                    &copy; 2024 Automated Attendance System. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default AboutUs;