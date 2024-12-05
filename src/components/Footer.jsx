import React from 'react'

export default function Footer() {
  return (
    <>
    
    
    <footer className="footer bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="footer-logo">Logo</div>
              <div className="footer-info">
                <p>Company Name</p>
                <p>Address: 123 Main St, Barrackpore, India</p>
                <p>Phone: 9038974991</p>
                <p>Email: gopalkarmakar2@gmail.com </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="footer-menu">
                <h5>Quick Links</h5>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="footer-subscription">
                <h5>Subscribe to Our Newsletter</h5>
                <form>
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
      
    </>
  )
}
