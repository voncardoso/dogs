import { useEffect } from 'react';
import { STATS_GET } from '../../api';
import useFecth from '../../Hooks/useFetch';
import Loading from '../../components/Help/Loading'
import Error from '../../components/Help/Error'
import Head from '../../components/Help/Head'
import UserStatsGraphs from './UserStatsGraphs';


const UserStats = () =>{
    const {data,error,loading,request} = useFecth();

    useEffect(()=>{
     async function getData(){
        const {url, options} = STATS_GET();
        await request(url, options);
     }
        getData();
    }, [request])

    if(loading) return <Loading />
    if(error) return <Error error={error}/>
    if(data)
    return(
        <div>
          
            <UserStatsGraphs data={data}/>
        </div>
    )
    else return null;
}

export default UserStats;