# Spur Gear

## Concepts:

### Angular Velocity

How quickly an object rotates relative to some point.
Usually represented as RPMs or rad/s or deg/s (which are equivalent!)

### Linear Velocity

Different points at different radii on a disc have different velocities, even though the disc itself is rotating at a constant angular velocity `v = ω * r` , where ω is the angular velocity and r is the distance of the point to the center of the disc

- Torque: the turning effect from applying tangential force at a given radius (distance) from the turning point or shaft
  `T = r * Ft` , where Ft is the tangential force
  which is equivalent to:
  T = r \_ F \* sin(α) , where α is the angle between the arm and the force vector

## Values needed:

- Teeth Count (N)
- Pitch diameter (dP)
- Pitch Circle
- Circular pitch (CP) = distance between two teeth = (PI \* dP) / N
- Module (m) = dP / N
- Diametral Pitch: used like Module in the US to describe a gear
  = N / dP
- The Module or Diametral Pitch determine the size of the teeth

## Conditions for gear mating:

- Involute Profile, the "exact shape" the teeth should have, should be calculated
- Circular pitch of two gears needs to be the same.
- The ratio of pitch diameter to number of teeth needs to be equivalent: (N1 / N2) = (dP1 / dP2)
- Law of gearing: "To ensure a constant ratio of angular velocity and torque modification the surface normals of teeth at all points of contact have to go through the pitch point."
- If the teeth of two matching gears have an involute profile
  they meet the requirements of the law of gearing.
