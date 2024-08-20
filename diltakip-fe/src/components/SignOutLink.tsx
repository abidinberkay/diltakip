import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignOutLink() {
    const navigate = useNavigate();

    const handleSignOut = () => {
        sessionStorage.clear(); // Clear session storage
        navigate('/'); // Redirect to the login page
    };

    return (
        <Link className="nav-link" to="#" onClick={handleSignOut}>
            <i className="bi bi-box-arrow-right"></i> Çıkış Yap
        </Link>
    );
}

export default SignOutLink;
