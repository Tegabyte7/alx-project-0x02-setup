import Link from 'next/link'


const Header: React.FC = () => {
  return (
    <header> 
    	<nav>
			<ul>
				<li className=""><Link href="/home">Home</Link></li>
				<li className=""><Link href="/about">About</Link></li>
			</ul>
		</nav>
    </header>
  )	
}
export default Header;
