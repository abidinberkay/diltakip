import React from 'react';
import '../styles/FooterPanel.css'; // You can create a CSS file to style your footer

const FooterPanel: React.FC = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3">
                © 2024 Berkay. All rights reserved.
            </div>
        </footer>
    );
}

export default FooterPanel;
