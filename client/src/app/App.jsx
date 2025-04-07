import Header from "../widgets/Header/Header"
import { Button, Stack } from "@chakra-ui/react"

function App() {

  return (
    <>
      <div>
        <Header />
        <Stack>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </Stack>
      </div>
    </>
  )
}

export default App
