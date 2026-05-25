import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Home", href: "/#education" },
  { label: "Home", href: "/#experience" },
  { label: "Home", href: "/#skill" },
  { label: "Home", href: "/projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* Logo */}
        {/* Nav link items (desktop) */}
        {/* Mobile toggle */}
      </nav>

      {/* Mobile menu */}
    </header>
  );
}
