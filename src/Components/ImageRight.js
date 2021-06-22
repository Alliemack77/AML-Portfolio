import '../styles.css';

const ImageRight = (props) => {

    return (
        <div className="row">
            <div className="col">
                <h2 className="subtitle">{props.title}</h2>
                <p>{props.body}</p>
                <p className="bold">{props.stack}</p>
                <div>
                    <a className="btn btn-dark" href={props.repo} target="_blank">explore code</a>
                    <a className="btn btn-light" href={props.link} target="_blank">live demo</a>
                </div>
            </div>
            <div className="portfolio-img">
                <img src={props.img}></img>
            </div>
        </div>
    );
}

export default ImageRight;