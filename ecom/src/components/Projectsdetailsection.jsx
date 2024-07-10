import React from 'react'

const Projectsdetailsection = ({items}) => {
  return (
    <section className="container py-5 my-4">
         <h2 className="text-green">Projects</h2>
         <div className="row g-4 py-4">
            {items.map(i=><div className="col-12 col-md-4 reveal" key={i.id}>
                    <img src={i.image} className="img-fluid border card-img"/>
                    <div className="p-4 border card-text">
                        <h3>{i.title}</h3>
                        <p className="py-2 project-cards">{i.content}</p>
                    </div>
                </div>)}
         </div>
    </section>
  )
}

export default Projectsdetailsection
