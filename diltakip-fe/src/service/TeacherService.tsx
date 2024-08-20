import axios, { AxiosResponse } from "axios";
import { Teacher, Page } from '../interface/Teacher'; // Adjust the path according to your project structure

// Fetch paginated teachers with filtering
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
            },
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('cookietoken')
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching teachers:", error);
        throw error;
    }
}

// Update teacher details
export async function updateTeacher(teacher: Teacher): Promise<Teacher> {
    try {
        const response: AxiosResponse<Teacher> = await axios({
            method: "put",
            url: `http://localhost:8080/teacher/${teacher.id}`,
            data: teacher,
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('cookietoken')
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error updating teacher:", error);
        throw error;
    }
}

// Fetch all teachers for the combo box
export async function fetchAllTeachers(): Promise<Teacher[]> {
    try {
        const response: AxiosResponse<Teacher[]> = await axios({
            method: "get",
            url: "http://localhost:8080/teacher/list",
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('cookietoken')
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching teacher list:", error);
        throw error;
    }
}
