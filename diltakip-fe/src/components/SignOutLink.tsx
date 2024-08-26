import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function SignOutLink() {
    const { logout } = useAuth();

    const handleSignOut = () => {
        logout(); // Call the logout function from AuthContext
    };

    return (
        <Link className="nav-link" to="#" onClick={handleSignOut}>
            <i className="bi bi-box-arrow-right"></i> Çıkış Yap
        </Link>
    );
}

export default SignOutLink;
