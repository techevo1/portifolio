'use client';

import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';
import styles from './Portfolio.module.css';

const PROJECTS = [
    {
        title: 'Sistema de Consulta Veicular',
        tags: ['Next.js', 'API Integration', 'PostgreSQL'],
        description: 'Plataforma robusta para consultas em tempo real com alta disponibilidade.',
        url: 'https://buscasim.com.br'
    },
    {
        title: 'Plataforma de cobranças em Tempo Real',
        tags: ['Node.js', 'Webhooks', 'Real-time'],
        description: 'Sistema de processamento de pagamentos instantâneos com confirmação automática.',
        url: 'https://evopay.techevo.com.br'
    },
    {
        title: 'Landing Page de Produto',
        tags: ['Framer Motion', 'SEO', 'Conversion'],
        description: 'Página de alta conversão otimizada para campanhas de tráfego pago.',
        url: 'https://pagina.techevo.com.br'
    },
    {
        title: 'Loja Virtual Customizada',
        tags: ['Next.js', 'Mercado Pago', 'Stripe'],
        description: 'E-commerce personalizado com checkout transparente e gestão simplificada.',
        url: 'https://shop.techevo.com.br'
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Cases de <span className="text-gradient">Sucesso</span></h2>
                    <p className={styles.subtitle}>Projetos reais que geram resultados reais.</p>
                </motion.div>

                <div className={styles.grid}>
                    {PROJECTS.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <ExternalLink size={20} className={styles.icon} />
                            </div>

                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <p className={styles.projectDescription}>{project.description}</p>

                            <div className={styles.features}>
                                <div className={styles.feature}>
                                    <CheckCircle size={16} className={styles.check} />
                                    <span>Código Escalável</span>
                                </div>
                                <div className={styles.feature}>
                                    <CheckCircle size={16} className={styles.check} />
                                    <span>Performance Sênior</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
