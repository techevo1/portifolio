'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Phone } from 'lucide-react';
import Button from '../components/Button';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contato" className={styles.contact}>
            <div className="container">
                <motion.div
                    className={`glass-card ${styles.ctaCard}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Seu próximo projeto digital <span className="text-gradient">começa agora.</span></h2>
                        <p className={styles.ctaText}>
                            Estamos prontos para transformar sua visão em uma solução tecnológica de alto nível.
                            Fale diretamente conosco e solicite uma proposta personalizada.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Button href="https://wa.me/5561998257721?text=Ol%C3%A1%20Davi%20%F0%9F%91%8B%20Encontrei%20seu%20site%20da%20TechEvo%20e%20tenho%20interesse%20em%20desenvolver%20um%20projeto%20digital." variant="primary" className={styles.mainBtn}>
                                <MessageSquare size={20} style={{ marginRight: '8px' }} />
                                Chamar no WhatsApp
                            </Button>
                        </div>
                    </div>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h5>WhatsApp</h5>
                                <p>61 99825-7721</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h5>Email</h5>
                                <p>contato@techevo.com.br</p>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.iconCircle}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h5>Localização</h5>
                                <p>Brasília - DF | Atendimento Brasil</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
