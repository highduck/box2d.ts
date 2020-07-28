import {b2BodyDef, b2BodyType, b2EdgeShape, b2FixtureDef, b2PolygonShape, b2Vec2, b2World} from "@highduck/box2d";
import {Test} from "@highduck/box2d-testbed";

export class PyramidTopple extends Test {
  constructor() {
    super();

    const WIDTH = 4;
    const HEIGHT = 30;

    const add_domino = (world: b2World, pos: b2Vec2, flipped: boolean) => {
      const mass = 1;

      const bd = new b2BodyDef();
      bd.type = b2BodyType.b2_dynamicBody;
      bd.position.Copy(pos);
      const body = world.CreateBody(bd);

      const shape = new b2PolygonShape();
      if (flipped) {
        shape.SetAsBox(0.5 * HEIGHT, 0.5 * WIDTH);
      } else {
        shape.SetAsBox(0.5 * WIDTH, 0.5 * HEIGHT);
      }

      const fd = new b2FixtureDef();
      fd.shape = shape;
      fd.density = mass / (WIDTH * HEIGHT);
      fd.friction = 0.6;
      fd.restitution = 0.0;
      body.CreateFixture(fd);
    };

    const world = this.m_world;
    ///settings.positionIterations = 30; // cpSpaceSetIterations(space, 30);
    ///world.SetGravity(new b2Vec2(0, -300)); // cpSpaceSetGravity(space, cpv(0, -300));
    ///b2_timeToSleep = 0.5; // cpSpaceSetSleepTimeThreshold(space, 0.5f);
    ///b2_linearSlop = 0.5; // cpSpaceSetCollisionSlop(space, 0.5f);

    // Add a floor.
    const bd = new b2BodyDef();
    const body = world.CreateBody(bd);
    const shape = new b2EdgeShape();
    shape.Set(new b2Vec2(-600, -240), new b2Vec2(600, -240));
    const fd = new b2FixtureDef();
    fd.shape = shape;
    fd.friction = 1.0;
    fd.restitution = 1.0;
    body.CreateFixture(fd);

    // Add the dominoes.
    const n = 12;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < (n - i); j++) {
        const offset = new b2Vec2((j - (n - 1 - i) * 0.5) * 1.5 * HEIGHT, (i + 0.5) * (HEIGHT + 2 * WIDTH) - WIDTH - 240);
        add_domino(world, offset, false);
        add_domino(world, b2Vec2.AddVV(offset, new b2Vec2(0, (HEIGHT + WIDTH) / 2), new b2Vec2()), true);

        if (j === 0) {
          add_domino(world, b2Vec2.AddVV(offset, new b2Vec2(0.5 * (WIDTH - HEIGHT), HEIGHT + WIDTH), new b2Vec2()), false);
        }

        if (j !== n - i - 1) {
          add_domino(world, b2Vec2.AddVV(offset, new b2Vec2(HEIGHT * 0.75, (HEIGHT + 3 * WIDTH) / 2), new b2Vec2()), true);
        } else {
          add_domino(world, b2Vec2.AddVV(offset, new b2Vec2(0.5 * (HEIGHT - WIDTH), HEIGHT + WIDTH), new b2Vec2()), false);
        }
      }
    }
  }

  public GetDefaultViewZoom(): number {
    return 10.0;
  }

  public static Create() {
    return new PyramidTopple();
  }
}
