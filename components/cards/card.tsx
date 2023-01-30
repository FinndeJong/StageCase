import Image from "next/image";
import hiddenPlug from "@/assets/hidden@3x-fixed.png";
import uMove from "@/assets/u-move@3x.png";
import styles from "./card.module.css";

export default function Card({ option }: { option: string }) {
  return (
    <>
      {
        {
          hidden: (
            <div className={styles.cardContainer}>
              <Image
                className={styles.image}
                src={hiddenPlug}
                alt="Hidden plug option"
              />
            </div>
          ),
          UMove: (
            <div className={styles.cardContainer}>
              <Image
                className={styles.image}
                src={uMove}
                alt="Hidden plug option"
              />
            </div>
          ),
        }[option]
      }
    </>
  );
}
