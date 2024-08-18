// src/pages/StartupScreen.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import '../styles/StartupCss.css'; // Import the CSS specific to StartupScreen

const StartupScreen: React.FC = () => {
    return (
        <div className="startup-container mt-4">
            <h2 className="mb-4">Hoşgeldiniz! Lütfen Bir Hizmet Seçin</h2>
            <Row>
                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>Öğrenciler</Card.Title>
                            <Card.Text>
                                Öğrenci yönetim paneline erişin.
                            </Card.Text>
                            <Link to="/ogrenci" className="btn btn-primary">
                                Öğrenciler
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>Öğretmenler</Card.Title>
                            <Card.Text>
                                Öğretmen yönetim paneline erişin.
                            </Card.Text>
                            <Link to="/ogretmen" className="btn btn-primary">
                                Öğretmenler
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="text-center mb-4">
                        <Card.Body>
                            <Card.Title>Sınıflar</Card.Title>
                            <Card.Text>
                                Sınıf yönetim paneline erişin.
                            </Card.Text>
                            <Link to="/siniflar" className="btn btn-primary">
                                Sınıflar
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default StartupScreen;
