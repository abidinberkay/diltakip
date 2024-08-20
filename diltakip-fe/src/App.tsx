import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StudentPanel from './pages/StudentPanel';
import TeacherPanel from './pages/TeacherPanel';
import ClassPanel from './pages/ClassPanel';
import Login from './pages/Login';
import Startup from "./pages/Startup";
import FooterPanel from './components/FooterPanel'; // Import FooterPanel

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignOutLink from "./components/SignOutLink";

function App() {

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <div className="d-flex flex-grow-1">
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
                                <li className="nav-item">
                                    <SignOutLink /> {/* Custom Sign Out Link */}
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div id="main-content" className="flex-grow-1">
                        <div className="container mt-4">
                            <Routes>
                                <Route path="/anamenu" element={<Startup />} />
                                <Route path="/ogrenci" element={<StudentPanel />} />
                                <Route path="/ogretmen" element={<TeacherPanel />} />
                                <Route path="/siniflar" element={<ClassPanel />} />
                                <Route path="/" element={<Login />} />
                                <Route path="*" element={<Login />} />
                            </Routes>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <FooterPanel />
            </div>
        </Router>
    );
}

export default App;
