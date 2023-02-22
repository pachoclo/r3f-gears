export function Lights() {
  return (
    <>
      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />

      <ambientLight intensity={0.2} />
    </>
  )
}
