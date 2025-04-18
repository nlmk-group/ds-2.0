import { ColumnDef } from '@tanstack/react-table';

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
    department: string;
    position: string;
};
export declare const columns: ColumnDef<Person>[];
export declare const data: Person[];
//# sourceMappingURL=constants.d.ts.map