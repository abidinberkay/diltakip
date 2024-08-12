import axios, { AxiosResponse } from "axios";
import { Page, Student } from "../interface/Student";

export async function fetchPaginatedStudents(
    page: number,
    size: number,
    filter: string = ""
): Promise<Page<Student>> {
    try {
        const response: AxiosResponse<Page<Student>> = await axios({
            method: "get",
            url: "http://localhost:8080/student/page",
            params: {
                page: page,
                size: size,
                filter: filter
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
}
