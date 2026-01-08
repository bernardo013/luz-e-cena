import SelectorGroup from '../../selector/selectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../selector/selectorOption'

const cidades = [ 

    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Brasília" },
    { id: 5, nome: "Porto Alegre" }
]

const HeaderFormFilters = () => {
  return (
    <form>
        <SelectorGroup id="cidade" icon={<FaLocationDot />} >
          <SelectorOption label="Selecione uma cidade" value="" /> {cidades.map((cidade) => {
            return (
                <SelectorOption 
                key={cidade.id} 
                value={cidade.nome} 
                label={cidade.nome}  
              />
            )
          })}

        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters