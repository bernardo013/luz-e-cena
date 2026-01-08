import styles from '../header.module.css'

const HeaderListItem = ( {children}: React.HtmlHTMLAttributes<HTMLLIElement> ) => {
  return (
    <li className={styles.menuitem}>{children}</li>
  )
}

export default HeaderListItem