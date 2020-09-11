import { registerTest } from '../test';
import { Sandbox } from './Sandbox';
import { Sparky } from './Sparky';
import { DamBreak } from './DamBreak';
import { LiquidTimer } from './LiquidTimer';
import { WaveMachine } from './WaveMachine';
import { Particles } from './Particles';
import { Faucet } from './Faucet';
import { DrawingParticles } from './DrawingParticles';
import { Soup } from './Soup';
import { ParticlesSurfaceTension } from './ParticlesSurfaceTension';
import { ElasticParticles } from './ElasticParticles';
import { RigidParticles } from './RigidParticles';
import { MultipleParticleSystems } from './MultipleParticleSystems';
import { Impulse } from './Impulse';
import { SoupStirrer } from './SoupStirrer';
import { Fracker } from './Fracker';
import { Maxwell } from './Maxwell';
import { Ramp } from './Ramp';
import { Pointy } from './Pointy';
import { AntiPointy } from './AntiPointy';
import { CornerCase } from './CornerCase';
import { ParticleCollisionFilter } from './ParticleCollisionFilter';
import { EyeCandy } from './EyeCandy';

if (B2_ENABLE_PARTICLE) {
  registerTest('Particles', 'Sandbox', Sandbox.Create);
  registerTest('Particles', 'Sparky', Sparky.Create);
  registerTest('Particles', 'DamBreak', DamBreak.Create);
  registerTest('Particles', 'Liquid Timer', LiquidTimer.Create);
  registerTest('Particles', 'Wave Machine', WaveMachine.Create);
  registerTest('Particles', 'Particles', Particles.Create);
  registerTest('Particles', 'Faucet', Faucet.Create);
  registerTest('Particles', 'Particle Drawing', DrawingParticles.Create);
  registerTest('Particles', 'Soup', Soup.Create);
  registerTest('Particles', 'Surface Tension', ParticlesSurfaceTension.Create);
  registerTest('Particles', 'Elastic Particles', ElasticParticles.Create);
  registerTest('Particles', 'Rigid Particles', RigidParticles.Create);
  registerTest('Particles', 'Multiple Systems', MultipleParticleSystems.Create);
  registerTest('Particles', 'Impulse', Impulse.Create);
  registerTest('Particles', 'Soup Stirrer', SoupStirrer.Create);
  registerTest('Particles', 'Fracker', Fracker.Create);
  registerTest('Particles', 'Maxwell', Maxwell.Create);
  registerTest('Particles', 'Ramp', Ramp.Create);
  registerTest('Particles', 'Pointy', Pointy.Create);
  registerTest('Particles', 'AntiPointy', AntiPointy.Create);
  registerTest('Particles', 'Corner Case', CornerCase.Create);
  registerTest('Particles', 'Particle Collisions', ParticleCollisionFilter.Create);
  registerTest('Particles', 'Eye Candy', EyeCandy.Create);
}