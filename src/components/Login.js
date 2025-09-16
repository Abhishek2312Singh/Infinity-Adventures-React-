import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsValidating(true);
        
        const data = {
            username,
            password
        };

        try {
            const response = await fetch("http://localhost:80/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            const result = await response.text();
            
            if (response.ok) {
                // Store user data and token
                localStorage.setItem('user', JSON.stringify(data.username || {}));
                localStorage.setItem('token', result || '');
                console.log(localStorage.getItem('user'));
                console.log(localStorage.getItem('token'));
                // Clear form
                setUsername("");
                setPassword("");
                
                // Show success message briefly then redirect
                // setPopupData("Login successful! Redirecting to dashboard...");
                setIsSuccess(true);
                setShowPopup(true);
                
                // Redirect to dashboard after a short delay
                // setTimeout(() => {
                //     navigate('/dashboard');
                // }, 1000);
                navigate('/dashboard');
            } else {
                // Show error message
                setPopupData(result.message || "Login failed. Please check your credentials.");
                setIsSuccess(false);
                setShowPopup(true);
            }
            
            console.log(JSON.stringify(data));
        } catch (e) {
            console.error("Error:", e);
            setPopupData(`Error: ${e.message}`);
            setIsSuccess(false);
            setShowPopup(true);
        } finally {
            setIsValidating(false);
        }
    }

    const closePopup = () => {
        setShowPopup(false);
        setPopupData("");
    }

    const colorStyle = {
        color: "#34a4eb",
        backgroundColor: "#34a4eb",
    };

    useEffect(() => {
        document.title = "Infinity Adventures - Login";
    });

    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6
                            className="section-title bg-white text-center px-3"
                            style={colorStyle}
                        >
                            Login
                        </h6>
                        <h1 className="mb-5">Welcome Back</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="modern-form-container">
                                <div className="form-header">
                                    <div className="form-icon">
                                        <i className="fa fa-sign-in-alt"></i>
                                    </div>
                                    <h3>Welcome Back</h3>
                                    <p>Sign in to your account to continue</p>
                                </div>
                                <form onSubmit={handleLogin} className="modern-form">
                                    <div className="form-group">
                                        <label htmlFor="username" className="form-label">
                                            <i className="fa fa-user me-2"></i>
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control modern-input"
                                            id="username"
                                            placeholder="Enter your username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">
                                            <i className="fa fa-lock me-2"></i>
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control modern-input"
                                            id="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-options">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input modern-checkbox"
                                                id="rememberMe"
                                            />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#" className="forgot-password">
                                            Forgot Password?
                                        </a>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary modern-btn w-100"
                                        disabled={isValidating}
                                    >
                                        {isValidating ? (
                                            <>
                                                <i className="fa fa-spinner fa-spin me-2"></i>
                                                Logging in...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fa fa-sign-in-alt me-2"></i>
                                                Login
                                            </>
                                        )}
                                    </button>

                                    <div className="form-divider">
                                        <span>or</span>
                                    </div>

                                    <div className="social-login">
                                        <button type="button" className="btn btn-outline-primary social-btn">
                                            <i className="fab fa-google me-2"></i>
                                            Continue with Google
                                        </button>
                                        <button type="button" className="btn btn-outline-primary social-btn">
                                            <i className="fab fa-facebook me-2"></i>
                                            Continue with Facebook
                                        </button>
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a href="/signup" className="form-link">
                                                Sign up here
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-overlay" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <div className="popup-content" style={{
                        backgroundColor: 'white',
                        padding: '30px',
                        borderRadius: '10px',
                        maxWidth: '500px',
                        width: '90%',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        position: 'relative',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                    }}>
                        <button
                            onClick={closePopup}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            ×
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: isSuccess ? '#28a745' : '#dc3545',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                fontSize: '30px',
                                color: 'white'
                            }}>
                                {isSuccess ? '✓' : '✗'}
                            </div>
                            <h4 style={{
                                color: isSuccess ? '#28a745' : '#dc3545',
                                marginBottom: '10px'
                            }}>
                                {isSuccess ? 'Success!' : 'Error!'}
                            </h4>
                        </div>

                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '15px',
                            borderRadius: '5px',
                            border: `1px solid ${isSuccess ? '#d4edda' : '#f5c6cb'}`,
                            marginBottom: '20px'
                        }}>
                            <p style={{
                                margin: 0,
                                color: '#333',
                                wordBreak: 'break-word'
                            }}>
                                {popupData}
                            </p>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                onClick={closePopup}
                                style={{
                                    backgroundColor: '#34a4eb',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 30px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#34a4eb'}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
