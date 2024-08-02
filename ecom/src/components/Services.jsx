import React from 'react'
import '../Servicesstyle.css'
import Servicesdetailssection from './Servicesdetailssection'
import Sectioncoverimage from './Sectioncoverimage'
import Servicesgreensection from './Servicesgreensection'
import Servicesgridsection from './Servicesgridsection'
import { useState } from 'react'
import image1 from '../updatedimages/mouse.jpeg'
import image2 from '../updatedimages/keyboard.jpeg'
import image3 from '../updatedimages/printer.jpeg'
import image4 from '../updatedimages/scanner.jpeg'
import image5 from '../updatedimages/router.jpeg'
import image6 from '../updatedimages/webcam.jpeg'
import image7 from '../updatedimages/laptopbag.jpeg'
import image8 from '../updatedimages/monitor.jpeg'
const Services = () => {
  const [services,Setservices]=useState([
    {id:1,
    title:"Mouse",
    content:"A sleek, ergonomic mouse offering precision, comfort, and customizable buttons, perfect for both work and gaming.",
    image:image1
  },
  {id:2,
    title:"Keyboard",
    content:"A stylish, backlit keyboard with responsive keys, customizable shortcuts, and ergonomic design for enhanced productivity and comfort.",
    image:image2
  },
  {id:3,
    title:"Printer",
    content:"A high-speed printer delivering crisp, clear prints, wireless connectivity, and efficient ink usage for home or office needs.",
    image:image3
  },
  {id:4,
    title:"Scanner",
    content:"A high-resolution scanner with fast, accurate document and photo digitization, easy-to-use software, and multiple format support.",
    image:image4
  },
  {id:5,
    title:"Router",
    content:"A powerful router providing fast, reliable Wi-Fi coverage, advanced security features, and easy setup for seamless connectivity.",
    image:image5
  },
  {id:6,
    title:"Web Camera",
    content:"A high-definition web camera offering crystal-clear video, auto-focus, and built-in microphone for superior online communication and streaming.",
    image:image6
  },
  {id:7,
    title:"Laptop Bag",
    content:"A durable, stylish laptop bag with padded compartments, multiple pockets, and adjustable straps for secure and comfortable transport.",
    image:image7
  },
  {id:8,
    title:"Monitor",
    content:"A high-definition monitor featuring vibrant colors, wide viewing angles, and adjustable stand for an immersive and ergonomic experience.",
    image:image8
  },
  
  ])
  return (
    <div>
      <Sectioncoverimage/>
      <Servicesdetailssection services={services}/>
      
    </div>
  )
}

export default Services
