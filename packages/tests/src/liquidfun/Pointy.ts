/*
 * Copyright (c) 2014 Google, Inc.
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

// #if B2_ENABLE_PARTICLE

import {
  b2BodyDef,
  b2ParticleDef,
  b2ParticleFlag,
  b2PolygonShape,
  b2Transform,
  b2Vec2,
} from '@highduck/box2d';
import { Settings, Test } from '@highduck/box2d-testbed';

/**
 * Test behavior when particles fall on a convex ambigious Body
 * contact fixture junction.
 */

export class Pointy extends Test {
  public m_killfieldShape = new b2PolygonShape();
  public m_killfieldTransform = new b2Transform();

  constructor() {
    super();

    {
      const bd = new b2BodyDef();
      const ground = this.m_world.CreateBody(bd);

      // Construct a triangle out of many polygons to ensure there's no
      // issue with particles falling directly on an ambiguous corner

      const xstep = 1.0;
      for (let x = -10.0; x < 10.0; x += xstep) {
        const shape = new b2PolygonShape();
        const vertices = [
          new b2Vec2(x, -10.0),
          new b2Vec2(x + xstep, -10.0),
          new b2Vec2(0.0, 25.0),
        ];
        shape.Set(vertices, 3);
        ground.CreateFixture(shape, 0.0);
      }
    }

    this.m_particleSystem.SetRadius(0.25 * 2); // HACK: increase particle radius
    const particleType = Test.GetParticleParameterValue();
    if (particleType === b2ParticleFlag.b2_waterParticle) {
      this.m_particleSystem.SetDamping(0.2);
    }

    // Create killfield shape and transform
    this.m_killfieldShape = new b2PolygonShape();
    this.m_killfieldShape.SetAsBox(50.0, 1.0);

    // Put this at the bottom of the world
    this.m_killfieldTransform = new b2Transform();
    const loc = new b2Vec2(-25, 1);
    this.m_killfieldTransform.SetPositionAngle(loc, 0);
  }

  public Step(settings: Settings) {
    super.Step(settings);

    const flags = Test.GetParticleParameterValue();
    const pd = new b2ParticleDef();

    pd.position.Set(0.0, 33.0);
    pd.velocity.Set(0.0, -1.0);
    pd.flags = flags;

    if (flags & (b2ParticleFlag.b2_springParticle | b2ParticleFlag.b2_elasticParticle)) {
      const count = this.m_particleSystem.GetParticleCount();
      pd.velocity.Set(count & 1 ? -1.0 : 1.0, -5.0);
      pd.flags |= b2ParticleFlag.b2_reactiveParticle;
    }

    this.m_particleSystem.CreateParticle(pd);

    // kill every particle near the bottom of the screen
    this.m_particleSystem.DestroyParticlesInShape(this.m_killfieldShape, this.m_killfieldTransform);
  }

  public static Create() {
    return new Pointy();
  }
}

// #endif
