import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'
import data from './tech';
import { useEffect } from 'react';
import { useState } from 'react';
const Technology = () => {
    console.log(data)
    const [tech, setTech] = useState('')
    const params = useParams();
    const history = useHistory();
    useEffect(() => {
        setTech(data.find((e) => e.name === params?.technology))
    }, [params])
    useEffect(() => {console.log(tech)}, [tech])
    return (
        <>
        <div className='techPage'>

            <h1 className='techName'>{tech?.name}</h1>
            <div className='allTech'>
                {tech?.items?.map((item) => (
                    <div className='oneTech'>
                        <div className='techTitle'>
                            <p>{item?.name}<span><img alt={item?.name} src={item?.src} className='techImage'/></span></p>

                        </div>
                        <p>{item?.years} Year(s) Experience</p>
                        <div  className='techProjects'>
                            {item?.projects?.map((project) => (
                                <div onClick={() => {window.open(project?.url)}}>
                                    <p className='projectTitle'>{project?.name} - {project?.workType} Project</p>
                                    <p>{project?.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>

        </>
    )
}

export default Technology
