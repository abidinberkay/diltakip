// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import StudentPanel from './pages/StudentPanel';
import TeacherPanel from './pages/TeacherPanel';
import ClassPanel from './pages/ClassPanel'; // Import the ClassPanel component
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
                                <Link className="nav-link" to="/ogrenci">
                                    <i className="bi bi-house-door"></i> Öğrenciler
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ogretmen">
                                    <i className="bi bi-info-circle"></i> Öğretmenler
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/siniflar">
                                    <i className="bi bi-book"></i> Sınıflar
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
                            {/* Redirect root path to /ogrenci */}
                            <Route path="/" element={<Navigate to="/ogrenci" replace />} />
                            <Route path="/ogrenci" element={<StudentPanel />} />
                            <Route path="/ogretmen" element={<TeacherPanel />} />
                            <Route path="/siniflar" element={<ClassPanel />} /> {/* Add route for ClassPanel */}
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
