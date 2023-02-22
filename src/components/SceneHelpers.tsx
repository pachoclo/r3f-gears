import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

function SceneHelpers() {
  const { performance, axes } = useControls('Helpers', {
    performance: false,
    axes: true,
  })

  return (
    <>
      {performance && <Perf position='top-left' />}
      <axesHelper args={[10]} visible={axes} />
      <OrbitControls makeDefault />
    </>
  )
}

export { SceneHelpers }
