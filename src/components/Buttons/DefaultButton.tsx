import styles from './DefaultButton.module.css';

interface DefaultButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export const DefaultButton = ({ children, disabled = false, onClick, type = 'button' }: DefaultButtonProps) => {
    return <button type={type} className={styles.button} disabled={disabled} onClick={onClick}>
        {children}
    </button>;
};