import React, { useState } from 'react';
import { Student } from '../interface/Student';
import { updateStudent } from '../service/StudentService';

interface StudentEditProps {
    student: Student;
    onUpdate: (updatedStudent: Student) => void;
    onCancel: () => void;
}

const StudentEdit: React.FC<StudentEditProps> = ({ student, onUpdate, onCancel }) => {
    const [editedStudent, setEditedStudent] = useState<Student>(student);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedStudent({ ...editedStudent, [name]: value });
    };

    const handleSave = async () => {
        try {
            const updatedStudent = await updateStudent(editedStudent);
            onUpdate(updatedStudent);
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Öğrenci Düzenle</h5>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ad</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={editedStudent.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Soyad</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname"
                        className="form-control"
                        value={editedStudent.surname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefon</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        value={editedStudent.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Şehir</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        value={editedStudent.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Adres</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        value={editedStudent.address}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="btn btn-primary" onClick={handleSave}>
                    Kaydet
                </button>
                <button className="btn btn-secondary ms-2" onClick={onCancel}>
                    İptal
                </button>
            </div>
        </div>
    );
};

export default StudentEdit;
