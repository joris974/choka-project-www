export default function Pricing() {
  return (
    <main>
      <PricingSection />
    </main>
  );
}

function PricingSection() {
  return (
    <section
      className="pricing-section section-padding section-bg"
      id="section_5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="text-center mb-4">Precio</h2>
          </div>

          <div className="col-lg-6 col-12">
            <div className="pricing-thumb">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Pase Annual</small> 500€
                  </h3>

                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>

              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">
                  unlimited access to boulder
                </li>

                <li className="pricing-list-item">
                  Up to 20 classes each month
                </li>

                <li className="pricing-list-item">high-quality equipment</li>

                <li className="pricing-list-item">personalized training</li>
              </ul>

              <a
                className="link-fx-1 color-contrast-higher mt-4"
                href="ticket.html"
              >
                <span>Buy my pass</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-12 mb-4">
            <div className="pricing-thumb">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Pase Semestrial</small> 320€
                  </h3>

                  <p>Including good things:</p>
                </div>
                <p className="pricing-tag ms-auto">
                  Save up to <span>50%</span>
                </p>
              </div>

              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">
                  unlimited access to boulder
                </li>

                <li className="pricing-list-item">
                  Up to 20 classes each month
                </li>

                <li className="pricing-list-item">high-quality equipment</li>

                <li className="pricing-list-item">personalized training</li>
              </ul>

              <a
                className="link-fx-1 color-contrast-higher mt-4"
                href="ticket.html"
              >
                <span>Buy my pass</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-4 mt-lg-0">
            <div className="pricing-thumb">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Pase Mensual</small> 60€
                  </h3>

                  <p>If you prefer to try out first</p>
                </div>
              </div>

              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">
                  unlimited access to boulder
                </li>

                <li className="pricing-list-item">Up to 2 classes</li>

                <li className="pricing-list-item">high-quality equipment</li>

                <li className="pricing-list-item">personalized training</li>
              </ul>

              <a
                className="link-fx-1 color-contrast-higher mt-4"
                href="ticket.html"
              >
                <span>Buy my pass</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-4 mt-lg-0">
            <div className="pricing-thumb">
              <div className="d-flex">
                <div>
                  <h3>
                    <small>Pase Diario</small> 9€
                  </h3>

                  <p>If you prefer to try out first</p>
                </div>
              </div>

              <ul className="pricing-list mt-3">
                <li className="pricing-list-item">
                  unlimited access to boulder
                </li>

                <li className="pricing-list-item">Up to 2 classes</li>

                <li className="pricing-list-item">high-quality equipment</li>

                <li className="pricing-list-item">personalized training</li>
              </ul>

              <a
                className="link-fx-1 color-contrast-higher mt-4"
                href="ticket.html"
              >
                <span>Buy my pass</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="16" r="15.5"></circle>
                    <line x1="10" y1="18" x2="16" y2="12"></line>
                    <line x1="16" y1="12" x2="22" y2="18"></line>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
