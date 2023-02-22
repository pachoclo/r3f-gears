import { useFrame } from '@react-three/fiber'
import { Debug, Physics, RapierRigidBody, RigidBody } from '@react-three/rapier'
import { useControls } from 'leva'
import { useRef } from 'react'
import { Euler, Quaternion, Vector3 } from 'three'
import { Gear } from './components/Gear'
import { Lights } from './components/Lights'
import { SceneHelpers } from './components/SceneHelpers'

function Scene() {
  const { numberOfTeeth, angularVelocity } = useControls('gear', {
    numberOfTeeth: { value: 26, min: 1, max: 100, step: 1 },
    angularVelocity: { value: 0.2, min: 0, max: 3, step: 0.05 },
  })

  const { debug } = useControls('physics', {
    debug: false,
  })

  const gearRef = useRef<RapierRigidBody>(null)

  useFrame(({ clock }, delta) => {
    if (gearRef.current) {
      const gear = gearRef.current

      // Rotation

      const euler = new Euler(0, 0, -clock.getElapsedTime() * angularVelocity)
      const quaternion = new Quaternion().setFromEuler(euler)
      gear.setRotation(quaternion, true)
    }
  })

  return (
    <>
      <SceneHelpers />

      <Lights />

      <Physics>
        {debug && <Debug />}

        <RigidBody
          ref={gearRef}
          type='dynamic'
          friction={1}
          restitution={0}
          colliders='hull'
          enabledTranslations={[false, false, false]}
          enabledRotations={[false, false, true]}
        >
          <Gear
            numTeeth={numberOfTeeth}
            initialRotation={0}
            position={new Vector3(0, 0, 0)}
          />
        </RigidBody>

        <RigidBody
          type='dynamic'
          friction={1}
          restitution={0}
          colliders='hull'
          enabledTranslations={[false, false, false]}
          enabledRotations={[false, false, true]}
        >
          <Gear
            numTeeth={numberOfTeeth}
            initialRotation={1}
            position={new Vector3(8.7, 0, 0)}
          />
        </RigidBody>
      </Physics>
    </>
  )
}

export { Scene }
