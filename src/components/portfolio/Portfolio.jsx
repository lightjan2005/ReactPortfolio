import React, {useEffect, useState} from 'react'
import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import{
  allProjects,
  webApp,
  api,
  database,
  other
} from "../../projects.js"

export default function Portfolio() {
  
  const [selected,setSelected] = useState("all");
  const [data, setdata] = useState([]);
  const list = [
    {
      id: "all",
      title: "All Projects",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "api",
      title: "API",
    },
    {
      id: "database",
      title: "Database",
    },
    {
      id: "other",
      title: "Other",
    },
  ]

  useEffect(()=>{
    switch(selected){
      case "all":
        setdata(allProjects);
        break;
      case "web":
        setdata(webApp);
        break;
      case "api":
        setdata(api);
        break;
      case "database":
        setdata(database);
        break;
      case "other":
        setdata(other);
        break;
      default:
        setdata(allProjects);
    }

  },[selected])

  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) =>(
            <div className="item">
              <img src={d.img} alt=""/>
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
