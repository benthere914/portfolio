import './index.css'
import { useHistory } from "react-router"
const Header = () => {
    const history = useHistory()
    return (
        <>
            <ul className='headerList'>
                <li onClick={() => {history.push('/')}}>
                    <p>Home</p>
                </li>
                <li onClick={() => {history.push('/About')}}>
                    <p>About Me</p>
                </li>
                <li onClick={() => {history.push('/Contact')}}>
                    <p>Contact</p>
                </li>
                <li onClick={() => {history.push('/Projects')}}>
                    <p>Projects</p>
                </li>
            </ul>
        </>
    )
}


export default Header
