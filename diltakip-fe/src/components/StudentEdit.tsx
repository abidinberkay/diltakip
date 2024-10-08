import React, {useState} from 'react';
import {Student} from '../interface/Student';
import {updateStudent} from '../service/StudentService';

interface StudentEditProps {
    student: Student;
    onUpdate: (updatedStudent: Student) => void;
    onCancel: () => void;
}

const StudentEdit: React.FC<StudentEditProps> = ({student, onUpdate, onCancel}) => {
    const [editedStudent, setEditedStudent] = useState<Student>(student);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setEditedStudent({...editedStudent, [name]: value});
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const updatedStudent = await updateStudent(editedStudent);
            onUpdate(updatedStudent); // Update the parent component with the updated student data
        } catch (error) {
            console.error("Error updating student:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h5 className="card-title">Öğrenci Düzenle</h5>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">İsim</label>
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
                <label htmlFor="surname" className="form-label">Soyisim</label>
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
                <label htmlFor="tckn" className="form-label">TCKN</label>
                <input
                    type="text"
                    id="tckn"
                    name="tckn"
                    className="form-control"
                    value={editedStudent.tckn}
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
                <label htmlFor="secondPhone" className="form-label">İkinci Telefon</label>
                <input
                    type="text"
                    id="secondPhone"
                    name="secondPhone"
                    className="form-control"
                    value={editedStudent.secondPhone || ''}
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
            <div className="mb-3">
                <label htmlFor="registrationDate" className="form-label">Kayıt Tarihi</label>
                <input
                    type="text"
                    id="registrationDate"
                    name="registrationDate"
                    className="form-control"
                    value={editedStudent.registrationDate}
                    onChange={handleInputChange}
                    disabled // Assuming this is not editable
                />
            </div>
            <div className="mb-3">
                <label htmlFor="updateTime" className="form-label">Güncelleme Tarihi</label>
                <input
                    type="text"
                    id="updateTime"
                    name="updateTime"
                    className="form-control"
                    value={editedStudent.updateTime || ''}
                    onChange={handleInputChange}
                    disabled // Assuming this is not editable
                />
            </div>
            <div className="mb-3">
                <label htmlFor="createdOn" className="form-label">Oluşturulma Tarihi</label>
                <input
                    type="text"
                    id="createdOn"
                    name="createdOn"
                    className="form-control"
                    value={editedStudent.createdOn}
                    onChange={handleInputChange}
                    disabled // Assuming this is not editable
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={handleSave}
                disabled={loading}
            >
                {loading ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
            <button
                className="btn btn-secondary ms-2"
                onClick={onCancel}
                disabled={loading}
            >
                İptal
            </button>
        </div>

    );
};

export default StudentEdit;
