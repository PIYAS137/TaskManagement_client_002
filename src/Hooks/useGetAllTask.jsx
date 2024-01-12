
import { useQuery } from 'react-query'
import usePublicAxios from './usePublicAxios'



const useGetAllTask = () => {

    const publicAxios = usePublicAxios()

    const { refetch, data: tasks } = useQuery({
        queryKey: ['gettasks'],
        queryFn: async () => {
            const res = await publicAxios('/task');
            return res.data;
        }
    })

    return [tasks, refetch]
}

export default useGetAllTask