import { ShapeCast } from './ShapeCast';
import { TimeOfImpact } from './TimeOfImpact';
import { CharacterCollision } from './CharacterCollision';
import { Tiles } from './Tiles';
import { HeavyOnLight } from './HeavyOnLight';
import { HeavyOnLightTwo } from './HeavyOnLightTwo';
import { VerticalStack } from './VerticalStack';
import { BasicSliderCrank } from './BasicSliderCrank';
import { SliderCrank } from './SliderCrank';
import { SphereStack } from './SphereStack';
import { ConvexHull } from './ConvexHull';
import { Tumbler } from './Tumbler';
import { RayCast } from './RayCast';
import { DumpShell } from './DumpShell';
import { ApplyForce } from './ApplyForce';
import { ContinuousTest } from './ContinuousTest';
import { MotorJoint } from './MotorJoint';
import { OneSidedPlatform } from './OneSidedPlatform';
import { Mobile } from './Mobile';
import { MobileBalanced } from './MobileBalanced';
import { ConveyorBelt } from './ConveyorBelt';
import { Gears } from './Gears';
import { VaryingRestitution } from './VaryingRestitution';
import { Cantilever } from './Cantilever';
import { EdgeTest } from './EdgeTest';
import { BodyTypes } from './BodyTypes';
import { ShapeEditing } from './ShapeEditing';
import { Car } from './Car';
import { Prismatic } from './Prismatic';
import { Revolute } from './Revolute';
import { Pulleys } from './Pulleys';
import { PolyShapes } from './PolyShapes';
import { Web } from './Web';
import { RopeJoint } from './RopeJoint';
import { Pinball } from './Pinball';
import { BulletTest } from './BulletTest';
import { Confined } from './Confined';
import { Pyramid } from './Pyramid';
import { TheoJansen } from './TheoJansen';
import { EdgeShapes } from './EdgeShapes';
import { PolyCollision } from './PolyCollision';
import { Bridge } from './Bridge';
import { Breakable } from './Breakable';
import { Chain } from './Chain';
import { CollisionFiltering } from './CollisionFiltering';
import { CollisionProcessing } from './CollisionProcessing';
import { CompoundShapes } from './CompoundShapes';
import { DistanceTest } from './DistanceTest';
import { Dominos } from './Dominos';
import { DynamicTreeTest } from './DynamicTreeTest';
import { SensorTest } from './SensorTest';
import { VaryingFriction } from './VaryingFriction';
import { AddPair } from './AddPair';
import { Skier } from './Skier';
import { Rope } from './Rope';
import { MotorJoint2 } from './MotorJoint2';
import { BlobTest } from './BlobTest';
import { TestCCD } from './TestCCD';
import { TestRagdoll } from './TestRagdoll';
import { TestStack } from './TestStack';
import { PyramidTopple } from './PyramidTopple';
import { DominoTower } from './DominoTower';
import { TopdownCar } from './TopdownCar';
import { Segway } from './Segway';
import { registerTest } from '../test';

