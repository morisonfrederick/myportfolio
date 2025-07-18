function Footer() {
  return (
    <footer className="bg-main-blue text-white ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">WORK AUTHORIZATION</h2>
          <p className="text-sm">
            Eligible to work in Ireland (No sponsorship required) <br />
            <span className="font-semibold">Stamp 1G Visa</span>
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="text-sm">
            <li>Email: frederickmorison@gmail.com</li>
            <li>Phone: +353 834398388</li>
            <li>
              Address: 3 Marsh house,13/14 Peters Street, <br />
              Cork City, Ireland
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div id="contacts">
          <h2 className="text-lg font-semibold mb-2">Connect</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-black bg-main-yellow">
        &copy; {new Date().getFullYear()} Morison Frederick. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
