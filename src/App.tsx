import { useState } from 'react'
import './App.css'
import { MnemonicGenerator } from './components/generateMnemonic';
import { Logo } from './components/ui/Logo';
import { Header } from './components/ui/Header';
import { Footer } from './components/ui/Footer';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Button } from './components/ui/Button';
import { LandingPage } from './components/pages/LandingPage';
import { SolPage } from './components/pages/SolanaPage';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/solana" element={<SolPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

const Layout = () => {
  return <div className='min-h-[99vh] flex flex-col ml-28 mr-28 mt-8'>
  {/* <MnemonicGenerator mnemonic={mnemonic} setMnemonic={setMnemonic}></MnemonicGenerator> */}
      <Header></Header>
      <div className='flex-1'>
        <Outlet/>
      </div>
      <Footer></Footer>
  </div>
}


export default App
