import React from 'react'
import '../Projectsstyle.css'
import Projectscoverimage from './Projectscoverimage'
import Projectsdetailsection from './Projectsdetailsection'
import image1 from '../updatedimages/cable1.jpeg'
import image2 from '../updatedimages/cable2.jpeg'
import image3 from '../updatedimages/cable3.jpeg'
import image4 from '../updatedimages/cable4.jpeg'
import { useState } from 'react'
const Projects = () => {
  const [items,Setitems]=useState(
    [ {id:1,title:"USB type B cable",content:"USB B cables are essential for connecting printers and other peripherals to your computer. These cables are known for their durability and reliable data transfer capabilities. The advancement in USB technology has enhanced connectivity and efficiency, making USB B cables a vital component for any tech setup",image:image1},
      {id:2,title:"USB type B to OTG",content:"USB B to OTG cables are indispensable for connecting various peripherals to your mobile devices. These cables enable seamless data transfer and device control. The progression in OTG technology has improved versatility and reliability, making USB B to OTG cables an essential accessory for on-the-go connectivity.",image:image2},
      {id:3,title:"USB Charger",content:"Chargers are crucial for keeping your devices powered up and ready to use. Modern chargers offer fast and efficient charging, ensuring your gadgets are always operational. The advancement in charging technology has enhanced convenience and reliability, making chargers an indispensable accessory for everyday life.",image:image3},
      {id:4,title:"USB B to Type C",content:"USB B to Type C cables are essential for connecting older devices to modern laptops and smartphones. These cables ensure fast and reliable data transfer and charging. The advancement in Type C technology has improved compatibility and performance, making USB B to Type C cables a vital accessory for seamless connectivity.",image:image4}]
  )
  return (
    <div>
      <Projectscoverimage/>
      <Projectsdetailsection items={items}/>
    </div>
  )
}

export default Projects
