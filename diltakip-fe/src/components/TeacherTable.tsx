import React from 'react';
import { Teacher } from '../interface/Teacher';

interface TeacherTableProps {
    teachers: Teacher[];
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pageSize: number;
    totalPages: number;
    currentPage: number;
    loading: boolean;
    error: string | null;
    onTeacherClick: (teacher: Teacher) => void; // Add prop for click handler
}

const TeacherTable: React.FC<TeacherTableProps> = ({
                                                       teachers,
                                                       handlePageChange,
                                                       handlePageSizeChange,
                                                       pageSize,
                                                       totalPages,
                                                       currentPage,
                                                       loading,
                                                       error,
                                                       onTeacherClick
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
        <div className="table-responsive">
            {loading && <p>Yükleniyor...</p>}
            {error && <p className="text-danger">{error}</p>}
            <table className="table table-red table-hover">
                <thead>
                <tr>
                    <th scope="col">Ad</th>
                    <th scope="col">Soyad</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Şehir</th>
                    <th scope="col">Adres</th>
                </tr>
                </thead>
                <tbody>
                {teachers.map((teacher) => (
                    <tr
                        key={teacher.id}
                        onClick={() => onTeacherClick(teacher)} // Handle row click
                        style={{ cursor: 'pointer' }}
                    >
                        <td>{teacher.name}</td>
                        <td>{teacher.surname}</td>
                        <td>{teacher.phone}</td>
                        <td>{teacher.city}</td>
                        <td>{teacher.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <select
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        className="form-select"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <nav>
                    <ul className="pagination">
                        {renderPagination()}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TeacherTable;
