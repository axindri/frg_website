import styles from './DefaultInput.module.css';

interface DefaultInputProps {
    label: string;
    type: 'text' | 'password';
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

export const DefaultInput = ({ label, type, value, placeholder, onChange, disabled }: DefaultInputProps) => {
    return (
    <div className={styles.container}>
    <label className={styles.label}>{label}</label>
    <input type={type} className={styles.input} value={value} placeholder={placeholder} onChange={onChange} disabled={disabled} />
    </div>)
};