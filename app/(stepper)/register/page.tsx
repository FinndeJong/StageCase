"use client";
import Link from "next/link";
import Image from "next/image";
import { TextField } from "@mui/material";
import motorhuisPaal from "@/assets/Screenshot.png";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import styles from "./register.module.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const formTheme = createTheme({
  palette: {
    primary: {
      main: "#3399ff !important",
    },
  },
});

export default function RegisterPage() {
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className="stepperProgression">
            <div className={styles.progressBar}>
              <div className={styles.progressCircle}>3/7</div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.information}>
              <div className={styles.text}>
                <h2 className="--text-3">Motorhuis laadpunt samenstellen</h2>
                <h1 className="--text-4">Gefeliciteerd!</h1>
                <p>
                  Je hebt een pracht oplaadpunt samengesteld! Vul jouw gegevens
                  in en wij nemen graag jouw setting door. Tot snel!
                </p>
              </div>

              <div className={styles.product}>
                <Image
                  className={styles.productImage}
                  src={motorhuisPaal}
                  alt="Foto voorbeeld van het laadpunt"
                ></Image>
                <div className={styles.productInformation}>
                  <ul className={styles.checklist}>
                    <li className={styles.checklistItem}>
                      Laden met vaste kabel
                    </li>
                    <li className={styles.checklistItem}>5 meter</li>
                    <li className={styles.checklistItem}>Op een paal</li>
                    <li className={styles.checklistItem}>Graafwerk</li>
                    <li className={styles.checklistItem}>Tot 6 meter</li>
                    <li className={styles.checklistItem}>Geen</li>
                  </ul>
                  <div className={styles.priceDecision}>
                    <h4>Jouw keuze</h4>
                    <h2>€1.658</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.form}>
                <ThemeProvider theme={formTheme}>
                  <h2 className={`--form-title ${styles.formTitle}`}>Naam</h2>
                  <TextField
                    className={styles.inputField}
                    fullWidth
                    label="Voornaam"
                  ></TextField>
                  <TextField
                    className={styles.inputField}
                    fullWidth
                    label="Achternaam"
                  ></TextField>
                  <h2 className={`--form-title ${styles.formTitle}`}>
                    Contact
                  </h2>
                  <TextField
                    className={styles.inputField}
                    fullWidth
                    label="Telefoonnummer"
                  ></TextField>
                  <TextField
                    className={styles.inputField}
                    fullWidth
                    label="E-mail"
                  ></TextField>
                  <h2 className={`--form-title ${styles.formTitle}`}>Adres</h2>
                  <TextField
                    className={styles.inputField}
                    fullWidth
                    label="Straatnaam + huisnr."
                  ></TextField>
                  <TextField
                    className={styles.inputField}
                    label="Postcode"
                    sx={{
                      width: "35%",
                      marginRight: "5%",
                    }}
                  ></TextField>
                  <TextField
                    className={styles.inputField}
                    label="Plaats"
                    sx={{
                      width: "60%",
                    }}
                  ></TextField>
                </ThemeProvider>
                <div className={styles.formSubmit}>
                  <button className={styles.buttonPay}>
                    <p className="--text-2">Direct betalen</p>
                    <EastIcon sx={{ fontSize: 15 }} />
                  </button>
                  <a className={styles.submitButtonAlt} href="/register">
                    Stuur een offerte
                  </a>
                </div>
                <h4 className={styles.submitButtonSubTitle}>
                  Betalen via iDEAL, Creditcard... etc.
                </h4>
              </div>
            </div>
          </div>

          <div className={styles.stepperNavigation}>
            <Link href="/">
              <button className={styles.buttonBack}>
                <WestIcon sx={{ fontSize: 15 }} />
                <p className="--text-1">Vorige</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
