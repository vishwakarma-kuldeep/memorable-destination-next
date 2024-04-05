import Link from "next/link";
function Footer() {
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "All Tours",
      href: "/tours",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Terms",
      href: "#",
    },
  ];
  return (
    <footer className="bg-white w-full text-black py-12">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-justify">
            At Memorable Destination, we are passionate about crafting
            unforgettable travel experiences that resonate with the soul of
            every traveler. As a leading travel and tourism company, we
            specialize in curating journeys that immerse you in the vibrant
            cultures, rich histories, and breathtaking landscapes of India and
            beyond.
          </p>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link
                  href={route.href}
                  className="hover:underline hover:text-black transition-colors duration-300"
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex  flex-col">
            <a
              href="https://www.facebook.com/profile.php?id=61555125752250"
              className="hover:text-black hover:underline transition-colors duration-300 mb-2"
            >
              Facebook
            </a>
            {/* <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a> */}
            <a
              href="https://www.instagram.com/memorable_destination_?igsh=bGY0bGJhOHB6M202"
              className="hover:text-black hover:underline transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
          <p> 210,Arth Business Centre (abc),</p>
          <p> Opposite Torrent Power Sub Station, </p>
          <p>Sardar Patel Ring Rd,</p>
          <p>Nikol,Ahmedabad, Gujarat 382350</p>

          <p>
            Email:{" "}
            <Link
              href="mail:admin@memorabledestination.com"
              className="hover:cursor-pointer hover:underline"
            >
              admin@memorabledestination.com
            </Link>{" "}
          </p>
          <p>
            Phone:
            <Link
              href="tel:+917698249395"
              className="hover:cursor-pointer hover:underline"
            >
              +91 76982 49395/96/97
            </Link>{" "}
          </p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Memorable Destination. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
