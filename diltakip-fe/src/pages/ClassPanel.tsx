import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchPaginatedClasses } from "../service/ClassService";
import { Class, Page } from '../interface/Class';
import ClassTable from '../components/ClassTable';
import ClassEdit from '../components/ClassEdit';

const ClassPanel: React.FC = () => {
    const [classesPage, setClassesPage] = useState<Page<Class> | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [pageSize, setPageSize] = useState<number>(10);
    const [filter, setFilter] = useState<string>("");
    const [editingClass, setEditingClass] = useState<Class | null>(null);

    useEffect(() => {
        async function loadClasses() {
            try {
                setLoading(true);
                const classesData = await fetchPaginatedClasses(currentPage, pageSize, filter);
                setClassesPage(classesData);
            } catch (error) {
                console.error("Error fetching classes:", error);
                setError("Sınıflar alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
            } finally {
                setLoading(false);
            }
        }

        loadClasses();
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

    const handleClassClick = (classData: Class) => {
        setEditingClass(classData);
    };

    const handleUpdate = (updatedClass: Class) => {
        if (classesPage) {
            const updatedClasses = classesPage.content.map(classData =>
                classData.id === updatedClass.id ? updatedClass : classData
            );
            setClassesPage({ ...classesPage, content: updatedClasses });
        }
        setEditingClass(null); // Exit editing mode
    };

    const handleCancelEdit = () => {
        setEditingClass(null); // Exit editing mode
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">
                    <div className="card clickable-card">
                        <div className="card-body text-center">
                            <h5 className="card-title">Sınıf Yönetim Sistemi</h5>
                        </div>
                    </div>
                </div>

                {editingClass ? (
                    <ClassEdit
                        classData={editingClass}
                        onUpdate={handleUpdate}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    <div className="col-12 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sınıflar</h5>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Ara (Ad, Dil)"
                                        className="form-control"
                                        value={filter}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                                <ClassTable
                                    classes={classesPage?.content || []}
                                    handlePageChange={handlePageChange}
                                    handlePageSizeChange={handlePageSizeChange}
                                    pageSize={pageSize}
                                    totalPages={classesPage?.totalPages || 0}
                                    currentPage={classesPage?.number || 0}
                                    loading={loading}
                                    error={error}
                                    onClassClick={handleClassClick}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassPanel;
