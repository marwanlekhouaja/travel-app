import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from '../App'
import Started from '../Started'
import Nav from '../Nav'
import Detail from '../Detail'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/start' element={<Started/>}></Route>
        <Route path='/category/:name' element={<Detail/>}></Route>
        <Route></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App