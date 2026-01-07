import styles from '../header.module.css'

function HeaderListItem( {children}: React.HtmlHTMLAttributes<HTMLLIElement> ) {
  return (
    <li className={styles.menuitem}>{children}</li>
  )
}

export default HeaderListItem