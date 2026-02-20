import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3 className="text-gradient">TechEvo</h3>
                        <p>Evoluindo negócios através da excelência tecnológica.</p>
                    </div>

                    <div className={styles.links}>
                        <a href="#sobre">Sobre</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#portfolio">Projetos</a>
                        <a href="#contato">Contato</a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Davi Amorim & TechEvo. Todos os direitos reservados.</p>
                    <div className={styles.legal}>
                        <span>Design Premium</span>
                        <span className={styles.separator}>|</span>
                        <span>Alta Conversão</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
