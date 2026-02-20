'use client';

import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import styles from './TechEvo.module.css';

export default function TechEvo() {
    return (
        <section id="techevo" className={styles.techevo}>
            <div className="container">
                <div className={styles.layout}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.title}>Conheça a <span className="text-gradient">TechEvo</span></h2>
                        <p className={styles.description}>
                            Mais que uma empresa de software, somos seu parceiro de evolução tecnológica.
                            Nossa missão é impulsionar negócios através de engenharia de software de ponta.
                        </p>

                        <div className={styles.cards}>
                            <div className={styles.infoCard}>
                                <Target className={styles.icon} />
                                <div>
                                    <h4>Missão</h4>
                                    <p>Inovar e escalar negócios através de sistemas inteligentes.</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <Eye className={styles.icon} />
                                <div>
                                    <h4>Visão</h4>
                                    <p>Ser referência em qualidade e resultados no Brasil.</p>
                                </div>
                            </div>
                            <div className={styles.infoCard}>
                                <ShieldCheck className={styles.icon} />
                                <div>
                                    <h4>Diferencial</h4>
                                    <p>Código sênior, limpo e focado em alta performance.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.statGrid}>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>+5 anos</span>
                                <span className={styles.statTag}>Mercado</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>100%</span>
                                <span className={styles.statTag}>Disponibilidade</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>∞</span>
                                <span className={styles.statTag}>Escalabilidade</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statNum}>Premium</span>
                                <span className={styles.statTag}>Qualidade</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
