import React, { useState } from 'react';
import { Teacher } from '../interface/Teacher';
import { updateTeacher } from '../service/TeacherService';

interface TeacherEditProps {
    teacher: Teacher;
    onUpdate: (updatedTeacher: Teacher) => void;
    onCancel: () => void;
}

const TeacherEdit: React.FC<TeacherEditProps> = ({ teacher, onUpdate, onCancel }) => {
    const [editedTeacher, setEditedTeacher] = useState<Teacher>(teacher);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedTeacher(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const updatedTeacher = await updateTeacher(editedTeacher);
            onUpdate(updatedTeacher);
        } catch (error) {
            console.error("Error updating teacher:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h5 className="card-title">Öğretmen Düzenle</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">İsim</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={editedTeacher.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Soyisim</label>
                    <input
                        type="text"
                        name="surname"
                        className="form-control"
                        value={editedTeacher.surname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">TCKN</label>
                    <input
                        type="text"
                        name="tckn"
                        className="form-control"
                        value={editedTeacher.tckn}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefon</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        value={editedTeacher.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">İkinci Telefon</label>
                    <input
                        type="text"
                        name="secondPhone"
                        className="form-control"
                        value={editedTeacher.secondPhone || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Şehir</label>
                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={editedTeacher.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Adres</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={editedTeacher.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="registrationDate" className="form-label">Kayıt Tarihi</label>
                    <input
                        type="text"
                        id="registrationDate"
                        name="registrationDate"
                        className="form-control"
                        value={editedTeacher.createdOn}
                        disabled // Assuming this is not editable
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Güncelleme Tarihi</label>
                    <input
                        type="text"
                        id="registrationDate"
                        name="registrationDate"
                        className="form-control"
                        value={editedTeacher.updateTime}
                        disabled // Assuming this is not editable
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Saving...' : 'Save'}
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={onCancel} disabled={loading}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default TeacherEdit;
