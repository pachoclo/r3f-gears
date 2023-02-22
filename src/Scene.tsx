import { SceneHelpers } from './components/SceneHelpers'
import { Lights } from './components/Lights'
import { Gear } from './components/Gear'
import { useControls } from 'leva'
import { Vector3 } from 'three'

function Scene() {
  const { numberOfTeeth } = useControls('gear', {
    numberOfTeeth: { value: 26, min: 1, max: 100, step: 1 },
  })

  return (
    <>
      <SceneHelpers />

      <Lights />

      <Gear
        numTeeth={numberOfTeeth}
        initialRotation={0}
        position={new Vector3(0, 0, 0)}
      />
      <Gear
        numTeeth={numberOfTeeth}
        initialRotation={1}
        position={new Vector3(8.7, 0, 0)}
        angularDirection='counterClockwise'
      />
    </>
  )
}

export { Scene }
