"use client";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Card from "@/components/cards/card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.progress}>
            <div className={styles.progressBar}>
              <div className={styles.progressCircle}>2/7</div>
            </div>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.text}>
              <h2 className="--text-3">Motorhuis laadpunt samenstellen</h2>
              <h1 className="--text-4">
                Wat voor <br /> laadpunt wil je?
              </h1>
              <p>Tekst</p>
            </div>
            <div className={styles.options}>
              <Card option="hidden" />
              <Card option="UMove" />
            </div>
          </div>
          <div className={styles.stepperNavigation}>
            <button className={styles.buttonBack}>
              <WestIcon sx={{ fontSize: 15 }} />
              <p className="--text-1">Vorige</p>
            </button>
            <div>
              <button className={styles.buttonForward}>
                <p className="--text-2">Volgende</p>
                <EastIcon sx={{ fontSize: 15 }} />
              </button>
              <p className={`${styles.price}`}>Jouw keuze €1.519</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
