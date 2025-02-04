import { useState, useEffect } from "react"
import * as petService from './services/petServices'
import PetList from "./components/PetList"

const App = () => {

  const [pets, setPets] = useState([])

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
      <PetList pets={pets} />
    </>
  )
}

export default App