import styles from './Button.module.css';

export default function Button({onClick,title}) {
    return(
        <div className={styles.gameButton}>
            <button className={styles.viewMore} onClick={onClick}>{title}</button>
        </div>
    )
}