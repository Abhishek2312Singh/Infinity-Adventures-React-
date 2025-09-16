import React, { useState } from "react";
import { useEffect } from "react";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsValidating(true);
        
        const data = {
            fullName,
            username,
            email,
            password,
            phone
        };

        try {
            const response = await fetch("http://localhost:80/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            
            const result = await response.json();
            
            // Show popup with result
            setPopupData(result.message || (response.ok ? "Account created successfully!" : "Signup failed"));
            setIsSuccess(response.ok);
            setShowPopup(true);
            
            // Clear form only on success
            if (response.ok) {
                setFullName("");
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setPhone("");
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
        document.title = "Infinity Adventures - Sign Up";
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
                            Sign Up
                        </h6>
                        <h1 className="mb-5">Create Your Account</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white rounded shadow p-5">
                                <form onSubmit={handleSignup}>
                                    <div className="mb-3">
                                        <label htmlFor="fullName" className="form-label">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            placeholder="Enter your full name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Choose a username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            placeholder="Enter your phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="password" className="form-label">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="confirmPassword" className="form-label">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Confirm your password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="agreeTerms"
                                        />
                                        <label className="form-check-label" htmlFor="agreeTerms">
                                            I agree to the{" "}
                                            <a href="#" style={{ color: "#34a4eb" }}>
                                                Terms and Conditions
                                            </a>{" "}
                                            and{" "}
                                            <a href="#" style={{ color: "#34a4eb" }}>
                                                Privacy Policy
                                            </a>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={isValidating}
                                        style={{
                                            backgroundColor: "#34a4eb",
                                            borderColor: "#34a4eb",
                                            opacity: isValidating ? 0.6 : 1,
                                            cursor: isValidating ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {isValidating ? 'Creating Account...' : 'Create Account'}
                                    </button>

                                    <div className="text-center mt-3">
                                        <p className="mb-0">
                                            Already have an account?{" "}
                                            <a href="/login" style={{ color: "#34a4eb", textDecoration: "none" }}>
                                                Login here
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
