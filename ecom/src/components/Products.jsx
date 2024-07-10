import React from 'react'
import Productscoverimage from './Productscoverimage'
import Productsdetailssection from './Productsdetailssection'
import '../Productsstyle.css'
import { useState } from 'react'
import image1 from '../updatedimages/Product-1-Smart-Solar-Panel.jpg'
import image2 from '../updatedimages/Product 2 Solar-Rooftop.jpg'
import image3 from '../updatedimages/Product-3-Solar-Water-Pump.jpg'
import image4 from '../updatedimages/Product-4-Solar-Module.jpg'

const Products = () => {
  const [items,Setitems]=useState(
    [ {id:1,title:'Solar Roof-Top',content:"Tropical countries receive a lot of sunlight, up to 12 hours per day on average, regardless of the season. This makes them ideal for solar energy production. Solar rooftops are a type of solar panel system that is installed on the roof of a building. Solar rooftops can be installed on any type of building, including residential homes, commercial businesses, and government buildings They are a great way to reduce a building's reliance on fossil fuels and save money on electricity bills.",image:image1},
      {id:2,title:"Smart Solar Meter",content:"The smart meters are modular and use PLC, RF, or Hybrid PLC+RF communication modules based on the open standard G3-PLC. They can connect to customers’ BLE-based DIN meters, both 1-phase and 3-phase direct. Smart meters can track energy usage and remotely communicate with utility monitors. The smart meters have a modular design and multiple communication options. They can connect to customers’ BLE-based DIN meters and track energy usage in real-time. The smart meters can remotely communicate with utility monitors. The benefits of using smart meters include improved energy efficiency, reduced energy costs, improved grid reliability, and increased customer satisfaction.",image:image2},
      {id:3,title:"Solar Module Manufacturing",content:"CS Max is a leading manufacturer of solar PV modules. They offer a wide range of modules, including monocrystalline, polycrystalline, and thin-film modules. Their modules are designed to meet the needs of a variety of applications, including residential, commercial, and utility-scale projects. The solar PV modules feature high efficiency, durability, and reliability. The benefits of using their solar PV modules include reduced energy costs, increased property value, and environmental benefits.",image:image3},
      {id:4,title:"SWP (Solar Water Pump)",content:"CS Max offers solar water pumps that are a sustainable, environmentally friendly, and cost-effective alternative to traditional water pumps. They are easy to install and maintain, and they can be used for a variety of applications. If you are looking for a way to reduce your water costsand your environmental impact, a solar water pump is a great option.",image:image4}])
  return (
    <div>
      <Productscoverimage/>
      <Productsdetailssection items={items}/>
    </div>
  )
}

export default Products
