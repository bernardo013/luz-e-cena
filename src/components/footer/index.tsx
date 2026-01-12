import FooterLogo from "./footerLogo"
import FooterInfo from "./footerInfo"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <FooterLogo/>
        <FooterInfo />
      </div>
    </footer>
  )
}

export default Footer