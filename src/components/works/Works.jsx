import {React,useState,} from 'react'
import "./works.scss"
export default function Works() {
  const[currentSlide, setCurrentSlide] = useState(0);
  const data =[
    {
      id: 1,
      title: "JamoutApp",
      img:"https://i.postimg.cc/1XPszHV4/jamout.png",
      repoURL:"",
      websiteURL:"https://jamout.azurewebsites.net/#/",
      description:"This is a website for people who enjoy music to get together and Jamout.",
      icon:"assets/globe.png",
      technologies: ["Angular","Node.js","Express.js","TypeScript","Mongodb","Mongoose","JavaScript","Azure"]
    },
    {
      id: 2,
      title: "Basketball testing",
      img:"https://i.postimg.cc/wMqdH8xt/Basketball.png",
      repoURL:"https://github.com/lightjan2005/CPSC5210Team7",
      websiteURL:"",
      description:"",
      icon:"",
    },
    {
      id: 3,
      title: "Image Processor API",
      img:"https://i.postimg.cc/Kzc98ZLy/image-Process-API.png",
      repoURL:"https://github.com/lightjan2005/imageProcessAPI",
      websiteURL:"",
      description:"",
      icon:"",
    },
    {
      id: 4,
      title: "Address Searcher API",
      img:"https://i.postimg.cc/g0bz57hh/Address-Search-API.png",
      repoURL: "https://github.com/ChungNYCU/address-search-api",
      websiteURL:"",
      description:"",
      icon:"",
    },
    {
      id: 5,
      title: "Pacman game",
      img:"https://i.postimg.cc/TYZ5dCmd/pacman.jpg",
      repoURL: "https://github.com/lightjan2005/AI",
      description:"",
      icon:"",
    },
    {
      id: 6,
      title: "Traveling Fun Website",
      img:"https://i.postimg.cc/fLcQdWqq/Traveling-Fun.png",
      repoURL: "https://github.com/eliogilvy/NotUW.TravellingFan",
      description:"",
      icon:"assets/globe.png",
    },
    {
      id: 7,
      title: "Health Clinic Database",
      img:"https://i.postimg.cc/zfMPfmJt/Health-Link.png",
      repoURL: "https://github.com/lightjan2005/databaseSystems",
      description:"",
      icon:"",
    },
    {
      id: 8,
      title: "JQuery Personal Website",
      img:"https://i.postimg.cc/7PBwnhYj/Jquery-website.png",
      repoURL: "https://github.com/lightjan2005/lightjan2005.GitHub.io",
      websiteURL: "https://lightjan2005.github.io/",
      description:"",
      icon:"assets/globe.png",
    },
    {
      id: 9,
      title: "Taiwanese Website",
      img:"https://i.postimg.cc/vmGNK70h/Taiwanese-website.png",
      repoURL: "https://github.com/lwtech-edu/web-project-lightjan2005",
      websiteURL:"http://ddion.com/htmlf19pm/Kai_Chan/",
      description:"",
      icon:"assets/globe.png",
    },
  ]

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1: data.length - 1) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide+1 : 0)
  }

  return (
    <div className='works' id='works'>
        <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
          {data.map((d) => (
            <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""/>
              </div>
            </div>
          </div>
          ))}
        </div>
        <img src='assets/arrow.png' className='arrow left' alt='' onClick={()=>handleClick("left")}/>
        <img src='assets/arrow.png' className='arrow right' alt='' onClick={()=>handleClick("right")}/>
    </div>
  )
}
