import React, { useEffect } from 'react';
import { FaUserCheck, FaChartBar, FaClock, FaMobileAlt } from 'react-icons/fa';
import logo from '/Users/aashiqmahato/Documents/Attendance Management System/Frontend/Attendance_Management_System/src/assets/Logo.png'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import axios from 'axios';
import store from '../../zustand/loginStore';
const LandingPage = () => {
const {setLoggedInUser} = store(state=>state)
  useEffect(()=>{
      const getUser = async(token)=>{
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        setLoggedInUser(response.data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const token = localStorage.getItem("AccessToken")
    if(token){
      getUser(token)
    }
  },[])


  return (
    <div className="bg-gradient-to-b from-purple-600 to-indigo-400 min-h-screen text-white">
      {/* Header */}
      <header className="container mx-auto py-4 sm:py-4 px-4">
        <nav className="flex justify-between items-center">
        <div className="text-center mb-4 md:mb-8">
                    <img className="w-[86px] h-[70px] inline-block mr-2" src={logo} alt="logo" />
                    <span className="text-2xl font-semibold">AAMS</span>
         </div>
         <Link to={'/teacherdashboard'}><button className="bg-white text-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-100 transition duration-300">
             Veiw Dashboard
        </button></Link> 
     <div>
     <Link to={'/login'}><button className="bg-white text-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-100 transition duration-300">
             Login
        </button></Link> 
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto mt-8 sm:mt-12 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <ReactTyped strings={["Automated Attendance Management System"]} typeSpeed={70} onComplete={(self) => self.cursor.remove()}/>
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
        Streamline attendance with our advanced face recognition system, boosting efficiency and providing valuable insights.  </p>
        <button className="bg-white text-purple-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-purple-100 transition duration-300">
         <Link to={'/aboutus'} >More About Us </Link>
        </button>
      </main>

      {/* Features Section */}
      <section className="container mx-auto mt-16 sm:mt-24 px-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <FeatureCard 
            icon={<FaUserCheck />}
            title="Easy Check-In"
            description="Quick and simple attendance marking process for Students."
          />
          <FeatureCard 
            icon={<FaChartBar />}
            title="Insightful Analytics"
            description="Comprehensive reports and analytics to track attendance patterns."
          />
          <FeatureCard 
            icon={<FaClock />}
            title="Time Tracking"
            description="Real-time attendance insights for effective productivity control."
          />
          <FeatureCard 
            icon={<FaMobileAlt />}
            title="Mobile Friendly"
            description="Access the system on-the-go with our mobile-responsive design."
          />
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-16 sm:mt-24 py-6 sm:py-8 bg-purple-800">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          <p>&copy; 2024 AttendEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-purple-700 p-4 sm:p-6 rounded-lg text-center">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
      <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default LandingPage;