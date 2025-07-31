import Background from './components/Background.tsx'
import './index.css'
import NavBar from './components/NavBar.tsx'
import DataBar from './components/DataBar.tsx'
import Trade from './Pages/Trade.tsx'

function App() {

  return (
   <>
   <Background>
    <NavBar NavBarItems={[{name:"logo",onClickHandler:(()=>(console.log("hi")))}]} />
     <Trade/>
    {/* <div className='flex justify-center items-center h-full'>
    <Button>
      <div className=' m-2'>
      hi this is jhonny and i am happy
      </div>
    </Button>
    </div> */}
    </Background>
   </>
  )
}

export default App
