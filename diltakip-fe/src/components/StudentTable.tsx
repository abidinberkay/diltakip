import React from 'react';
import { Student } from '../interface/Student';

interface StudentTableProps {
    students: Student[];
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pageSize: number;
    totalPages: number;
    currentPage: number;
    loading: boolean;
    error: string | null;
    onStudentClick: (student: Student) => void;
}

const StudentTable: React.FC<StudentTableProps> = ({
                                                       students,
                                                       handlePageChange,
                                                       handlePageSizeChange,
                                                       pageSize,
                                                       totalPages,
                                                       currentPage,
                                                       loading,
                                                       error,
                                                       onStudentClick
                                                   }) => {

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {!loading && students.length === 0 && <p>No students found.</p>}

            <table className="table table-green table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ad</th>
                    <th>Soyad</th>
                    <th>Telefon</th>
                    <th>Şehir</th>
                    <th>Adres</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id} onClick={() => onStudentClick(student)} style={{ cursor: 'pointer' }}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.surname}</td>
                        <td>{student.phone}</td>
                        <td>{student.city}</td>
                        <td>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <label>
                        Sayfa Boyutu:
                        <select value={pageSize} onChange={handlePageSizeChange} className="form-select d-inline-block w-auto ms-2">
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button
                        className="btn btn-secondary me-2"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 0}
                    >
                        Önceki
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages - 1}
                    >
                        Sonraki
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentTable;
