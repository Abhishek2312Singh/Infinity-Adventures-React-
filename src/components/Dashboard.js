import React from 'react'
import { useNavigate } from 'react-router-dom'
import TripManager from './TripManager'

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Redirect to login page
    navigate('/login');
  };

  const handleGoHome = () => {
    // Redirect to home page
    navigate('/');
  };

  // Get user data from localStorage
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4">Welcome to Your Dashboard!</h1>
          
          {user && (
            <div className="mb-4">
              <p className="lead">Hello, {user.fullName || user.username || 'User'}!</p>
              <p className="text-muted">You are successfully logged in.</p>
            </div>
          )}
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="bg-white rounded shadow p-5">
                <TripManager/>
                
                
                <div className="text-center mt-4">
                  <button 
                    onClick={handleGoHome}
                    className="btn btn-outline-primary me-3"
                    style={{ 
                      borderColor: "#34a4eb", 
                      color: "#34a4eb",
                      padding: "10px 30px"
                    }}
                  >
                    Go to Home
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-danger"
                    style={{ 
                      backgroundColor: "#dc3545",
                      borderColor: "#dc3545",
                      padding: "10px 30px"
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
