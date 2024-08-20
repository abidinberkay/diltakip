import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GeneralStyle.css';
import { fetchPaginatedStudents } from "../service/StudentService";
import { Student, Page } from '../interface/Student';
import StudentTable from '../components/StudentTable';
import StudentEdit from '../components/StudentEdit';
import {useNavigate} from "react-router-dom"; // Import the new component

const StudentPanel: React.FC = () => {
    const navigate = useNavigate();
    if(!sessionStorage.getItem('cookietoken')) {
        navigate('/login')
    }
    const [studentsPage, setStudentsPage] = useState<Page<Student> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [filter, setFilter] = useState<string>("");
    const [editingStudent, setEditingStudent] = useState<Student | null>(null); // Add state for editing

    useEffect(() => {
        async function loadStudents() {
            try {
                setLoading(true);
                const studentsData = await fetchPaginatedStudents(currentPage, pageSize, filter);
                setStudentsPage(studentsData);
            } catch (error) {
                console.error("Error fetching students:", error);
                setError("Öğrenciler alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            } finally {
                setLoading(false);
            }
        }

        loadStudents();
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

    const handleStudentClick = (student: Student) => {
        setEditingStudent(student);
    };

    const handleUpdate = (updatedStudent: Student) => {
        if (studentsPage) {
            const updatedStudents = studentsPage.content.map(student =>
                student.id === updatedStudent.id ? updatedStudent : student
            );
            setStudentsPage({ ...studentsPage, content: updatedStudents });
        }
        setEditingStudent(null); // Exit editing mode
    };

    const handleCancelEdit = () => {
        setEditingStudent(null); // Exit editing mode
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card card-header-green">
                        <div className="card-body text-center">
                            <h5 className="card-title">Öğrenci Kayıt Sistemi</h5>
                        </div>
                    </div>
                </div>

                {editingStudent ? (
                    <StudentEdit
                        student={editingStudent}
                        onUpdate={handleUpdate}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    <div className="col-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Öğrenciler</h5>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Ara (Ad/Soyad, Adres, Telefon, Şehir Tam İsmi)"
                                        className="form-control"
                                        value={filter}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                                <StudentTable
                                    students={studentsPage?.content || []}
                                    handlePageChange={handlePageChange}
                                    handlePageSizeChange={handlePageSizeChange}
                                    pageSize={pageSize}
                                    totalPages={studentsPage?.totalPages || 0}
                                    currentPage={studentsPage?.number || 0}
                                    loading={loading}
                                    error={error}
                                    onStudentClick={handleStudentClick} // Pass the handler to the table
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentPanel;
