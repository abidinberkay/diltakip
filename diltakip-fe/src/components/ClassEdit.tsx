import React, { useState, useEffect } from 'react';
import { Class } from '../interface/Class';
import { updateClass } from '../service/ClassService';
import { Teacher } from '../interface/Teacher';
import { fetchAllTeachers } from '../service/TeacherService';

interface ClassEditProps {
    classData: Class;
    onUpdate: () => void; // Update the type of onUpdate
    onCancel: () => void;
}

const ClassEdit: React.FC<ClassEditProps> = ({ classData, onUpdate, onCancel }) => {
    const [editedClass, setEditedClass] = useState<Class>(classData);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [showTeacherSelection, setShowTeacherSelection] = useState<boolean>(false);

    useEffect(() => {
        const loadTeachers = async () => {
            try {
                const teacherList = await fetchAllTeachers();
                setTeachers(teacherList);
            } catch (error) {
                console.error('Error fetching teachers:', error);
                setError('Öğretmenler alınırken bir hata oluştu. Lütfen tekrar deneyin.');
            }
        };
        loadTeachers();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedClass({ ...editedClass, [name]: value });
    };

    const handleTeacherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTeacherId = parseInt(event.target.value, 10);
        const selectedTeacher = teachers.find(teacher => teacher.id === selectedTeacherId);
        if (selectedTeacher) {
            setEditedClass({
                ...editedClass,
                teacherId: selectedTeacher.id,
                teacherDto: selectedTeacher
            });
        }
    };

    const handleSave = async () => {
        setLoading(true);
        setError(null);
        try {
            await updateClass(editedClass.id, editedClass);
            onUpdate(); // Call onUpdate after saving
        } catch (error) {
            console.error('Error updating class:', error);
            setError('Sınıf güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h3>Sınıf Düzenle</h3>
            {error && <p className="text-danger">{error}</p>}
            <div className="mb-3">
                <label className="form-label">Ad</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={editedClass.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Dil</label>
                <input
                    type="text"
                    className="form-control"
                    name="language"
                    value={editedClass.language}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Kapasite</label>
                <input
                    type="number"
                    className="form-control"
                    name="capacity"
                    value={editedClass.capacity}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Öğrenci Sayısı</label>
                <input
                    type="number"
                    className="form-control"
                    name="numberOfStudent"
                    value={editedClass.numberOfStudent}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Öğretmen</label>
                <input
                    type="text"
                    className="form-control"
                    value={editedClass.teacherDto ? `${editedClass.teacherDto.name} ${editedClass.teacherDto.surname}` : ''}
                    disabled
                />
                <button
                    className="btn btn-primary mt-2 change-button"
                    onClick={() => setShowTeacherSelection(!showTeacherSelection)}
                >
                    Öğretmen Değiştir
                </button>
                {showTeacherSelection && (
                    <select
                        className="form-select mt-2"
                        onChange={handleTeacherChange}
                        value={editedClass.teacherId || ''}
                    >
                        <option value="">Seçiniz</option>
                        {teachers.map(teacher => (
                            <option key={teacher.id} value={teacher.id}>
                                {teacher.name} {teacher.surname}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="mb-3">
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
                >
                    İptal
                </button>
            </div>
        </div>
    );
};

export default ClassEdit;
