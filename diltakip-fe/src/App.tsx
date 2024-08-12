import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentPanel from './pages/StudentPanel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="d-flex">
                {/* Sidebar */}
                <nav id="sidebar" className="bg-light">
                    <div className="p-4">
                        <h4 className="sidebar-title">Hizmetler</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="bi bi-house-door"></i> Öğrenci Kayıt Sistemi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <i className="bi bi-info-circle"></i> About
                                </Link>
                            </li>
                            {/* Add more navigation links as needed */}
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <div id="main-content" className="flex-grow-1">
                    <div className="container mt-4">
                        <Routes>
                            <Route path="/" element={<StudentPanel />} />
                            {/* Add more routes as needed */}
                            <Route path="/about" element={<div>About Page</div>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
