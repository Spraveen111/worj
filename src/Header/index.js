import './index.css'
function Header(){
    return(
        <div className='mainHeader'>
            <div><h1 className="logo">E-Buy</h1></div>
        <nav>
        
          <ul className='uli'>
            <li className='lisstPage'><a href='/'>Home</a></li>
            <li className='lisstPage'><a href='/products'>Products</a></li>
            <li className='lisstPage'> <a href='/contact'>Contact</a></li>
          </ul>
         
        </nav>
        <div>
          <button type='button' className='button'><a href='/sign'>SignIn</a></button>
          <button type='button' className='button'><a href='/cart'>Cart</a></button>
          </div>
      </div>
      
    )
}

export default Header