import axios, { AxiosResponse } from "axios";
import { Page, Student } from "../interface/Student";

// Fetch paginated students with filtering
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

// Update student details
export async function updateStudent(student: Student): Promise<Student> {
    try {
        const response: AxiosResponse<Student> = await axios.put(
            `http://localhost:8080/student/${student.id}`,
            student
        );
        return response.data;
    } catch (error) {
        console.error("Error updating student:", error);
        throw error;
    }
}
