import React from 'react'
import '../Projectsstyle.css'
import Projectscoverimage from './Projectscoverimage'
import Projectsdetailsection from './Projectsdetailsection'
import image1 from '../updatedimages/Project1.jpg'
import image2 from '../updatedimages/Project2.jpg'
import image3 from '../updatedimages/Project4.jpg'
import image4 from '../updatedimages/Project3.jpg'
import { useState } from 'react'
const Projects = () => {
  const [items,Setitems]=useState(
    [ {id:1,title:"Strengthening Solar Supply Chain",content:"Solar technology has been improving rapidly in recent years. This is making solar panels more efficient and reliable. The expansion of the solar supply chain is a positive development for the environment and the economy.",image:image1},
      {id:2,title:"Improved Turbine Design & Increased scale",content:"Wind turbines have become more efficient and reliable in recent years, thanks to improvements in design. This has made them more cost-effective to operate, and has helped to drive down the cost of wind energy.",image:image2},
      {id:3,title:"Electric Vechile charging system",content:"Solar-powered EV charging stations offer increased availability, lower costs, sustainability, and flexibility. They can be installed anywhere there is sunlight, and can be generated and stored in a variety of ways.",image:image3},
      {id:4,title:"Solar Energy Monitoring & Maintenance",content:"This topic will discuss the steps you can take to maintain your solar energy system, including cleaning the panels and inspecting the wiring.",image:image4}]
  )
  return (
    <div>
      <Projectscoverimage/>
      <Projectsdetailsection items={items}/>
    </div>
  )
}

export default Projects
