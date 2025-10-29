import styles from './DefaultButton.module.css';

interface DefaultButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
}

export const DefaultButton = ({ children, disabled = false, onClick, type = 'button', variant = 'primary' }: DefaultButtonProps) => {
    const buttonClass = variant === 'primary' 
        ? styles.button 
        : `${styles.button} ${styles[variant]}`;
    
    return <button type={type} className={buttonClass} disabled={disabled} onClick={onClick}>
        {children}
    </button>;
};