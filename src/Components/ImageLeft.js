import '../styles.css';

const ImageLeft = (props) => {


    return (
        
        <div className="row">
            <div className="portfolio-img">
                <img src={props.img}></img>
            </div>
            <div className="col">
                <h2 className="subtitle">{props.title}</h2>
                <p>{props.body}</p>
                <p className="bold">{props.stack}</p>
                <div>
                    <a className="btn" href={props.repo} target="_blank">explore code</a>
                    <a className="btn" href={props.link} target="_blank">live demo</a>
                </div>
            </div>
        </div>
        
        
    );
}

export default ImageLeft;