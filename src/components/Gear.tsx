import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BoxGeometry, Group, Vector3 } from 'three'

// =================
//  Gear
// =================

type GearProps = {
  numTeeth?: number
  initialRotation?: number
  angularDirection?: 'clockwise' | 'counterClockwise'
  position?: Vector3
}

function Gear({
  numTeeth = 26,
  position = new Vector3(0, 0, 0),
  initialRotation = 0,
  angularDirection = 'clockwise',
}: GearProps) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    // Spin the gear at 3 degrees per second
    if (ref.current) {
      const angle = 3 * (Math.PI / 180) * delta
      ref.current.rotateZ(angularDirection === 'clockwise' ? -angle : angle)
    }
  })

  const pitchDiameter = 8 // TODO: calculate based on numTeeth
  const radius = pitchDiameter / 2
  const angle = (360 / numTeeth) * (Math.PI / 180)

  const teeth = useMemo(() => {
    const teeth = []

    for (let i = 0; i < numTeeth; i++) {
      const x = radius * Math.cos(angle * i)
      const y = radius * Math.sin(angle * i)

      teeth.push(<Tooth position={[x, y, 0]} rotationZ={angle * i} key={i} />)
    }

    return teeth
  }, [numTeeth, radius])

  return (
    <group ref={ref} position={position} rotation-z={(angle / 2) * initialRotation}>
      <Cylinder radius={radius} />
      {teeth.map((tooth) => tooth)}
    </group>
  )
}

// =================
//  Gear Cylinder
// =================

type CylinderProps = {
  radius: number
}

function Cylinder({ radius }: CylinderProps) {
  const geometry = useMemo(() => {
    return <cylinderGeometry args={[radius, radius, 1.5, 35]} />
  }, [])

  return (
    <mesh rotation-x={Math.PI / 2}>
      {/*
      radiusTop : Float,
      radiusBottom : Float,
      height : Float,
      radialSegments : Integer,
      heightSegments : Integer,
      openEnded : Boolean,
      thetaStart : Float,
      thetaLength : Float
    */}
      {geometry}
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}

// =================
//  Gear Tooth
// =================

type ToothProps = {
  position: [number, number, number]
  rotationZ: number
}

const toothGeometry = new BoxGeometry(1, 0.48, 1.3)

function Tooth({ position, rotationZ }: ToothProps) {
  return (
    <mesh position={position} rotation-z={rotationZ} geometry={toothGeometry}>
      <meshStandardMaterial color={'orangered'} />
    </mesh>
  )
}

export { Gear }
