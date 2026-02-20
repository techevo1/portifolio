'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Zap, Bot, ShoppingCart } from 'lucide-react';
import styles from './About.module.css';

const SKILLS = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'APIs REST/GraphQL', 'Pix & Mercado Pago', 'Asaas', 'IA Integrations'
];

export default function About() {
    return (
        <section id="sobre" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.title}>
                        Davi Amorim <br />
                        <span className="text-gradient">Full Stack Developer Senior</span>
                    </h2>

                    <p className={styles.text}>
                        Especialista em construir soluções digitais que não apenas funcionam, mas escalam.
                        Com vasta experiência em ecossistemas modernos (React, Next.js, Node.js),
                        foco em criar sistemas robustos, seguros e focados em conversão.
                    </p>

                    <p className={styles.text}>
                        Expert em integrações complexas de pagamentos (Pix, Mercado Pago, Asaas) e
                        desenvolvimento de automações inteligentes que otimizam processos de negócio.
                    </p>

                    <div className={styles.skills}>
                        {SKILLS.map((skill, index) => (
                            <motion.span
                                key={skill}
                                className={styles.skillBadge}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageContainer}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771554046525x830074967759131300/1758522472410%20%282%29.jpg?_gl=1*1m9f5yh*_gcl_au*MTM2MzUxOTc0NS4xNzcwMTM1Njg1*_ga*MjAwMjIwNjE3Ny4xNzU0MzI5MTk0*_ga_BFPVR2DEE2*czE3NzE1NTM4MDIkbzk2JGcxJHQxNzcxNTUzODQ0JGoxOCRsMCRoMA.."
                            alt="Davi Amorim"
                            className={styles.profileImage}
                        />
                    </div>

                    <div className={styles.metricOverlay}>
                        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
                            <div className={styles.metricItem} style={{ border: 'none', padding: 0 }}>
                                <span className={styles.metricValue} style={{ fontSize: '1.5rem' }}>+50</span>
                                <span className={styles.metricLabel} style={{ fontSize: '0.8rem' }}>Projetos</span>
                            </div>
                            <div className={styles.metricItem} style={{ border: 'none', padding: 0 }}>
                                <span className={styles.metricValue} style={{ fontSize: '1.5rem' }}>100%</span>
                                <span className={styles.metricLabel} style={{ fontSize: '0.8rem' }}>Foco</span>
                            </div>
                            <div className={styles.metricItem} style={{ border: 'none', padding: 0 }}>
                                <span className={styles.metricValue} style={{ fontSize: '1.5rem' }}>Sênior</span>
                                <span className={styles.metricLabel} style={{ fontSize: '0.8rem' }}>Nível</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
