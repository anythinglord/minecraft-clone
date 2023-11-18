import { useStore } from '../hooks/useStore'
import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as textures from '../images/textures'

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [removeCube] = useStore(state => [state.removeCube])
  const [addCube] = useStore(state => [state.addCube])

  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  const activeTexture = textures[texture + 'Texture']

  const handleClickCube = event => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point)
      .map(n => Math.ceil(n))
    45
    console.log('cube => ',x,y,z)
    addCube(x, y, z)
  }

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation()
        setIsHovered(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setIsHovered(false)
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        handleClickCube(e)
        if (e.altKey) {
          removeCube(id)
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? 'white' : 'grey'}
        transparent
        map={activeTexture}
        attach='material'
      />
    </mesh>
  )
}