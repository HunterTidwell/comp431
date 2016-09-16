const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

// default values
const particle = ({
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
}) => {
    return {acceleration, velocity, position, mass}
}

var sane_mod = function(val, modulus) {
	return (val % modulus + modulus) % modulus
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
	var i
	var max_height = 999999
	var max_width = 999999 // big enough for anyone
	if (canvas) {
		max_height = canvas.height
		max_width = canvas.width
	}
	for (i in [0, 1]) {
		position[i] += delta * velocity[i]
		velocity[i] += delta * acceleration[i]
	}

	position[0] = sane_mod(position[0], max_width)
	position[1] = sane_mod(position[1], max_height)

	//if (canvas) {
	//	position[0] = Math.max(position[0], 0)
	//	position[0] = Math.min(position[0], canvas.width)
	//	position[1] = Math.max(position[1], 1)
	//	position[1] = Math.min(position[1], canvas.height)
	//}
    return { mass, acceleration, velocity, position }
}

export default particle

export { update }
