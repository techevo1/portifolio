'use strict';
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className="text-gradient">Davi & TechEvo</span>
                </Link>

                <div className={styles.links}>
                    <Link href="#sobre" className={styles.link}>Sobre</Link>
                    <Link href="#servicos" className={styles.link}>Serviços</Link>
                    <Link href="#portfolio" className={styles.link}>Projetos</Link>
                    <Button href="https://techevo.com.br" variant="primary" className={styles.cta}>
                        Orçamento
                    </Button>
                </div>
            </div>
        </nav>
    );
}
