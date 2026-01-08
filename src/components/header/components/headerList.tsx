import styles from '../header.module.css'

const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho} >{children}</ul>
  )
}

export default HeaderList