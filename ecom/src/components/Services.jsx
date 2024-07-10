import React from 'react'
import '../Servicesstyle.css'
import Servicesdetailssection from './Servicesdetailssection'
import Sectioncoverimage from './Sectioncoverimage'
import Servicesgreensection from './Servicesgreensection'
import Servicesgridsection from './Servicesgridsection'
import { useState } from 'react'
import image1 from '../updatedimages/Service1-Wind-Power.jpg'
import image2 from '../updatedimages/Services-2-Solar-Power.jpg'
import image3 from '../updatedimages/Services-3 Consultancy.jpg'
import image4 from '../updatedimages/Services-4-Hybrid-Power.jpg'
import image5 from '../updatedimages/Services-Solar-Special-Service.jpg'
import image6 from '../updatedimages/E-Waste-Management-Service.jpg'
import image7 from '../updatedimages/Repowering-Service.jpg'
import image8 from '../updatedimages/Services-3 Consultancy.jpg'
const Services = () => {
  const [services,Setservices]=useState([
    {id:1,
    title:"Wind Power",
    content:"We offer Single Window EPC solutions that include Resource Assessment, Permits and Approval, Land Development EPC, and Erection & Commissioning.",
    image:image1
  },
  {id:2,
    title:"Solar Power",
    content:"We offer comprehensive EPC solutions for a variety of solar projects, including off-grid commercial applications, roof-mounted systems, ground-mounted systems.",
    image:image2
  },
  {id:3,
    title:"Asset Management",
    content:"We offer comprehensive operations and maintenance services for wind and solar farms, covering all components from wind turbine generators and solar panels, across India and Asia.",
    image:image3
  },
  {id:4,
    title:"Consultancy",
    content:"Our consultancy services are professional services that help clients achieve their sustainability goals and transition to low-carbon energy sources. They provide expertise in areas such as climate change, renewable energy, energy efficiency, and green business development.",
    image:image4
  },
  {id:5,
    title:"Solar Special Projects",
    content:"Solar special projects can include, smart meters, solar pump, battery chargers, charging stations, USB chargers, mosquito repellent devices, these projects use solar energy, a renewable and clean source of energy that can reduce greenhouse gas emissions and dependence on fossil fuels.",
    image:image5
  },
  {id:6,
    title:"E Waste Management",
    content:"At Cs Max, we offer professional and reliable e-waste management services to help you reduce your environmental impact and save money. We collect, sort, dismantle, and process your e-waste using advanced technologies and methods that ensure efficiency, safety, and sustainability.",
    image:image6
  },
  {id:7,
    title:"Re Powering",
    content:"Repowering solar equipment is a process of upgrading and replacing old or damaged solar components with new and more efficient ones. It can improve the performance,  reliability,and lifespan of solar power plants, as well as reduce the costs of operation and maintenance.  Repowering can help solar power plants achieve higher energy yields and lower carbon emissions.",
    image:image7
  },
  {id:8,
    title:"Hybrid Power",
    content:"Our mission is to provide cost-effective and dependable solutions for integrating renewable energies into the power grid",
    image:image8
  },
  
  ])
  return (
    <div>
      <Sectioncoverimage/>
      <Servicesdetailssection services={services}/>
      <Servicesgreensection/>
      <Servicesgridsection/>
    </div>
  )
}

export default Services