registerTest('Collision', 'Shape Cast', ShapeCast.Create);
registerTest('Collision', 'Time of Impact', TimeOfImpact.Create);
registerTest('Examples', 'Character Collision', CharacterCollision.Create);
registerTest('Benchmark', 'Tiles', Tiles.Create);
registerTest('Solver', 'Heavy on Light', HeavyOnLight.Create);
registerTest('Solver', 'Heavy on Light Two', HeavyOnLightTwo.Create);
registerTest('Stacking', 'Boxes', VerticalStack.Create);
registerTest('Examples', 'Slider Crank 1', BasicSliderCrank.Create);
registerTest('Examples', 'Slider Crank 2', SliderCrank.Create);
registerTest('Stacking', 'Circles', SphereStack.Create);
registerTest('Geometry', 'Convex Hull', ConvexHull.Create);
registerTest('Benchmark', 'Tumbler', Tumbler.Create);
registerTest('Collision', 'Ray-Cast', RayCast.Create);
registerTest('Examples', 'Dump Shell', DumpShell.Create);
registerTest('Forces', 'Apply Force', ApplyForce.Create);
registerTest('Continuous', 'Continuous Test', ContinuousTest.Create);
registerTest('Examples', 'Motor Joint', MotorJoint.Create);
registerTest('Examples', 'One-Sided Platform', OneSidedPlatform.Create);
registerTest('Solver', 'Mobile Unbalanced', Mobile.Create);
registerTest('Solver', 'Mobile Balanced', MobileBalanced.Create);
registerTest('Examples', 'Conveyor Belt', ConveyorBelt.Create);
registerTest('Joints', 'Gears', Gears.Create);
registerTest('Forces', 'Restitution', VaryingRestitution.Create);
registerTest('Joints', 'Cantilever', Cantilever.Create);
registerTest('Geometry', 'Edge Test', EdgeTest.Create);
registerTest('Examples', 'Body Types', BodyTypes.Create);
registerTest('Examples', 'Shape Editing', ShapeEditing.Create);
registerTest('Examples', 'Car', Car.Create);
registerTest('Joints', 'Prismatic', Prismatic.Create);
registerTest('Joints', 'Revolute', Revolute.Create);
registerTest('Joints', 'Pulley', Pulleys.Create);
registerTest('Geometry', 'Polygon Shapes', PolyShapes.Create);
registerTest('Examples', 'Web', Web.Create);
registerTest('Joints', 'RopeJoint', RopeJoint.Create);
registerTest('Examples', 'Pinball', Pinball.Create);
registerTest('Continuous', 'Bullet Test', BulletTest.Create);
registerTest('Solver', 'Confined', Confined.Create);
registerTest('Stacking', 'Pyramid', Pyramid.Create);
registerTest('Examples', "Theo Jansen's Walker", TheoJansen.Create);
registerTest('Geometry', 'Edge Shapes', EdgeShapes.Create);
registerTest('Geometry', 'Polygon Collision', PolyCollision.Create);
registerTest('Joints', 'Bridge', Bridge.Create);
registerTest('Examples', 'Breakable', Breakable.Create);
registerTest('Joints', 'Chain', Chain.Create);
registerTest('Examples', 'Collision Filtering', CollisionFiltering.Create);
registerTest('Examples', 'Collision Processing', CollisionProcessing.Create);
registerTest('Examples', 'Compound Shapes', CompoundShapes.Create);
registerTest('Geometry', 'Distance Test', DistanceTest.Create);
registerTest('Examples', 'Dominos', Dominos.Create);
registerTest('Collision', 'Dynamic Tree', DynamicTreeTest.Create);
registerTest('Collision', 'Sensors', SensorTest.Create);
registerTest('Forces', 'Friction', VaryingFriction.Create);
registerTest('Benchmark', 'Add Pair', AddPair.Create);
registerTest('Bugs', 'Skier', Skier.Create);
registerTest('Rope', 'Bending', Rope.Create);
registerTest('Joints', 'Motor Joint (Bug #487)', MotorJoint2.Create);
registerTest('Examples', 'Blob Test', BlobTest.Create);
registerTest('Continuous', 'Continuous Collision', TestCCD.Create);
registerTest('Examples', 'Ragdolls', TestRagdoll.Create);
registerTest('Examples', 'Stacked Boxes', TestStack.Create);
registerTest('Examples', 'Pyramid Topple', PyramidTopple.Create);
registerTest('Examples', 'Domino Tower', DominoTower.Create);
registerTest('Examples', 'TopDown Car', TopdownCar.Create);
registerTest('Examples', 'Segway', Segway.Create);

// TODO:
// https://github.com/erincatto/box2d/tree/3d92ed4ec487b8e2aff3fc7dc58663870b17c534/testbed/tests
// RegisterTest("Bugs", "Chain Problem", ChainProblem::Create);