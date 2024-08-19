import React from 'react';
import { Class } from '../interface/Class';
import '../styles/GeneralStyle.css'

interface ClassTableProps {
    classes: Class[];
    handlePageChange: (page: number) => void;
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    pageSize: number;
    totalPages: number;
    currentPage: number;
    loading: boolean;
    error: string | null;
    onClassClick: (classData: Class) => void;
}

const ClassTable: React.FC<ClassTableProps> = ({
                                                   classes,
                                                   handlePageChange,
                                                   handlePageSizeChange,
                                                   pageSize,
                                                   totalPages,
                                                   currentPage,
                                                   loading,
                                                   error,
                                                   onClassClick
                                               }) => {
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
            {!loading && classes.length === 0 && <p>Sınıf bulunamadı.</p>}

            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ad</th>
                    <th>Dil</th>
                    <th>Öğretmen Adı</th>
                    <th>Doluluk</th> {/* New column header for "Doluluk" */}
                </tr>
                </thead>
                <tbody>
                {classes.map((classData) => (
                    <tr
                        key={classData.id}
                        onClick={() => onClassClick(classData)}
                        style={{ cursor: 'pointer' }}
                    >
                        <td>{classData.id}</td>
                        <td>{classData.name}</td>
                        <td>{classData.language}</td>
                        <td>{classData.teacherDto ? `${classData.teacherDto.name} ${classData.teacherDto.surname}` : 'Unknown'}</td>
                        <td>{classData.full ? 'Dolu' : 'Boş'}</td> {/* Display "Dolu" if full, otherwise "Boş" */}
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <label>
                        Sayfa Boyutu:
                        <select
                            value={pageSize}
                            onChange={handlePageSizeChange}
                            className="form-select d-inline-block w-auto ms-2"
                        >
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

export default ClassTable;
