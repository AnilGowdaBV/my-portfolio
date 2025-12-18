
import { useQuery } from '@tanstack/react-query';
import { projects } from '@/data/projects';

// Simulate an async fetch function
const fetchProjects = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return projects;
};

export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });
};
