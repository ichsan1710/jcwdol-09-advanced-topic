import {Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home';
import LearnHOC from './pages/LearnHOC';



function App() {
  const Button = (props) => <button style={props.style}>Click Me</button>
  const Text = (props) => <p style={props.style}>Testing</p>
  const StyleButton = LearnHOC(Button)
  const StyleText = LearnHOC(Text)
  const navigate = useNavigate()

  return (
    <div>
      <StyleButton />
      <StyleText />
      <button onClick={() => {
        navigate('/Home')
      }}>Home</button>
      <Routes>
        <Route path='/' element={<LearnHOC />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
