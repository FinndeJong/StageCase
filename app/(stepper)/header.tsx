import Image from "next/image";
import PoweredBy from "@/assets/powered-by.svg";
import BlueCurrent from "@/assets/blue-current-logo-blue-v-2.svg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Image src={PoweredBy} alt="Powered bye Motorhuis" />
          <Image src={BlueCurrent} alt="Blue current logo" />
        </div>
      </div>
    </>
  );
}
