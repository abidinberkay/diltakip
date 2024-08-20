import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GeneralStyle.css';
import { fetchPaginatedTeachers } from "../service/TeacherService";
import { Teacher, Page } from '../interface/Teacher';
import TeacherTable from '../components/TeacherTable';
import TeacherEdit from '../components/TeacherEdit';
import {useNavigate} from "react-router-dom"; // Import the new component

const TeacherPanel: React.FC = () => {

    const navigate = useNavigate();
    if(!sessionStorage.getItem('cookietoken')) {
        navigate('/login')
    }

    const [teachersPage, setTeachersPage] = useState<Page<Teacher> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [filter, setFilter] = useState<string>("");
    const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null); // Add state for editing

    useEffect(() => {
        async function loadTeachers() {
            try {
                setLoading(true);
                const teachersData = await fetchPaginatedTeachers(currentPage, pageSize, filter);
                setTeachersPage(teachersData);
            } catch (error) {
                console.error("Error fetching teachers:", error);
                setError("Öğretmenler alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            } finally {
                setLoading(false);
            }
        }

        loadTeachers();
    }, [currentPage, pageSize, filter]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        setCurrentPage(0);
    };

    const handleTeacherClick = (teacher: Teacher) => {
        setEditingTeacher(teacher);
    };

    const handleUpdate = (updatedTeacher: Teacher) => {
        if (teachersPage) {
            const updatedTeachers = teachersPage.content.map(teacher =>
                teacher.id === updatedTeacher.id ? updatedTeacher : teacher
            );
            setTeachersPage({ ...teachersPage, content: updatedTeachers });
        }
        setEditingTeacher(null); // Exit editing mode
    };

    const handleCancelEdit = () => {
        setEditingTeacher(null); // Exit editing mode
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card card-header-red">
                        <div className="card-body text-center">
                            <h5 className="card-title">Öğretmen Kayıt Sistemi</h5>
                        </div>
                    </div>
                </div>

                {editingTeacher ? (
                    <TeacherEdit
                        teacher={editingTeacher}
                        onUpdate={handleUpdate}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    <div className="col-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Öğretmenler</h5>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Ara (Ad/Soyad, Adres, Telefon, Şehir)"
                                        className="form-control"
                                        value={filter}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                                <TeacherTable
                                    teachers={teachersPage?.content || []}
                                    handlePageChange={handlePageChange}
                                    handlePageSizeChange={handlePageSizeChange}
                                    pageSize={pageSize}
                                    totalPages={teachersPage?.totalPages || 0}
                                    currentPage={teachersPage?.number || 0}
                                    loading={loading}
                                    error={error}
                                    onTeacherClick={handleTeacherClick} // Pass the handler to the table
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeacherPanel;
