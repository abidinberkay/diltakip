import React from 'react';
import { Teacher } from '../interface/Teacher'; // Adjust the path according to your project structure


interface TeacherTableProps {
    teachers: Teacher[];
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pageSize: number;
    totalPages: number;
    currentPage: number;
    loading: boolean;
    error: string | null;
}

const TeacherTable: React.FC<TeacherTableProps> = ({
                                                       teachers,
                                                       handlePageChange,
                                                       handlePageSizeChange,
                                                       pageSize,
                                                       totalPages,
                                                       currentPage,
                                                       loading,
                                                       error
                                                   }) => {
    const renderPagination = () => {
        const pages = [];
        for (let i = 0; i < totalPages; i++) {
            pages.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>
                        {i + 1}
                    </button>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="col-12 mb-4">
            <div className="card">
                <div className="card-body">
                    {loading && <p>Yükleniyor...</p>}
                    {error && <p className="text-danger">{error}</p>}
                    {!loading && !error && teachers && (
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
                                    <th>Öğretmen ID</th>
                                    <th>Ad</th>
                                    <th>Soyad</th>
                                    <th>Telefon</th>
                                    <th>Şehir</th>
                                    <th>Adres</th>
                                    <th>Oluşturulma Tarihi</th>
                                </tr>
                                </thead>
                                <tbody>
                                {teachers.map(teacher => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.surname}</td>
                                        <td>{teacher.phone}</td>
                                        <td>{teacher.city}</td>
                                        <td>{teacher.address}</td>
                                        <td>{new Date(teacher.createdOn).toLocaleString()}</td>
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
                                    <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
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
    );
};

export default TeacherTable;
