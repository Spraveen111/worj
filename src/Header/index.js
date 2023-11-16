import './index.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <div className='mainHeader'>
            <div><h1 className="logo">E-Buy</h1></div>
        <nav>
        
          <ul className='uli'>
            <li className='lisstPage'><Link to='/'>Home</Link></li>
            <li className='lisstPage'><Link to='/products'>Products</Link></li>
            <li className='lisstPage'> <Link to='/contact'>Contact</Link></li>
          </ul>
         
        </nav>
        <div>
          <button type='button' className='button'><Link to='/sign'>SignIn</Link></button>
          <button type='button' className='button'><Link to='/cart'>Cart</Link></button>
          </div>
      </div>
      
    )
}

export default Header