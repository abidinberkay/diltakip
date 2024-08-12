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
