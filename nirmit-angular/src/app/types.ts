export type User = {
    id: string;
    email: string;
    name: string;
}
export type Query = {
    allUsers: User[];
    updateCourseTopic: any[]
}
export type User2 = {
    userId: number;
    id: number;
    title: string,
    completed: boolean,
}
export type User3 = {
    no:number;
    id: string;
    email: string;
    name: string;
    title: string;
    completed: boolean;
}