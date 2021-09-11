export interface Project{
    title: string;
    subTitle: string;
    description: string;
    list: List[];
    stack: Stack[];
    expand: boolean;
}

interface List{
    name: string;
    responsibilities: string[];
    order: number;
}

interface Stack{
    name: string;
    icon: string;
}