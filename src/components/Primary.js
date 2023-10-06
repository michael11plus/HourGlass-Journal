import './primary.css';
import NewsActual from './NewsActual';
import newsData from '../data/newsData';

const Primary = () => {
    return(
        <div className='primary'>
            <div className='primary--actual'>
                <div className='primary--actual--title'>
                    Breaking news 
                </div>
                <div className='primary--actual--content'>
                    {newsData.map((news, index) => (
                    <NewsActual
                        key={index}
                        picture={news.picture}
                        title={news.title}
                        location={news.location}
                        text={news.text}
                        published={news.published}
                        author={news.author}
                    />
                    ))}
                </div>
            </div>
            <div className='primary--historical'>
                
            </div>
        </div>
    )
}

export default Primary;
