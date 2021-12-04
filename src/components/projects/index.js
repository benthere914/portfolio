import { useHistory } from 'react-router'
import './index.css'
const Projects = () => {
    const history = useHistory()
    return (
        <>
        <div className='projectsPage'>
            <div onClick={() => {history.push('/Projects/Acquire')}}>
                <h2>Acquire</h2>
                <img alt='website screenshot' src='https://user-images.githubusercontent.com/8016326/142956978-3baea7af-7e2f-4235-84e6-c9caac3acc92.png'></img>
                <p>Solo Project</p>
            </div>
            <div onClick={() => {history.push('/Projects/Auto_BnB')}}>
                <h2>Auto-BnB</h2>
                <img  alt='website screenshot' src='https://user-images.githubusercontent.com/8016326/144485593-94203d73-a28e-4cbd-b513-3bad523502c4.png'></img>
                <p>Solo Project</p>
            </div>
            <div onClick={() => {history.push('/Projects/Discuss')}}>
                <h2>Discuss</h2>
                <img alt='website screenshot' src='https://camo.githubusercontent.com/0fe6b6a1be0e560ed21011d3c68dc8d94a80f2e35e426b13f2ca3ef36965c2ca/68747470733a2f2f696d6775722e636f6d2f315730453547532e706e67'></img>
                <p>Group Project</p>
            </div>
            <div onClick={() => {history.push('/Projects/Equilibrium')}}>
                <h2>Equilibrium</h2>
                <img alt='website screenshot' src='https://user-images.githubusercontent.com/8016326/144483962-c0f5a459-537a-4025-9ff6-8a677377e258.png'></img>
                <p>Group Project</p>
            </div>
        </div>
        </>
    )
}

export default Projects
