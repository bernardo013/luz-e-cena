import styles from './banner.module.css'

type bannerProps = {
    src: string,
    alt: string
}

const Banner = ({src,alt}: bannerProps) => {
  return <img src={src} alt={alt}  className={styles.banner}/>
  
}

export default Banner;
