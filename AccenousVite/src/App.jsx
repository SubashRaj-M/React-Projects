import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../../AccenousReact/src/components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
      <header>
      <nav className="navbar-background">
        <ul className='nav-list'>
          <div className='logo'>
            <img src="./src/assets/Accenous-Integrals-horizontal-logo.png" />
          </div >
            <li>
               <b>HOME</b> 
            </li>
            <li>
                <b>SERVICES</b>
            </li>
            <li>
                <b>ABOUT</b>
            </li>
            <li>
                <b>CONTACT US</b>
            </li>
            <li>
                <b>WORK SHOPS</b>
            </li>
            
        </ul>
        </nav>
      
      </header>
      

      </div>
      <section className="content1">
        <h3 className="site-title">
          Pegasus of Solutions
          </h3>
          <p className="site-description">Accenous Integrals is a firm that is passionate about making an impact on
people’s life including their employees. We provide services that help business
grow to top echelon with the utmost satisfaction of our clients.</p>
          </section>
          <div className='below-para'>
            <button className='viol'>Schedule Now</button>
            <button className='grey'>Contact Us</button>
          </div>
          <div>
            <div className='features'>
              <h3>With all the Features You need</h3>
              
            </div>
            <div className='ab-logo'>
            <div className='f-logo'><img src='./src/assets/asset 1.png'/></div>
            <div className='f-logo'><img src='./src/assets/asset 2.png'/></div>
            <div className='f-logo'><img src='./src/assets/asset 3.png'/></div>
          </div>
            <div className='b-fea'>
            <div className='f1'><h3>Good Performance</h3></div>
              <div className='f1'><h3>Highly Secure</h3></div>
              <div className='f1'><h3>Fast Development</h3></div>
            </div>
            
            <div className='ab-fl'>
            <div className='f-ab'><p>Delivers good quality of products and service</p></div>
            <div className='f-ab'><p>Professional data security services you can depend on</p></div>
            <div className='f-ab'><p>Build apps with blazing fast speed and incredible performance</p></div>
          </div>
          </div>

          
    
          </>
  )
}

export default App
