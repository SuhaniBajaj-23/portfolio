import './index.css';

const Project = (props) => (
    <div className="cardP">
    <a href={props.link}>
        <div className='head'>
            <img src={props.image} alt=""/>
        </div>
        <div className='description'>
            <div className='left'>
                {props.name}
            </div>
            <div className='right'>
            {props.description}
            </div>
        </div>
        </a>
    </div>
);

export default Project; 