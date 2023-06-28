import './index.css';
import suhani from '../../assets/MOMM.png';
import vs from '../../assets/vsbg.jpg';
// import Socials from '../Socials';
import Social from '../Social';
import Arrow from '../Arrow';
import Skills from '../Skills';
import Project from '../Project';
import Contact from '../Contact';
import wecare from '../../assets/wecare.jpg';
import cryptobase from '../../assets/cryptobase.jpg';
import iste from '../../assets/iste.jpg';
import {FaReact} from "react-icons/fa";
import {HiDesktopComputer} from "react-icons/hi";
import {AiOutlineBgColors} from "react-icons/ai";
import {GoDotFill} from 'react-icons/go'

const Landing = () => (
    <div className='main'>
        <div className="landing">
        <div className='center'>
            <div className='suhanibajaj'>SUHANI BAJAJ</div>
            <div className='bottom'>
                <span>Frontend Developer</span>
                <GoDotFill size={20}/>
                <span>Software Developer</span>
            </div>
        </div>
        {/* <div className='left'>
            <span>Hello There!</span><br></br><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Ut vitae ex et leo feugiat laoreet. Aliquam lorem nulla, mollis vitae porttitor vitae, maximus eget orci. 
            Quisque lacinia sit amet urna eleifend convallis. Donec eu pellentesque magna. Etiam sit amet diam varius, vulputate velit et, luctus felis. 
            Donec quis sodales turpis. </p><br></br>
            <div className='Labels'>
                <ul>
                    <li>Software Developer</li>
                    <div className='vl'></div>
                    <li>Frontend Developer</li>
                </ul>
            </div>
        </div> */}
        {/* <div className='right'> */}
            {/* <img className='image' src={suhani} alt="img"/> */}
            {/* <div className='social-links'><Socials/></div> */}
        {/* </div> */}
        <div className='arrow'>
            <Arrow/>
        </div>
        </div>
        <div className='skills'>
            <div className='heading'>My Expertise</div>
            <div className='cards'>
                <Skills 
                icon=<HiDesktopComputer size={50}/>
                skill="Software Development" 
                        description="Experiencd in both functional and OOP: python, java, javascript, cpp"
                />
                <Skills icon=<FaReact size={50}/>
                skill="FrontEnd Development"
                        description="Over a year of development experience in HTML, CSS, JS and React"
                />
                <Skills 
                icon=<AiOutlineBgColors size={50}/>
                skill="UI/UX designing"
                        description="Experienced in using basic designing softwares: figma, photoshop, illustrator"

                />
            </div>
            <img className='vs' src={vs} alt=""/>

        </div>
        <div className='projects'>
            <div className='heading'>My<br/> Work</div>
            <div className='cards'>
                <Project link='https://github.com/SuhaniBajaj-23/WeCare' 
                        image={wecare}
                        description='A cloths donation website' 
                        name='WeCare'/>
                <Project link='https://github.com/SuhaniBajaj-23/CryptoBase' 
                        image={cryptobase} 
                        description='Crypto Portfolio Management Website' 
                        name='CryptoBase'/>
                <Project link='https://github.com/ISTE-VIT/ISTEVIT-2021' 
                        image={iste} 
                        description="ISTE VIT's official website for 2021-22"
                        name='ISTE Official Website'/>

            </div>
        </div>
        <div className='contact'>
            <Contact/>
        </div>
        <div className='social'>
            <Social/>
        </div>
    </div>
);

export default Landing;