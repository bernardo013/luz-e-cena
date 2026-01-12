import styles from './footer.module.css'

const footerInfo = () => {
  return (
    <div className={styles.funcionamento}>
            <h4 className={styles.titulo}>Funcionamento</h4>
            <span>Segunda a Sexta - 16 ás 00</span>
            <span>ola@luzecena.com.br</span>
            <span>+55 088 545 341</span>
    </div>
  )
}

export default footerInfo