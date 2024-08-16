import { Teacher } from "./Teacher";

// Class interface file (Class.ts or ClassInterfaces.ts)
export interface Class {
    id: number;
    name: string;
    language: string;
    teacherId: number;
    capacity: number;
    numberOfStudent: number;
    teacherDto?: Teacher; // Assuming you have a Teacher interface
}

// Page interface for paginated responses
export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}
