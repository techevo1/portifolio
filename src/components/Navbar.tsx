'use strict';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isOpen ? styles.menuOpen : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <span className="text-gradient">Davi & TechEvo</span>
                </Link>

                <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
                    <Link href="#sobre" className={styles.link} onClick={closeMenu}>Sobre</Link>
                    <Link href="#servicos" className={styles.link} onClick={closeMenu}>Serviços</Link>
                    <Link href="#portfolio" className={styles.link} onClick={closeMenu}>Projetos</Link>
                    <Button href="https://techevo.com.br" variant="primary" className={styles.cta} onClick={closeMenu}>
                        Orçamento
                    </Button>
                </div>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
}
