import styles from "./ShareIcon.module.css";
import shareIcon from "../../assets/images/share-icon.png";

interface ShareIconProps {
    onClick: () => void;
}

const ShareIcon = ({ onClick }: ShareIconProps) => {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.button} onClick={onClick}>
                <img src={shareIcon} alt="Compartir pressupost" />
            </button>
        </div>
    );
};

export default ShareIcon;
