import axios, { AxiosResponse } from "axios";
import { Page, Class } from "../interface/Class";

// Fetch paginated classes with filtering
export async function fetchPaginatedClasses(
    page: number,
    size: number,
    filter: string = ""
): Promise<Page<Class>> {
    try {
        const response: AxiosResponse<Page<Class>> = await axios({
            method: "get",
            url: "http://localhost:8080/class/page",
            params: {
                page: page,
                size: size,
                filter: filter
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching classes:", error);
        throw error;
    }
}

// Add a new class
export async function addClass(classDto: Class): Promise<Class> {
    try {
        const response: AxiosResponse<Class> = await axios.post(
            "http://localhost:8080/class",
            classDto
        );
        return response.data;
    } catch (error) {
        console.error("Error adding class:", error);
        throw error;
    }
}

// Update class details
export async function updateClass(id: number, classDto: Class): Promise<Class> {
    try {
        const response: AxiosResponse<Class> = await axios.put(
            `http://localhost:8080/class/${id}`,  // Ensure this is correct
            classDto
        );
        return response.data;
    } catch (error) {
        console.error("Error updating class:", error);
        throw error;
    }
}


// Delete a class
export async function deleteClass(id: number): Promise<void> {
    try {
        await axios.delete(`http://localhost:8080/class/${id}`);
    } catch (error) {
        console.error("Error deleting class:", error);
        throw error;
    }
}

// Fetch a single class by ID
export async function findClassById(id: number): Promise<Class> {
    try {
        const response: AxiosResponse<Class> = await axios.get(
            `http://localhost:8080/class/${id}`
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching class by ID:", error);
        throw error;
    }
}
