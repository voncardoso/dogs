import { useEffect, useState } from "react";
import style from './UserStatsGraphs.module.css';
import {VictoryPie, VictoryChart, VictoryBar} from 'victory';


const UserStatsGraphs = ({data}) =>{
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);
    console.log(data)

    useEffect(() =>{
        const graphData = data.map(item =>{
            return{
                x: item.title,
                y: Number(item.acessos)
            }
        })
       setTotal(
           data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b),
       );
        setGraph(graphData);
    }, [data])

    return(
        <section className={`${style.graph} animeLeft`}>
            <div className={style.total}>
                <p>Acesso: {total}</p>
            </div>
            <div>
                <VictoryPie 
                    data={graph}
                    innerRadius={50}
                    padding={{top: 20, bottom: 20, left: 80, right: 80}}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke:'#fff',
                            strokeWidth: 2,
                        },
                        labels: {
                            fontSize: 14,
                            fill: '#fff'
                        }
                    }}
                />
            </div>
        </section>
    )
}
export default UserStatsGraphs;