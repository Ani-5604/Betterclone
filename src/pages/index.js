import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the phone icon
const ratingsData = [
  {
    name: 'Arian',
    rating: '4.4 out of 5',
    image: '/arian.jpg',
    comment: 'Arian’s feedback has been incredibly helpful!',
  },
  {
    name: 'Amanda',
    rating: '4.4 out of 5',
    image: '/amanda.jpg',
    comment: 'Amanda consistently delivers high-quality work.',
  },
  {
    name: 'Paul',
    rating: '4.4 out of 5',
    image: '/Paul.jpg',
    comment: 'Paul\'s attention to detail is unmatched.',
  }]
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSection, setSelectedSection] = useState('products'); // Set default section to 'products'
  const [showBuyDropdown, setShowBuyDropdown] = useState(false); // State for dropdown visibility
  const [showRefinanceDropdown, setShowRefinanceDropdown] = useState(false); // State for dropdown visibility

  const [showRatesDropdown, setShowRatesDropdown] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ratingsData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  
  const [showNumber, setShowNumber] = useState(false);


  const handleBuyClick = () => {
    setShowBuyDropdown(!showBuyDropdown);
  };
  const handleRefinanceClick = () => {
    setShowRefinanceDropdown(!showRefinanceDropdown);
  };
  const handleRatesClick = () => {
    setShowRatesDropdown(!showRatesDropdown);
  };



  // Function to toggle the phone number visibility
  const handleCallClick = () => {
    setShowNumber(!showNumber); // Toggle the visibility
  };
  const handleSectionClick = (section) => {
    setSelectedSection(section); // Set the selected section to show
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Better Clone</h1>
        <nav className={styles.navbar}>
          
        <div className={styles.dropdown}>
            <Link href="#" className={styles.buttonLink} onClick={handleBuyClick}>
              Buy
            </Link>

            {showBuyDropdown && (
              <div className={styles.dropdownMenu}>
                <Link href="/apply-now" onClick={() => handleSectionClick('apply')}>
                  Apply Now<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/purchase-rates" onClick={() => handleSectionClick('rates')}>
                  Purchase Rates<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/affordability-calculator" onClick={() => handleSectionClick('affordability')}>
                  Affordability Calculator<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/mortgage-calculator" onClick={() => handleSectionClick('mortgage')}>
                  Mortgage Calculator<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/rent-vs-buy-calculator" onClick={() => handleSectionClick('rentvsbuy')}>
                  Rent vs Buy Calculator<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/find-agent" onClick={() => handleSectionClick('findagent')}>
                  Find an Agent<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/va-loans" onClick={() => handleSectionClick('valoans')}>
                  VA Loans<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/learning-center" onClick={() => handleSectionClick('learningcenter')}>
                  Learning Center<span className={styles.arrow}>→</span>
                </Link>
              </div>
            )}
          </div>
          <div className={styles.dropdown}>
            <Link href="#" className={styles.buttonLink} onClick={handleRefinanceClick}>
             Refinance
            </Link>
          {showRefinanceDropdown && (
              <div className={styles.dropdownMenu}>
                <Link href="/apply-now" onClick={() => handleSectionClick('apply')}>
                  Apply Now<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/refinance-rates" onClick={() => handleSectionClick('rates')}>
                 Refinance Rates<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/Cash-outrefinancecalculator" onClick={() => handleSectionClick('Cash-outrefinance calculator')}>
                Cash-out refinance calculatorr<span className={styles.arrow}>→</span>
                </Link>
                <Link href="/learning-center" onClick={() => handleSectionClick('LearningCenter')}>
                Learning Centerr<span className={styles.arrow}>→</span>
                </Link>
            
              </div>
            )}
            </div>
          <Link href="#" className={styles.buttonLink} onClick={() => handleSectionClick('heloc')}>HELOC</Link>
          <div className={styles.dropdown}>
            <Link href="#" className={styles.buttonLink} onClick={handleRatesClick}>
              Rates
            </Link>
            {showRatesDropdown && (
              <div className={styles.dropdownMenu}>
                <Link href="/purchase-mortgage-rates" onClick={() => handleButtonClick(0)}>
                  Purchase Mortgage Rates <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/refinance-rates" onClick={() => handleButtonClick(1)}>
                  Refinance Rates <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/refinance-cash-out" onClick={() => handleButtonClick(2)}>
                  Refinance Cash-Out Rates <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/heloc-rates" onClick={() => handleButtonClick(3)}>
                  HELOC Rates <span className={styles.arrow}>→</span>
                </Link>
                <Link href="/purchase-va-rates" onClick={() => handleButtonClick(4)}>
                  Purchase VA Rates <span className={styles.arrow}>→</span>
                </Link>
              </div>
            )}
          </div>
         

       
          <div className={styles.callContainer}>
      {/* The clickable phone icon */}
      <button className={styles.callButton} onClick={handleCallClick}>
        <FontAwesomeIcon icon={faPhone} />
      </button>

      {/* Conditionally render the phone number */}
      {showNumber && (
  <p className={styles.phoneNumber}>
    Call us : <a href="tel: 415-523-8837" className={styles.phoneLink}> 415-523-8837</a>
  </p>

)}

    </div>
    <Link href="#" className={styles.buttonLink} onClick={() => handleSectionClick('signin')}>Sign In</Link>
        <Link href="#" className={styles.buttonLink} onClick={() => handleSectionClick('betterplus')}>Continue  <span>→</span></Link>
   
        </nav>
        
      </header>

      <section className={styles.homeSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/image1.png" // Update with correct image file name
            alt="Home"
            layout="fill"
            className={styles.bgImage}
          />
        </div>
        <div className={styles.topHalf}>
        <Link href="/start">
  <a className={styles.startButton}>Start My Approval</a>
</Link>
        </div>
      </section>

      <section className={styles.ratings}>
      <h2>Excellent Ratings</h2>
      <div className={styles.ratingCard}>
        <Image
          src={ratingsData[currentIndex].image}
          alt={`${ratingsData[currentIndex].name}'s profile picture`}
          width={500}
          height={900}
          className={styles.ratingImage}
        />
       <h3>{ratingsData[currentIndex].name}</h3>
<p>{ratingsData[currentIndex].rating}</p>
<blockquote className={styles.comment}>
  &quot;{ratingsData[currentIndex].comment}&quot;
</blockquote>
</div>

      <div className={styles.buttonContainer}>
        {ratingsData.map((rating, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={styles.ratingButton}
          >
            {rating.name}
          </button>
        ))}
      </div><div className={styles.card}>
      <div className='rightsection'>
        <div className='better'>
        <h1>Find Out Why We&apos;re Better</h1>

          <button className={styles.buttonLink}>See Alll stories</button>
        </div>
        </div>
      </div>
    </section>
      <section className={styles.questions}>
      <h2>Got Questions? We&apos;ve Got Answers!</h2>

        <div className={styles.questionsContainer}>
          <div className={styles.questionSection}>
            <h3>Our Products</h3>
            <button className={styles.buttonLink} onClick={() => handleSectionClick('products')}>View Our Products</button>
          </div>
          <div className={styles.questionSection}>
            <h3>Calculators</h3>
            <button className={styles.buttonLink} onClick={() => handleSectionClick('calculators')}>View Calculators</button>
          </div>
          <div className={styles.questionSection}>
            <h3>Guides & FAQs</h3>
            <button className={styles.buttonLink} onClick={() => handleSectionClick('guides')}>View Guides & FAQs</button>
          </div>
        </div>
      </section>

      {/* Conditional Rendering of Sections */}
      {selectedSection === 'buy' && (
        <div className={styles.contentSection}>
          <h2>Buy Section Content</h2>
          <p>This is where you can buy products.</p>
        </div>
      )}
      {selectedSection === 'refinance' && (
        <div className={styles.contentSection}>
          <h2>Refinance Section Content</h2>
          <p>This is where you can refinance your loans.</p>
        </div>
      )}
      {selectedSection === 'heloc' && (
        <div className={styles.contentSection}>
          <h2>HELOC Section Content</h2>
          <p>This is where you can learn about Home Equity Lines of Credit.</p>
        </div>
      )}
      {selectedSection === 'rates' && (
        <div className={styles.contentSection}>
          <h2>Rates Section Content</h2>
          <p>This is where you can check the latest rates.</p>
        </div>
      )}
      {selectedSection === 'betterplus' && (
        <div className={styles.contentSection}>
          <h2>Better+ Section Content</h2>
          <p>This is where you can learn about Better+ services.</p>
        </div>
      )}
      {selectedSection === 'signin' && (
        <div className={styles.contentSection}>
          <h2>Sign In Section Content</h2>
          <p>This is where you can sign in to your account.</p>
        </div>
      )}
      {selectedSection === 'products' && (
          <section className={styles.homeOwnership}>
        <div className={styles.card}>
          <Image
            src="/first-home.jpg" // Replace with actual image path
            alt="First Home"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
            <h3>Buying Your First Home with Better</h3>
            <p>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.</p>
            <Link href="/one-day-mortgage" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/one-day-mortgage.jpg" // Replace with actual image path
            alt="One Day Mortgage"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
            <h3>One Day Mortgage</h3>
            <p>Traditional lenders deliver a Commitment Letter in a few weeks. We do it in a single day.</p>
            <Link href="/one-day-mortgage" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/better-heloc.jpg" // Replace with actual image path
            alt="Better HELOC"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
            <h3>Better HELOC</h3>
            <p>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.</p>
            <Link href="/better-heloc" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/insurance.jpg" // Replace with actual image path
            alt="Insurance"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
            <h3>Insurance</h3>
            <p>We take the complexity out of choosing your homeowners insurance by providing you with multiple quotes to find the best coverage at the best price.</p>
            <Link href="/insurance" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      )}
      {selectedSection === 'calculators' && ( <section className={styles.homeOwnership}>
        <div className={styles.card}>
          <Image
           Image src="/mortgage-calculator.jpg"
            alt="Mortgage Calculator"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Mortgage Calculator</h3>
          <p>Calculate your monthly mortgage payments and see how they fit into your budget.</p>
            <Link href="/affordability-calculator" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/affordability-calculator.jpg" // Replace with actual image path
            alt="Affordability Calculator"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Affordability Calculator</h3>
          <p>Got homeownership dreams? Let&apos;s put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.</p>

            <Link href="/heloc-calculator" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/heloc-calculator.jpg" // Replace with actual image path
            alt="HELOC Calculator"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>HELOC Calculator</h3>
          <p>Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.</p>
            <Link href="/heloc-calculator" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/fixed-rate-calculator.jpg" // Replace with actual image path
            alt="Fixed-Rate Loan Comparison Calculator"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Fixed-Rate Loan Comparison Calculator</h3>
          <p>Compare different fixed-rate loans to see which option is best for you.</p>
            <Link href="/fixed-rate-comparison" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
         
      )}
        {selectedSection === 'guides' && ( <section className={styles.homeOwnership}>
        <div className={styles.card}>
          <Image
           Image src="/good-dti.jpg"
            alt="good-dti"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
         
          <h3>What is a good debt-to-income ratio for a home loan?</h3>
            <Link href="/good-dti" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/buy-house-without-realtor.jpg" // Replace with actual image path
            alt="buy-house-without-realtorr"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Buying a house without realtor</h3>
          <p>Thinking about buying a house without a real estate agent? Read this first.</p>
            <Link href="/buy-house-without-realtor" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/loan-timeline.jpg" // Replace with actual image path
            alt="loan-timeline"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Timeline for homebuying process</h3>
          <p>Does the process of buying a home seem daunting? Don&apos;t stress, we broke it down into 8 easy steps.

          </p>
            <Link href="/heloc-calculator" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image
            src="/conventional-loan.jpg" // Replace with actual image path
            alt="conventional-loan"
            layout="fill"
            className={styles.bgImage}
          />
          <div className={styles.cardContent}>
          <h3>Conventional loan requirements</h3>
          
            <Link href="/conventional-loan" className={styles.arrowButton}>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
         
      )}
    </div>
  );
}
