import axios, { AxiosResponse } from "axios";
import { Teacher, Page } from '../interface/Teacher'; // Adjust the path according to your project structure

export async function fetchPaginatedTeachers(
    page: number,
    size: number,
    filter: string = ""
): Promise<Page<Teacher>> {
    try {
        const response: AxiosResponse<Page<Teacher>> = await axios({
            method: "get",
            url: "http://localhost:8080/teacher/page",
            params: {
                page: page,
                size: size,
                filter: filter
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error;
    }
}

// Export the function to make it available for other components
export async function updateTeacher(teacher: Teacher): Promise<Teacher> {
    try {
        const response: AxiosResponse<Teacher> = await axios({
            method: "put",
            url: `http://localhost:8080/teacher/${teacher.id}`,
            data: teacher
        });

        return response.data;
    } catch (error) {
        console.error("Error updating teacher:", error);
        throw error;
    }
}

// New method to fetch all teachers for the combo box
export async function fetchAllTeachers(): Promise<Teacher[]> {
    try {
        const response: AxiosResponse<Teacher[]> = await axios({
            method: "get",
            url: "http://localhost:8080/teacher/list",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching teacher list:", error);
        throw error;
    }
}
