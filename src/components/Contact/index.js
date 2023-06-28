import './index.css';
import suhani from "../../assets/MOMM.jpg"

const   Contact = (props) => (
    <div className="contact">
        <div className='left'>
            <img className='suhani' src={suhani} alt=''/>
        </div>
        <div className='right'>
            <div className='heading'>
                Get In Touch
            </div>
            <form>
            <div className='fields'>
                <label>Name</label><br/>
                <input type='text' name='name'></input>
            </div>
            <div className='fields'>
                <label>Email</label><br/>
                <input type='email' name='email'></input>
            </div>
            <div className='fields'>
                <label>Message</label><br/>
                <input type='text' name='message'></input>
            </div>
            <div className='fields'>
                <button>Submit</button>
            </div>
            
                
            </form>
        </div>
    </div>
);

export default Contact; 