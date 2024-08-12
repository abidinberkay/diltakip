// Student interface remains the same
export interface Student {
    id: number;
    name: string;
    tckn: string;
    surname: string;
    phone: string;
    city: string;
    secondPhone?: string;
    address: string;
    registrationDate: string;
    updateTime?: string;
    createdOn: string;
}

// Page interface for paginated responses
export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}
