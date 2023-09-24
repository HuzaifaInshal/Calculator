import React from 'react'
import Image from '/assets/Iam.png'
import Logo from '/assets/Logo.png'
import Ellipse from '/assets/Ellipse.png'
import Two from '/assets/Two.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="main">
        <div className="container">
        <div className="main-1">
            <div className="logoHolder">
                <img src={Logo} alt="" className='logo' />
                <h1 className="title">Calculator</h1>
                <div className="version">v1.0</div>
            </div>
            <div className="newFresh">New Fresh Design</div>
            <h1 className="title-1">A Free Calculator App for User</h1>
            <Link to={"/calc"} className='btn'>Lets Begin</Link>
        </div>
        <div className="main-2">
            <img src={Image} alt="" className='image'/>
        </div>
        <img className="absolute el" style={{top:10,left:480}} src={Ellipse}/>
        <img className="absolute re" style={{top:35,left:430}} src={Two} />
        <img className="absolute el" style={{bottom:65,left:88}} src={Ellipse}/>
        <img className="absolute re" style={{bottom:105,left:44}} src={Two}/>
        <img className="absolute el" style={{top:450,right:12}} src={Ellipse}/>
        </div>
    </section>
  )
}

export default Home