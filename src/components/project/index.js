import './index.css'
import { projectData } from './projects'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useHistory } from 'react-router-dom'
const Project = () => {
    const params = useParams();
    const history = useHistory();
    const [data, setData] = useState({})
    useEffect(() => {
        setData(projectData[params.projectName])
    }, [params])
    const visitPage=(data) => {
        window.open(data?.url)
    }
    return (
        <>
        <div className='projectPage'>
            <div>
                <h2 onClick={() => window.open(data?.url)} className='siteName'>{data?.name}</h2>
                <div className='screenshot'>
                    <img onClick={() => window.open(data?.url)} alt='website screenshot' src={data?.image}></img>
                </div>
                <h3>Created by: {data?.creators?.join(', ')}</h3>
            </div>
            <div className='technologies'>
                {data?.technologies?.map((technology) => (
                    <div className='techType' key={technology?.name}>
                        <p className='techTypeName'>{technology?.name}</p>
                        {technology?.tech?.map((tech) => (<p className='tech'>{tech}</p>))}
                    </div>
                ))}
            </div>
        </div>

        </>
    )
}


export default Project
