'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import styles from './Hero.module.css';

const CODE_TEXT = `const techEvo = {
  mission: "Scalable Systems",
  stack: ["React", "Next.js", "Node"],
  status: "Senior Performance"
};

// Transforming your idea...
await deploy(techEvo);`;

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let currentText = '';
        let index = 0;

        const typeInterval = setInterval(() => {
            if (index < CODE_TEXT.length) {
                currentText += CODE_TEXT[index];
                setDisplayText(currentText);
                index++;
            } else {
                clearInterval(typeInterval);
                setIsTypingComplete(true);
            }
        }, 40); // 40ms per character for a natural feel

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Disponível para novos projetos
                    </motion.span>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Transformando ideias em <br />
                        <span className="text-gradient">sistemas digitais escaláveis</span>
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Davi Amorim & TechEvo: Engenharia de software sênior para empresas que buscam
                        inovação, performance e resultados reais no mundo digital.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Button href="#portfolio" variant="primary">
                            Ver Projetos
                        </Button>
                        <Button href="https://techevo.com.br" variant="secondary">
                            Solicitar Orçamento
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, duration: 1, type: 'spring' }}
                >
                    <div className={styles.glow} />
                    <div className={styles.terminal}>
                        <div className={styles.terminalHeader}>
                            <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }} />
                            <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }} />
                            <span className={styles.dot} style={{ backgroundColor: '#27c93f' }} />
                        </div>
                        <pre className={styles.code}>
                            <code>
                                {displayText}
                                <span className={styles.caret} style={{ opacity: isTypingComplete ? 0 : 1 }} />
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
