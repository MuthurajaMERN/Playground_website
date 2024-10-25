import React from 'react';
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const ColorFoot = () => {  
  const footerLinks = [
    {
      title: "School Play",
      links: [
        'Collaborative Series',
        'Cute Chair Series',
        'Classroom Series',
        'Kids Desk Series',
        'Plastic Series',
        'Seating Series',
        'Wooden Series',
      ],   },

    {
      title: "Product List",
      links: ['Table & Chair',
      'Rockers',
       'Playpen',
      'Multi-Purpose',
      'Easels',
      'Multipurpose',]    },
    {
      title: "Indoor Play",
      links: [
        'Gym Equipment',
        'Stand Alone Series',
        'The Castle Collection',
        'The Dinosaur Collection',
        'The Nature Collection',
        'The Robot Collection',
    ],
    },
    {
      title: "Contact Us",
      links: ["Email", "Phone",],
    },
    {
      title: "Information",
      links: ["Home", " Product List","About Us", "Terms & Conditions", "Privacy Policy"],
    },
  ];

  const socialIcons = [
    { icon: <SiFacebook />, link: "#", label: "Facebook" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaYoutube />, link: "#", label: "YouTube" },
    { icon: <FaWhatsapp />, link: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-green-500 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-1">
        

        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-6 text-black">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link to="#" className="text-white hover:text-white text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="ml-56">
          <Link to="#">
            <img src={logo} alt="Ultrafly Solutions Logo" className="w-52" />
          </Link>
          <ul className="flex space-x-6 mt-4 items-center">
            {socialIcons.map((social, index) => (
              <li key={index}>
              <Link to={social.link} aria-label={social.label} className="text-2xl text-gray-300 hover:text-white">
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      <p className="text-black text-sm mt-10 text-center">©  All rights reserved.</p>
    </footer>
  );
};

export default ColorFoot;
