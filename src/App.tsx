import Banner from "./components/banner"
import Link from "./components/link"
import Button from "./components/button/button"
import Header from "./components/header/header"


function App() {
  return (
  <>
  <Header />  
      <Banner src="../banner.png" alt="banner"/>
      <Button variant="default">Button</Button>
  </>
  )
}
export default App
