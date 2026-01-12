import Banner from "./components/banner"
import Header from "./components/header/header"
import MovieSection from "./components/MovieSection/index"
import NewsLetter from "./components/Newsletter"
import Footer from "./components/footer"

function App() {
  return (
  <>
  <Header />  
      <Banner src="../banner.png" alt="banner"/> 
      <MovieSection />
      <Banner src="../combo.png" alt="combo"/>
      <NewsLetter />
      <Footer />
  </>
  )
}
export default App
