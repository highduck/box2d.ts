/*
 * Copyright (c) 2006-2012 Erin Catto http://www.org
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

import {
  b2_pi,
  b2Color,
  b2Distance,
  b2DistanceInput,
  b2DistanceOutput,
  b2PolygonShape,
  b2SimplexCache,
  b2Transform,
  b2Vec2,
} from '@highduck/box2d';
import { DRAW_STRING_NEW_LINE, g_debugDraw, Settings, Test } from '@highduck/box2d-testbed';

export class DistanceTest extends Test {
  public m_positionB = new b2Vec2();
  public m_angleB = 0;
  public m_transformA = new b2Transform();
  public m_transformB = new b2Transform();
  public m_polygonA = new b2PolygonShape();
  public m_polygonB = new b2PolygonShape();

  constructor() {
    super();

    {
      this.m_transformA.SetIdentity();
      this.m_transformA.p.Set(0.0, -0.2);
      this.m_polygonA.SetAsBox(10.0, 0.2);
    }

    {
      this.m_positionB.Set(12.017401, 0.13678508);
      this.m_angleB = -0.0109265;
      this.m_transformB.SetPositionAngle(this.m_positionB, this.m_angleB);

      this.m_polygonB.SetAsBox(2.0, 0.1);
    }
  }

  public Keyboard(key: string) {
    switch (key) {
      case 'a':
        this.m_positionB.x -= 0.1;
        break;

      case 'd':
        this.m_positionB.x += 0.1;
        break;

      case 's':
        this.m_positionB.y -= 0.1;
        break;

      case 'w':
        this.m_positionB.y += 0.1;
        break;

      case 'q':
        this.m_angleB += 0.1 * b2_pi;
        break;

      case 'e':
        this.m_angleB -= 0.1 * b2_pi;
        break;
    }

    this.m_transformB.SetPositionAngle(this.m_positionB, this.m_angleB);
  }

  public Step(settings: Settings): void {
    super.Step(settings);

    const input = new b2DistanceInput();
    input.proxyA.SetShape(this.m_polygonA, 0);
    input.proxyB.SetShape(this.m_polygonB, 0);
    input.transformA.Copy(this.m_transformA);
    input.transformB.Copy(this.m_transformB);
    input.useRadii = true;
    const cache = new b2SimplexCache();
    cache.count = 0;
    const output = new b2DistanceOutput();
    b2Distance(output, cache, input);

    g_debugDraw.DrawString(5, this.m_textLine, `distance = ${output.distance.toFixed(2)}`);
    this.m_textLine += DRAW_STRING_NEW_LINE;

    g_debugDraw.DrawString(5, this.m_textLine, `iterations = ${output.iterations}`);
    this.m_textLine += DRAW_STRING_NEW_LINE;

    {
      const color = new b2Color(0.9, 0.9, 0.9);
      const v = [];
      for (let i = 0; i < this.m_polygonA.m_count; ++i) {
        v[i] = b2Transform.MulXV(this.m_transformA, this.m_polygonA.m_vertices[i], new b2Vec2());
      }
      g_debugDraw.DrawPolygon(v, this.m_polygonA.m_count, color);

      for (let i = 0; i < this.m_polygonB.m_count; ++i) {
        v[i] = b2Transform.MulXV(this.m_transformB, this.m_polygonB.m_vertices[i], new b2Vec2());
      }
      g_debugDraw.DrawPolygon(v, this.m_polygonB.m_count, color);
    }

    const x1 = output.pointA;
    const x2 = output.pointB;

    const c1 = new b2Color(1.0, 0.0, 0.0);
    g_debugDraw.DrawPoint(x1, 4.0, c1);

    const c2 = new b2Color(1.0, 1.0, 0.0);
    g_debugDraw.DrawPoint(x2, 4.0, c2);
  }

  public static Create(): Test {
    return new DistanceTest();
  }
}
