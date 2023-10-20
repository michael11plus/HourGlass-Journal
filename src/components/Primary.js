import './primary.css';
import NewsActual from './NewsActual';
import Gallery from './Gallery';
import { newsData, galleryData } from '../data/newsData';

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
                <div className='primary--actual--title'>
                    Editor's pick
                </div>
               
                <Gallery />
                
            </div>
        </div>
    )
}

export default Primary;
