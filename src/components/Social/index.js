import './index.css'
import {AiOutlineInstagram} from "react-icons/ai"
import {AiOutlineTwitter,AiOutlineLinkedin} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
const Social = () => (
    <div className='socials'>
        <div className='email'><HiOutlineMail size={40}/></div>
        <div className='social'><AiOutlineInstagram size={40}/></div>
        <div className='social'><AiOutlineLinkedin size={40}/></div>
        <div className='social'><AiOutlineTwitter size={40}/></div>
    </div>
);

export default Social; 