import HeaderList from "./components/headerList"
import HeaderListItem from "./components/headerListItem"
import HeaderLinks from "./components/HeaderLinks"
import HeaderFormFilters from "./components/HeaderFormFilters"
import HeaderActions from "./components/HeaderActions"
import Logo from "./components/logo"

const Header = () => {
  return (
      <header>
          <HeaderList>
              <HeaderListItem>
                  <Logo src='/Logo.png' />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderLinks />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderFormFilters />
              </HeaderListItem>
              <HeaderListItem>
                  <HeaderActions />
              </HeaderListItem>
          </HeaderList>
      </header>
  )
}

export default Header