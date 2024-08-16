// Teacher.ts
export interface Teacher {
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

export interface Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
}