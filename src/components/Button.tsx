import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    onClick?: () => void;
    className?: string;
    href?: string;
}

export default function Button({
    children,
    variant = 'primary',
    onClick,
    className = '',
    href
}: ButtonProps) {
    const buttonClasses = `${styles.button} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={buttonClasses}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
}
