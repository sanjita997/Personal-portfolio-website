"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="TechVerse Sanjita home">
          <Image src="/techverse-logo.jpeg" width={266} height={70} alt="TechVerse Sanjita" priority />
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="btn gold" href="/contact" onClick={() => setOpen(false)}>
            Book Consultation
          </Link>
        </nav>
        <button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
