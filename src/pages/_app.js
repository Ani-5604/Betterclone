// _app.js
import '../app/globals.css';
import Link from 'next/link';
import Footer from './Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div >
           
           <nav className='navbar'>
        <Link href="/" className='buttonLink'>Home</Link>
        <Link href="/about"  className='buttonLink'>About</Link>
        <Link href="/calculator"className='buttonLink'>Calculator</Link>
        
   
      
      </nav>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
}

export default MyApp;
