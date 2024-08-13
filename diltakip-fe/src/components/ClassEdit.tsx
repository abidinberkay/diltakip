import React, { useState } from 'react';
import { Class } from '../interface/Class';
import { updateClass } from '../service/ClassService';

interface ClassEditProps {
    classData: Class;
    onUpdate: (updatedClass: Class) => void;
    onCancel: () => void;
}

const ClassEdit: React.FC<ClassEditProps> = ({ classData, onUpdate, onCancel }) => {
    const [editedClass, setEditedClass] = useState<Class>(classData);
    const [loading, setLoading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedClass({ ...editedClass, [name]: value });
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            const updatedClass = await updateClass(editedClass.id, editedClass); // Pass the ID and updated class data
            onUpdate(updatedClass); // Update the parent component with the updated class data
        } catch (error) {
            console.error("Error updating class:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sınıf Düzenle</h5>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Ad</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={editedClass.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="language" className="form-label">Dil</label>
                    <input
                        type="text"
                        id="language"
                        name="language"
                        className="form-control"
                        value={editedClass.language}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="teacherId" className="form-label">Öğretmen ID</label>
                    <input
                        type="text"
                        id="teacherId"
                        name="teacherId"
                        className="form-control"
                        value={editedClass.teacherId}
                        onChange={handleInputChange}
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
        </div>
    );
};

export default ClassEdit;
