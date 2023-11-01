import './style.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [errors, setErrors] = useState({});
        const navigate = useNavigate();

          const validateForm = () => {
              const errors = {};

                  if (!email) {
                        errors.email = "Email is required.";
                            }

                                if (!password) {
                                      errors.password = "Password is required.";
                                          }

                                              setErrors(errors);

                                                  return Object.keys(errors).length === 0;
                                                    };

                                                      const onButtonClick = () => {
                                                          if (!validateForm()) {
                                                                return;
                                                                    }

                                                                        // TODO: Send login request to backend API
                                                                            if (// Login successful) {
                                                                                  // Set logged-in state and redirect to home page
                                                                                        props.setLoggedIn(true);
                                                                                              navigate("/");
                                                                                                  } else {
                                                                                                        // Display error message
                                                                                                            }
                                                                                                              };

                                                                                                                return (
                                                                                                                    <div className="login-page">
                                                                                                                          <h1>Login</h1>
                                                                                                                                <input
                                                                                                                                        type="email"
                                                                                                                                                placeholder="Email address"
                                                                                                                                                        value={email}
                                                                                                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                      />
                                                                                                                                                                            {errors.email && <p className="error-message">{errors.email}</p>}

                                                                                                                                                                                  <input
                                                                                                                                                                                          type="password"
                                                                                                                                                                                                  placeholder="Password"
                                                                                                                                                                                                          value={password}
                                                                                                                                                                                                                  onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                        />
                                                                                                                                                                                                                              {errors.password && <p className="error-message">{errors.password}</p>}

                                                                                                                                                                                                                                    <button onClick={onButtonClick}>Login</button>
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                          export default Login;
                                                                                                                                                                                                                                          