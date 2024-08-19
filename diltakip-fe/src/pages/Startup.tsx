import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/StartupCss.css'; // Import the CSS specific to StartupScreen

// Import the custom icons
import { ReactComponent as StudentIcon } from '../icons/students.svg';
import { ReactComponent as TeacherIcon } from '../icons/teacher.svg';
import { ReactComponent as ClassIcon } from '../icons/students.svg';

const StartupScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="startup-container mt-4">
            <Card className="welcome-card mb-4">
                <Card.Body>
                    <Card.Title className="welcome-title">
                        HİZMET SEÇİNİZ
                    </Card.Title>
                </Card.Body>
            </Card>
            <Row>
                <Col md={4}>
                    <Card className="text-center mb-4" onClick={() => navigate('/ogrenci')} style={{ cursor: 'pointer' }}>
                        <Card.Body>
                            <StudentIcon style={{ width: '60px', height: '60px', marginBottom: '1rem' }} />
                            <Card.Title>Öğrenciler</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center mb-4" onClick={() => navigate('/ogretmen')} style={{ cursor: 'pointer' }}>
                        <Card.Body>
                            <TeacherIcon style={{ width: '60px', height: '60px', marginBottom: '1rem' }} />
                            <Card.Title>Öğretmenler</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center mb-4" onClick={() => navigate('/siniflar')} style={{ cursor: 'pointer' }}>
                        <Card.Body>
                            <ClassIcon style={{ width: '60px', height: '60px', marginBottom: '1rem' }} />
                            <Card.Title>Sınıflar</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default StartupScreen;
