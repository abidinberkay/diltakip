import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cards.css';
import { fetchPaginatedStudents } from "../service/StudentService";
import { Student, Page } from '../interface/Student';

const StudentPanel: React.FC = () => {
    const [studentsPage, setStudentsPage] = useState<Page<Student> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [filter, setFilter] = useState<string>("");

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

    const renderPagination = () => {
        if (!studentsPage) return null;

        const pages = [];
        for (let i = 0; i < studentsPage.totalPages; i++) {
            pages.push(
                <li key={i} className={`page-item ${i === studentsPage.number ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>
                        {i + 1}
                    </button>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card clickable-card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Öğrenci Kayıt Sistemi</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Öğrenciler</h5>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Ad veya Soyad ile ara"
                                    className="form-control"
                                    value={filter}
                                    onChange={handleFilterChange}
                                />
                            </div>
                            {loading && <p>Yükleniyor...</p>}
                            {error && <p className="text-danger">{error}</p>}
                            {!loading && !error && studentsPage && (
                                <>
                                    <div className="d-flex justify-content-between mb-3">
                                        <div>
                                            <label htmlFor="pageSize" className="me-2">Sayfa Boyutu:</label>
                                            <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}
                                                    className="form-select">
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={20}>20</option>
                                            </select>
                                        </div>
                                    </div>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Öğrenci ID</th>
                                            <th>Ad</th>
                                            <th>Soyad</th>
                                            <th>Telefon</th>
                                            <th>Şehir</th>
                                            <th>Adres</th>
                                            <th>Kayıt Tarihi</th>
                                            <th>Oluşturulma Tarihi</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {studentsPage.content.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.surname}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.city}</td>
                                                <td>{student.address}</td>
                                                <td>{new Date(student.registrationDate).toLocaleString()}</td>
                                                <td>{new Date(student.createdOn).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <nav>
                                        <ul className="pagination justify-content-center">
                                            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                                                <button className="page-link"
                                                        onClick={() => handlePageChange(currentPage - 1)}>
                                                    Önceki
                                                </button>
                                            </li>
                                            {renderPagination()}
                                            <li className={`page-item ${studentsPage.number === studentsPage.totalPages - 1 ? 'disabled' : ''}`}>
                                                <button className="page-link"
                                                        onClick={() => handlePageChange(currentPage + 1)}>
                                                    Sonraki
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentPanel;
