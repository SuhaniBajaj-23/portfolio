import './index.css';

const Skills = (props) => (
    <div className="card">
        <div className='head'>
            <div className='icon'>{props.icon}</div>
            <div className='icon'>{props.skill}</div>
        </div>
        <div className='description'>
            <div className='left'>
                &lt;&gt;
                    <div className='v1'></div>
                &lt;/&gt;
            </div>
            <div className='right'>
                <span>{props.description}</span>
            </div>
        </div>
    </div>
);

export default Skills; 