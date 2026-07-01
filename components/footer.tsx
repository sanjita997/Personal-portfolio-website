import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image src="/techverse-logo.jpeg" width={266} height={70} alt="TechVerse Sanjita" />
            <p style={{ marginTop: 16 }}>Where creativity meets Artificial Intelligence.</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div className="footer-links" style={{ marginTop: 18 }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="panel-list">
              <li>
                <Mail size={18} /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <Phone size={18} /> <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
              </li>
              <li>
                <MapPin size={18} /> {contact.location}
              </li>
            </ul>
            <div className="socials" style={{ marginTop: 20 }}>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">© 2026 TechVerse Sanjita. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
