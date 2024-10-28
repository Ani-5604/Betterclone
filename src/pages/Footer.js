// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Better</h3>
        <p>Better is a family of companies serving all your homeownership needs.</p>
        <p>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
      </div>

      <div className="footer-section">
        <h4>Services</h4>
        <p>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
        <p>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
        <p>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
        <p>Get transparent rates when you shop for title insurance all in one convenient place.</p>
      </div>

      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><Link href="#">Home affordability calculator</Link></li>
          <li><Link href="#">Mortgage calculator</Link></li>
          <li><Link href="#">Free mortgage calculator</Link></li>
          <li><Link href="#">Mortgage calculator with taxes</Link></li>
          <li><Link href="#">Mortgage calculator with PMI</Link></li>
          <li><Link href="#">Rent vs buy calculator</Link></li>
          <li><Link href="#">HELOC payment calculator</Link></li>
          <li><Link href="#">HELOC vs cash-out refinance calculator</Link></li>
          <li><Link href="#">Buy a home</Link></li>
          <li><Link href="#">Sell a home</Link></li>
          <li><Link href="#">Get home inspection</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Careers</Link></li>
          <li><Link href="#">Media</Link></li>
          <li><Link href="#">Partner With Us</Link></li>
          <li><Link href="#">Learning center</Link></li>
          <li><Link href="#">FAQs</Link></li>
          <li><Link href="#">Investor Relations</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:hello@better.com">hello@better.com</a></p>
        <p>Phone: <a href="tel:+14155238837">415-523-8837</a></p>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><Link href="#">NMLS Consumer Access</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
          <li><Link href="#">Terms of Use</Link></li>
          <li><Link href="#">Disclosures & Licensing</Link></li>
          <li><Link href="#">Affiliated Business</Link></li>
          <li><Link href="#">Browser Disclaimer</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
