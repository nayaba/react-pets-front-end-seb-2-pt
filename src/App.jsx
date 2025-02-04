import { useState, useEffect } from "react"
import * as petService from './services/petServices'
import PetList from "./components/PetList"
import PetDetail from "./components/PetDetail"

const App = () => {

  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState(null)

  const handleSelect = (pet) => {
    setSelected(pet)
  }

  useEffect(() => {
    const fetchPets = async () => {
      const fetchedPets = await petService.index()
      if (fetchedPets.err) {
        throw new Error(fetchedPets.err)
      }
      setPets(fetchedPets)
    }
    fetchPets()
  }, [])

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  )
}

export default App