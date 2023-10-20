import './navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="nav--logodiv">
                <img src='./myicon.png' alt='logo' className='nav--logo'/>
            </div>
           
            <div className="nav--search">
                <input 
                    type="text" 
                    placeholder="search..." 
                    className="nav--searchbar" 
                />
                <button className='nav--searchbutton'>
                    Search
                </button>
            </div> 

            <div className='nav--items'>
                <div className="nav--item">Archive</div>
                <div className="nav--item">About</div>
                <div className="nav--item">Contact</div>
            </div>
        </div>
    );
}

export default Navigation;
