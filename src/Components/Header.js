import '../styles.css'

const Header = () => {

    return (
        <div className="header">
            <h1 className="logo">Allison Leggett</h1>
            <div className="header-body">
                <h2 className="body-title">web development & design</h2>
                <p className="body-subtitle">A selection of my latest work. If you enjoy what you see, feel free to <a className="contact-link" href="#">contact me</a>!</p>
            </div>
        </div>  
    );
}


export default Header;

