import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/Ground'
import { FPV } from './components/FPV'
import { Player } from './components/Player'
import { Cubes } from './components/Cubes.jsx'
import { TextureSelector } from './components/TextureSelect.jsx'
import './App.css'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20 ]}/>
        <ambientLight intensity={6} />
        <FPV />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
      <TextureSelector />
    </>
  )
}

export default App
