import './newsactual.css';

const NewsActual = (props) => {
    return(
        <div className='newsactual'>
            
            <img src={props.picture} alt='Preview' className='newsactual--picture'/>
            
            <div className='newsactual--content'>
                <div className='newsactual--content--type'>
                 {props.titule}
                </div>
                <div className='newsactual--content--title'>
                    {props.title}
                </div> 
                <div className='newsactual--content--text'>
                    {props.text}
                </div>
                <div className='newsactual--content--access'>
                    <div className='newsactual--content--location'>
                        <img src='./images/locationtag.png' alt='Location tag' className='newsactual--content--locationtag' />
                        <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.location)}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='newsactual--content--location--place'>
                            {props.location}
                        </a>
                    </div>
                    <div className='newsactual--content--published'>
                        {props.published}
                    </div>
                </div>
                <div className='newsactual--content--author'>
                        - {props.author} -
                </div>
            </div>
        </div>
    )
}

export default NewsActual;
