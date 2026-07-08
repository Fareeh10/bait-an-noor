import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function Footer(){
  return (
    <>
    
    {/* CTA Section */}
      <section className="py-20 bg-primary bg-[#db9f2f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Join Our Growing Community of Young Learners!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Give your child the gift of Islamic knowledge in a fun, nurturing environment.
          </p>
          <Link to="/enroll">
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:text-[#5f349a] sansation-bold transition-colors duration-300">
              Enroll Your Child Today
            </button>
          </Link>
        </div>
      </section>

    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex gap-2 items-center mb-4">
                <img src={logo} className="w-8 h-8"></img>
                <h3 className="text-xl font-heading font-bold">
                Bait An Noor Litarabiya
                </h3>
            </div>
            <p className="text-sm opacity-90">
              Nurturing young hearts with the light of Islamic knowledge through
              engaging online classes.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="opacity-90 hover:opacity-100 transition-opacity">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="opacity-90 hover:opacity-100 transition-opacity">
                  Teachers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Tiny Noor (Ages 5-7)</li>
              <li className="opacity-90">Mini Noor (Ages 8-10)</li>
              <li className="opacity-90">Teen Noor (Ages 11-15)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              hi
            </div>
            <p className="text-sm opacity-90">info@baitannoor.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>
            © {new Date().getFullYear()} Bait An Noor Litarabiya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  )
};

export default Footer;