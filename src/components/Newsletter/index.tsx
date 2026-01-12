import Fieldset from "../FieldSet"
import InputText from "../inputText"
import Button from "../button/button"
import styles from "./newsletter.module.css"

const NewsLetter = () => {
  return ( 
    <section className={styles.newsletter}>
        <h2 className={styles.titulo}>
            Inscreva-se para ganhar descontos!
        </h2>
        <form className={styles.form}>
            <Fieldset>
                <InputText placeholder="Digite o seu melhor E-mail" />
            </Fieldset>
            <Button variant="default" type="submit">Inscreva-se</Button> 
        </form>
    </section>
   )
}

export default NewsLetter