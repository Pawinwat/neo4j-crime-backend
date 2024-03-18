import { axiosGraph } from "../../../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
const api = {
    getRalation: async () => {
        const { data:{result} } = await axiosGraph.get(`/meta/relationships`);
        return result
    }
}



export function useRelation() {
    return useQuery<any>({
        queryKey: ["get-relation"],
        queryFn: () => api.getRalation(),
        refetchOnWindowFocus: false,
        enabled: true,
        // enabled: !!workbookTag,
        // staleTime: 5 * (60 * 1000),
        // cacheTime: 5 * (60 * 1000),
    });
}

