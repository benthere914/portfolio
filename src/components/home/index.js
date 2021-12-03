import './index.css'
const Home = () => {
    const aboutMeText = `I'm a Jesus lovin, Texas bred, southern man who loves to program.
    I first started to write code when I was 8 years old. Way back then, my father started to teach me html,
    which evolved into me learning javascript and then java.Now that I'm 24 years old, I have programmed in
    several languages, frameworks and used all sorts of different technologies.`
    return (
        <>
            <div className='homePage'>
                <h2>Benjamin Rose</h2>
                <h2>Software Engineer</h2>
                <img src='https://ca.slack-edge.com/T03GU501J-U025530QL2Y-2ef5d624b3d3-512'></img>
                <h2>About Me</h2>
                <div className='aboutMeText'>
                    <p>{aboutMeText}</p>
                </div>
            </div>
        </>
    )
}

export default Home
