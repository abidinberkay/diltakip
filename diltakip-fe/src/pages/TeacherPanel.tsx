import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cards.css';
import { fetchPaginatedTeachers } from "../service/TeacherService";
import { Teacher, Page } from '../interface/Teacher'; // Adjust the path according to your project structure

import TeacherTable from '../components/TeacherTable';

const TeacherPanel: React.FC = () => {
    const [teachersPage, setTeachersPage] = useState<Page<Teacher> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [filter, setFilter] = useState<string>("");

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card clickable-card clickable-card-ogretmen">
                        <div className="card-body text-center">
                            <h5 className="card-title">Öğretmen Kayıt Sistemi</h5>
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Öğretmenler</h5>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Ara (Ad/Soyad, Adres, Telefon, Şehir Tam İsmi)"
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherPanel;
