import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [propertyTaxes, setPropertyTaxes] = useState(0);
  const [homeownersInsurance, setHomeownersInsurance] = useState(0);
  const handlePmiChange = (value) => setPmi(Number(value));
  const handleHoaFeeChange = (value) => setHoaFees(Number(value));
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Utility costs
  const [waterCost, setWaterCost] = useState(0);
  const [gasCost, setGasCost] = useState(0);
  const [internetCost, setInternetCost] = useState(0);
  const [selectedUtility, setSelectedUtility] = useState('Water');
  const [pmi, setPmi] = useState(0.5); // PMI default percentage
  const minPayment = 500;
  const [useDefaultHoa, setUseDefaultHoa] = useState(true); // Toggle for HOA input type
  const maxPayment = 2000;
  const [hoaFees, setHoaFees] = useState(132); // Default HOA fees
  const paymentDistribution = {
    principalInterest: 0.4,
    propertyTaxes: 0.2,
    homeownersInsurance: 0.15,
    hoaFees: 0.1,
    utilities: 0.1,
    pmi: 0.05,
  };

  const downPayment = homePrice * (downPaymentPercentage / 100);
  const principal = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;

  useEffect(() => {
    const monthlyPrincipalAndInterest = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermYears * 12));
    const estimatedPropertyTaxes = homePrice * 0.001;
    const estimatedHomeownersInsurance = 132;
    const calculatedHoaFees = useDefaultHoa ? 132 : hoaFees; // Use default or custom HOA

    const totalMonthlyPayment = (
      monthlyPrincipalAndInterest +
      estimatedPropertyTaxes +
      estimatedHomeownersInsurance +
      calculatedHoaFees +
      ((principal * (pmi / 100)) / 12)
    ).toFixed(2);

    setMonthlyPayment(Number(totalMonthlyPayment));
  }, [homePrice, downPaymentPercentage, interestRate, loanTermYears, pmi, hoaFees, useDefaultHoa]);


  const handleHomePriceChange = (value) => setHomePrice(Number(value));
  const handleDownPaymentChange = (value) => setDownPaymentPercentage(Number(value));
  const handleInterestRateChange = (value) => setInterestRate(Number(value));
  const handleZipCodeChange = (value) => setZipCode(value);
  const handleUtilityChange = (value) => setSelectedUtility(value);

  return (
    <div style={styles.container}>
      <header>
        <h1 className={styles.title}>Better Mortgage calculator</h1>
        <nav className={styles.navbar}>
          <Link href="/buy" className={styles.buttonLink}>Buy</Link>
          <Link href="/refinance" className={styles.buttonLink}>Refinance</Link>
          <Link href="/heloc" className={styles.buttonLink}>HELOC</Link>
          <Link href="/rates" className={styles.buttonLink}>Rates</Link>
          <Link href="/betterplus" className={styles.buttonLink}>Better+</Link>
          <Link href="/signin" className={styles.buttonLink}>Sign In</Link>
          <Link href="/signin" className={styles.buttonLink}>Continue<span>→</span></Link>    
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.calculatorSection}>
          <h1>Mortgage Calculator</h1>
          <p>
            Our mortgage calculator includes key factors like homeowners association fees, property taxes,
            and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
          </p>

          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label>Home Price:</label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => handleHomePriceChange(e.target.value)}
                style={styles.inputField}
              />
            </div>

            <div style={styles.monthlyPriceGroup}>
              <div style={styles.fixedGroup}>
                <label>Monthly Price:</label>
                <p>${monthlyPayment}/month</p>
              </div>
              <div style={styles.buttonContainer}>
                <button style={styles.calculateButton}>
                  Get Pre-approved
                </button>
              </div>
            </div>
          </div>

          <div style={styles.inputGr}>
            <input
              type="range"
              min={minPayment}
              max={maxPayment}
              step="10"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
              style={{ width: '100%' }}
            />
            <span>${monthlyPayment}</span>
          </div>

          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => handleZipCodeChange(e.target.value)}
                placeholder="ZIP Code:"
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="number"
                value={downPaymentPercentage}
                placeholder="Down Payment (%)"
                onChange={(e) => handleDownPaymentChange(e.target.value)}
                style={styles.inputField}
              />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => handleInterestRateChange(e.target.value)}
                placeholder="Interest Rate (%):"
                style={styles.inputField}
              />
            </div>
            <div style={styles.inputGroup}>
              <label>Length of Loan (Years):</label>
              <select
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                style={styles.inputField}
              >
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
              </select>
            </div>
          </div>

          <section style={styles.breakdownSection}>
            <h2>Monthly Payment Breakdown</h2>
            <div style={styles.monthlyPayment}>
              <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
                <div style={styles.paymentAmount}>${monthlyPayment}/mo</div>

                <div style={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: '#ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '40px'
                }}>
                  {Object.entries(paymentDistribution).map(([key, percentage]) => (
                    <div
                      key={key}
                      style={{
                        width: `${(monthlyPayment * percentage) / maxPayment * 100}%`,
                        backgroundColor: key === 'principalInterest' ? 'green'
                          : key === 'propertyTaxes' ? 'purple'
                          : key === 'homeownersInsurance' ? 'blue'
                          : key === 'hoaFees' ? 'orange'
                          : 'yellow',
                        color: 'white',
                        textAlign: 'center',
                        lineHeight: '40px',
                        height: '40px',
                        transition: 'width 0.3s ease',
                      }}
                    >
                      {key.replace(/([A-Z])/g, ' ')} - ${Math.round(monthlyPayment * percentage)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={styles.rightSection}>
              <div style={styles.breakdownItem}>
                <span style={styles.label}>Principal Interest:</span>
                <span style={styles.value}>${(monthlyPayment * paymentDistribution.principalInterest).toFixed(2)}</span>
              </div>

              <div style={styles.breakdownItem}>
                <span style={styles.label}>Property Taxes:</span>
                <input
                  type="number"
                  value={propertyTaxes}
                  onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                  style={styles.valueInput}
                />
              </div>

           
              <div style={styles.breakdownItem}>
                <span style={styles.label}>HomeownersInsurance:</span>
                <input
                  type="number"
                  value={homeownersInsurance}
                  onChange={() => setHomeownersInsurance()}
                  style={styles.valueInput}
                />
              </div>
                {/* HOA Fees input with toggle for default or custom */}
          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label>HOA Fees:</label>
              <input
                type="checkbox"
                checked={useDefaultHoa}
                onChange={() => setUseDefaultHoa(!useDefaultHoa)}
                style={styles.checkbox}
              />
              <span>Use Default HOA Fees</span>
            </div>

            {!useDefaultHoa && (
              <div style={styles.inputGroup}>
                <input
                  type="number"
                  value={hoaFees}
                  onChange={(e) => handleHoaFeeChange(e.target.value)}
                  placeholder="Enter HOA Fees"
                  style={styles.inputField}
                />
              </div>
            )}
          </div>

          {/* PMI input */}
          <div style={styles.inputRow}>
            <div style={styles.inputGroup}>
              <label>PMI:</label>
              <input
                type="number"
                value={pmi}
                onChange={(e) => handlePmiChange(e.target.value)}
                style={styles.inputField}
                placeholder="Enter PMI as a percentage"
              />
            </div>
          </div>
              <div style={styles.inputRow}>
                <div style={styles.inputGroup}>
                <span style={styles.label}>Utilities:</span>
            
                  <select
                    value={selectedUtility}
                    onChange={(e) => handleUtilityChange(e.target.value)}
                    style={styles.inputField}
                  >
                    <option value="Water">Water</option>
                    <option value="Gas">  Gas</option>
                    <option value="Internet"> Internet</option>
                  </select>
                </div>

                {selectedUtility === 'Water' && (
                  <div style={styles.inputGroup}>
                    <label>Water Cost:</label>
                    <input
                      type="number"
                      value={waterCost}
                      onChange={(e) => setWaterCost(Number(e.target.value))}
                      style={styles.inputField}
                    />
                  </div>
                )}

                {selectedUtility === 'Gas' && (
                  <div style={styles.inputGroup}>
                    <label>Gas Cost:</label>
                    <input
                      type="number"
                      value={gasCost}
                      onChange={(e) => setGasCost(Number(e.target.value))}
                      style={styles.inputField}
                    />
                  </div>
                )}

                {selectedUtility === 'Internet' && (
                  <div style={styles.inputGroup}>
                    <label>Internet Cost:</label>
                    <input
                      type="number"
                      value={internetCost}
                      onChange={(e) => setInternetCost(Number(e.target.value))}
                      style={styles.inputField}
                    />
                  </div>
                )}
              </div>
              <div style={styles.breakdownItem}>
                <span style={styles.label}>PMI:</span>
                <input
                  type="number"
                  value={propertyTaxes}
                  onChange={(e) => setPmi(Number(e.target.value))}
                  style={styles.valueInput}
                />
              </div>
            </div>
          </section>
        </section>
          {/* Help Text Section */}
      {/* Help Text Section */}
<section style={styles.helpTextSection}>
  <h3>Help</h3>
  <h1>How does a mortgage calculator help me?</h1>
  <p>
    When deciding how much house you can afford, one of the most important
    factors is whether a home will fit into your monthly budget. A mortgage
    calculator helps you estimate this by considering loan terms, interest
    rates, and other key variables.
  </p>
  <h1>-------------------------------------------------------------------------------------</h1>
  <h1>How much monthly mortgage payment can I afford?</h1>
  <p>
    Lenders determine how much you can afford on a monthly housing payment by
    calculating your debt-to-income ratio (DTI). The maximum DTI to qualify for
    most mortgage loans is typically between 45-50%, including anticipated
    housing costs.
  </p>
  <p>
    Your DTI measures the balance between your income and debt, showing lenders
    how safe or risky it is to approve your loan. A DTI ratio represents how
    much of your gross monthly income goes toward debt payments, commonly shown
    as a percentage. For example, a DTI of 50% indicates half your income goes
    to debt.
  </p>
  <h1>-------------------------------------------------------------------------------------</h1>
  <h2>Formula for Calculating DTI</h2>
  
  <h1>-------------------------------------------------------------------------------------</h1>
  <h1>Here’s an example of what calculating your DTI might look like:</h1>

  <div>
  <Image 
      src="/dti-formula.png" 
      alt="Formula for Debt-to-Income (DTI) Ratio" 
      width={500} 
      height={300} 
      style={styles.formulaImage} 
    />
    <h1>-------------------------------------------------------------------------------------</h1>
    <h1>Here’s an example of what calculating your DTI might look like:</h1>
    <h1>Mortgage calculator | Debt to income ratio (DTI) formula example</h1>
    <Image 
      src="/dti-example.png" 
      alt="Formula for Debt-to-Income (DTI) Ratio" 
      width={500} 
      height={300} 
      style={styles.formulaImage} 
    />
    <h1>-------------------------------------------------------------------------------------</h1>
  </div>
<h1>-------------------------------------------------------------------------------------</h1>
<h1>How to calculate monthly mortgage payments?</h1>
<p>Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and </p><p>
  mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities</p>
  <p> and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
 <h2>Formula for calculating monthly mortgage payments</h2> 
 <p>The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p> 
   <div>
      <Image 
        src="/monthly-mortgage-payments-formula.png" 
        alt="Formula for Monthly Mortgage Payments" 
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
        style={styles.formulaImage} 
      />
      <h1>-------------------------------------------------------------------------------------</h1>
      <h1>Here’s an example of what calculating your DTI might look like:</h1>
      <h1>Mortgage calculator | Debt to income ratio (DTI) formula example</h1>
      <Image 
        src="/monthly-mortgage-payments-example.png" 
        alt="Formula for Monthly Mortgage Payments" 
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
        style={styles.formulaImage} 
      />
      <h1>-------------------------------------------------------------------------------------</h1>
    </div>

<p>Where</p>
<p>M is monthly mortgage payments</p>
<p>P is the principal loan amount (the amount you borrow)
</p>
<p>r is the monthly interest rate</p>
<p>(annual interest rate divided by 12 and expressed as a decimal)
For example:</p>
<p>if the annual interest rate is 5%,
the monthly rate would be 0.05/12 = .00417, or .417%

n is the total number of payments in months</p>

<p>For example:</p>
<Image 
        src="/monthly-mortgage-payments-example.png" 
        alt="Formula for Monthly Mortgage Payments" 
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
        style={styles.formulaImage} 
      />
<h1>How to Use This Mortgage Calculator?</h1>
  <p>
    Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
  </p>
  <p>
    Increasing your down payment, lowering your interest rate, and choosing a shorter mortgage term will reduce your monthly payment. Keep in mind, taxes, insurance, and HOA fees vary by location. If your down payment is less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment.
  </p>
  <p>
    Utilities can also vary widely by county, so we’ve included a breakdown by service to help estimate these costs. If you’re considering a condo or a property with a Homeowners Association (HOA), don’t forget to include HOA fees in your calculations.
  </p>

  <h1>Additional Tips</h1>
  <p>
    This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. Remember, you’ll still need to add on costs like property taxes, homeowners insurance, utilities, and any applicable HOA fees.
  </p>
  <p>
    We haven’t included costs for annual maintenance, repairs, or home improvements, which can impact your budget. To get a complete picture of home affordability, consider using the Better home affordability calculator.
  </p>

  <h1>Fun Fact</h1>
  <p>
    Property tax rates are highly localized. Two similarly-sized homes on either side of a municipal border might have very different tax rates. Choosing an area with a lower property tax rate may make it easier to afford a higher-priced home.
  </p>

  <h1>Do You Know Your Property Tax Rate?</h1>
<p>
  Property tax rates can vary greatly by state. Here’s a helpful breakdown of median and mean property tax rates, median home values, and median property taxes paid across the United States.
</p>

<div class="scroll-container">
  <table class="property-tax-table">
    <thead>
      <tr>
        <th>State</th>
        <th>Median Effective Property Tax Rate</th>
        <th>Mean Effective Property Tax Rate</th>
        <th>Median Home Value</th>
        <th>Median Property Taxes Paid</th>
      </tr>
    </thead>
    <tbody>
   
      <tr><td>AL</td><td>0.41%</td><td>0.40%</td><td>$157,100</td><td>$646</td></tr>
      <tr><td>AK</td><td>1.23%</td><td>1.04%</td><td>$282,800</td><td>$3,464</td></tr>
     
    </tbody>
  </table>
</div>

</section>

      </main>
    </div>
  );
}
const styles = {
  h1:{
    fontcolor: 'rgb(32, 133, 2)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
  },  navbar: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(248, 248, 248)', // Dark green background
    padding: '10px 0',
    width: '100%',
  },
  buttonLink: {
    color: 'rgb(32, 133, 2)',
    padding: '10px 15px',
    margin: '0 10px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
    fontWeight: 'bold',
  },
  buttonLinkHover: {
    backgroundColor: 'green', // Lighter green on hover
  },
  title: {
    fontSize: '2.5em', // Larger title font
    color: 'darkgreen',
    marginBottom: '20px',
    textAlign: 'center',
  },
   helpTextSection: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  logo: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  main: {
    width: '100%',
  },
  calculatorSection: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  inputGroup: {
    flex: '1',
    marginRight: '10px',
  },
  monthlyPriceGroup: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
  },
  buttonContainer: {
    marginLeft: '10px',
  },
  calculateButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  inputField: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  breakdownSection: {
    marginTop: '20px',
  },
  monthlyPayment: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  paymentAmount: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  breakdown: {
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
  },
  breakdownItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
  },
  label: {
    fontWeight: 'bold',
    fontSize:'20px',
  },
  value: {
    color: '#555',
  },  helpTextSection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  formulaImage: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
    borderRadius: '4px',
  },  scrollContainer: {
    maxHeight: '400px', // Limit container height
    overflowY: 'auto',  // Enable vertical scrolling
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    backgroundColor: '#f9f9f9'
  },
  table: {
    width: '100%', // Full width for the table
    borderCollapse: 'collapse' // Remove spacing between cells
  },
  th: {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f1f1f1',
    position: 'sticky',
    top: '0',
    zIndex: '1'
  },
  td: {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd'
  },
  rowEven: {
    backgroundColor: '#fafafa'
  },
  valueInput: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '4px',
    width: '60px',
  },
};

export default MortgageCalculator;
