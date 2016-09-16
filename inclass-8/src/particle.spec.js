import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        // check position, velocity, acceleration, mass
	expect(p.position[0]).to.be.at.least(0)
	expect(p.position[0]).to.be.at.most(800)
	expect(p.position[1]).to.be.at.least(0)
	expect(p.position[1]).to.be.at.most(800)
	
	expect(p.velocity[0]).to.be.at.least(-0.1)
	expect(p.velocity[0]).to.be.at.most(0.1)
	expect(p.velocity[1]).to.be.at.least(-0.1)
	expect(p.velocity[1]).to.be.at.most(0.1)

	expect(p.acceleration).to.deep.equal([0, 0])

	expect(p.mass).to.be.at.least(5)
	expect(p.mass).to.be.at.most(30)
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 1.0)
        expect(position).to.deep.equal([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0) // dt is different here
        expect(position).to.deep.equal([2.0, 0.0])
    })

    it('should update the velocity by the acceleration', () => {
	const p = particle({ position: [1, 1], velocity: [1, 1], acceleration: [3, 7] })
	const { velocity } = update(p, 1.0)
        expect(velocity).to.deep.equal([4, 8])

	const updated_particle = update(p, 2.0)
	const velocity2 = updated_particle.velocity
        expect(velocity2).to.deep.equal([10, 22])
    })

    it('particles should wrap around the world', () => {
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides

	const x = 800
	const y = 800
	const canvas = {width: x, height: y}

	var p = particle({ position: [-1, -1] })
	var { position } = update(p, 1.0, canvas)
	expect(position[0]).to.be.at.least(0)
	expect(position[0]).to.be.at.most(x)
	expect(position[1]).to.be.at.least(0)
	expect(position[1]).to.be.at.most(y)
	
	var p = particle({ position: [x + 10, y + 10] })
	var { position } = update(p, 1.0, canvas)
	expect(position[0]).to.be.at.least(0)
	expect(position[0]).to.be.at.most(x)
	expect(position[1]).to.be.at.least(0)
	expect(position[1]).to.be.at.most(y)
    })

})
