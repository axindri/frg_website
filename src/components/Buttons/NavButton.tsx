import styles from './NavButton.module.css';

interface NavButtonProps {
    children: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}

export const NavButton = ({ children, onClick, isActive }: NavButtonProps) => {
    return (
        <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>
            {children}
        </button>
    );
};