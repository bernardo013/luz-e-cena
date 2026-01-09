import Banner from "./components/banner"
import Header from "./components/header/header"
import MovieSection from "./components/MovieSection/index"


function App() {
  return (
  <>
  <Header />  
      <Banner src="../banner.png" alt="banner"/> 
      <MovieSection />
  </>
  )
}
export default App
