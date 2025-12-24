import { useState } from 'react'
import './App.css'
import { MnemonicGenerator } from './components/generateMnemonic';
import { Logo } from './components/ui/Logo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Button } from './components/ui/Button';
import { LandingPage } from './components/LandingPage';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<LandingPage/>}>
          </Route>


          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

const Layout = () => {
  return <div className='min-h-[103vh] flex flex-col ml-28 mr-28 mt-12'>
  {/* <MnemonicGenerator mnemonic={mnemonic} setMnemonic={setMnemonic}></MnemonicGenerator> */}
      <Header></Header>
      <div className='flex-1'>
        <Outlet/>
      </div>
      <Footer></Footer>
  </div>
}


export default App
