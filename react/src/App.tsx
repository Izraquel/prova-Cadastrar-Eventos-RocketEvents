import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { useState } from 'react'
import { ModalList } from './components/ModalList'
import { Dashboard } from './components/Dashboard';


export function App() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  function handleOpenNewModal() {
      setIsNewModalOpen(true)
  }

  function handleCloseNewModal() {
    setIsNewModalOpen(false)
  }


  return (
    <div className="App">
      <Header onOpenNewModal={handleOpenNewModal} />
      <Dashboard /> 

      <ModalList
        isOpen={isNewModalOpen}
        onRequestClose={handleCloseNewModal}
      />

      <GlobalStyle />
    </div>
    
    
  
  )
}
