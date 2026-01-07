import Banner from "./components/banner"
import Link from "./components/link"
import Button from "./components/button/button"
import HeaderList from "./components/header/components/headerList"


function App() {
  return (
  <>
      <Banner src="../banner.png" alt="banner"/>
      <Link href="/" target="_blank">Link</Link>
      <Button variant="default">Button</Button>
  </>
  )
}
export default App
