'use client';

import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Layout, Cpu, Bot } from 'lucide-react';
import styles from './Services.module.css';

const SERVICES = [
    {
        title: 'Sites Profissionais',
        description: 'Websites de alto impacto com foco em design premium e performance extrema.',
        icon: Globe,
    },
    {
        title: 'Lojas Virtuais',
        description: 'E-commerce completo com gestão de estoque e checkout otimizado.',
        icon: ShoppingBag,
    },
    {
        title: 'Landing Pages',
        description: 'Páginas focadas 100% em conversão, otimizadas para tráfego pago.',
        icon: Layout,
    },
    {
        title: 'Sistemas Web',
        description: 'Dashboards administrativos e plataformas SaaS sob medida para seu negócio.',
        icon: Cpu,
    },
    {
        title: 'Automações & IA',
        description: 'Integração de LLMs e bots inteligentes para automação de atendimento e processos.',
        icon: Bot,
    }
];

export default function Services() {
    return (
        <section id="servicos" className={styles.services}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>Nossos <span className="text-gradient">Serviços</span></h2>
                    <p className={styles.sectionSub}>Soluções completas para transformar sua presença digital.</p>
                </motion.div>

                <div className={styles.grid}>
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className={styles.iconWrapper}>
                                <service.icon size={32} strokeWidth={1.5} className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
