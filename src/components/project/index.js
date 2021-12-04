import './index.css'
import { projectData } from './projects'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
const Project = () => {
    const params = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        setData(projectData[params.projectName])
    }, [params])
    return (
        <>
        <div className='projectPage'>
            <div>
                <h2 className='siteName'>{data?.name}</h2>
                <div className='screenshot'>
                    <img alt='website screenshot' src={data?.image}></img>
                </div>
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
