import Image from "next/image";
import hiddenPlug from "@/assets/hidden@3x-fixed.png";
import uMove from "@/assets/u-move@3x.png";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./card.module.css";

export default function Card({ option }: { option: string }) {
  return (
    <>
      {
        {
          hidden: (
            <div className={`${styles.cardContainer}`}>
              <Image
                className={styles.image}
                src={hiddenPlug}
                alt="Hidden plug option"
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardOverlayWrapper}>
                  <div className={styles.circle}>
                    <CheckIcon sx={{ color: "#3399ff" }} />
                  </div>
                  <h2 className="--text-header">Hidden</h2>
                </div>
              </div>
            </div>
          ),
          UMove: (
            <div className={styles.cardContainer}>
              <Image
                className={styles.image}
                src={uMove}
                alt="Hidden plug option"
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardOverlayWrapper}>
                  <div className={`${styles.circle} ${styles.disabledIcon}`}>
                    <ClearIcon sx={{ color: "#f3f9ff" }} />
                  </div>
                  <h2 className={`--text-header ${styles.disabledText}`}>
                    U:move
                  </h2>
                </div>
              </div>
            </div>
          ),
        }[option]
      }
    </>
  );
}
