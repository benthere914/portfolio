import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'
import data from './tech'
const Technologies = () => {
    const history = useHistory()


    return (
        <>
            <div className='technologyGrid'>
                {data?.map((tech) => (
                    <div onClick={() => {history.push(`/Technologies/${tech?.name}`)}}>
                        <p>{tech?.name}</p>
                        <div className='techImages'>
                            <img alt={tech?.alt1} src={tech?.src1}/>
                            <img alt={tech?.alt2} src={tech?.src2}/>
                            <img alt={tech?.alt3} src={tech?.src3}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Technologies
