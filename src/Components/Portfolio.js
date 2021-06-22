import beeHive from '../images/beeHive.jpg';
import musicShop from '../images/music.jpg';
import skateboardImg from '../images/skateboard.jpg';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';
import '../styles.css'


const Portfolio = () => {

    const projects = [
        {
            name: "The Music Shop",
            body: "The Music Shop was a fun project I designed with the intent of using CSS properties like clip-path: polygon(), Grid, and absolute positioning.",
            img: musicShop,
            stack: "HTML, Sass, Parcel",
            link: "https://themusicshop.netlify.app",
            repo: "https://github.com/Alliemack77/TheMusicShop",
            key: 1
        },

        {
            name: "The BeeHive",
            body: "The BeeHive is a networking platform for neurodiverse IT professionals who are looking for career support and community. I developed this project along with my classmates as part of my final project at Digital Career Institute. My role was design and frontend.",
            img: beeHive,
            stack: "React, Redux, Sass, Axios, GitLab ",
            link: "https://thebeehivenetwork.netlify.app",
            repo: "https://github.com/Alliemack77/TheBeeHive",
            key: 0
        },

        {
            name: "The Skate Shop",
            body: "The Skate Shop is an exploration of layout with CSS Flexbox. I created this landing page as an exercise in Flexbox functionality and all it has to offer.",
            img: skateboardImg,
            stack: "HTML, CSS, JavaScript",
            link: "https://theskateshop.netlify.app",
            repo: "https://github.com/Alliemack77/The-Skate-Shop",
            key: 2
        }

        
    ]

    return (

        <div>
            { projects.map( (el, index) => {
                if (index === 0 || index % 2 === 0) {
                    return (
                        <div className="wrapper bg-light" >
                            <ImageLeft img={el.img} title={el.name} body={el.body} stack={el.stack} link={el.link} repo={el.repo} key={el.key}/>
                        </div>
                    );
                }else {
                    return (
                        <div className="wrapper">
                            <ImageRight img={el.img} title={el.name} body={el.body} stack={el.stack} link={el.link} repo={el.repo} key={el.key}/>
                        </div>
                    );
                };
            })}
        </div>
    );
}

export default Portfolio;



// <div className="wrapper">
//     <ImageLeft img={projects[2].img} title={projects[2].name} body={projects[2].body}/>
// </div>