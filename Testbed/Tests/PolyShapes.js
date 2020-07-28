/*
* Copyright (c) 2006-2012 Erin Catto http://www.box2d.org
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
System.register(["@box2d", "../Testbed.js"], function (exports_1, context_1) {
    "use strict";
    var box2d, testbed, PolyShapesCallback, PolyShapes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (box2d_1) {
                box2d = box2d_1;
            },
            function (testbed_1) {
                testbed = testbed_1;
            }
        ],
        execute: function () {
            /**
             * This callback is called by box2d.b2World::QueryAABB. We find
             * all the fixtures that overlap an AABB. Of those, we use
             * b2TestOverlap to determine which fixtures overlap a circle.
             * Up to 4 overlapped fixtures will be highlighted with a yellow
             * border.
             */
            PolyShapesCallback = class PolyShapesCallback extends box2d.b2QueryCallback {
                constructor() {
                    super(...arguments);
                    this.m_circle = new box2d.b2CircleShape();
                    this.m_transform = new box2d.b2Transform();
                    this.m_count = 0;
                }
                ReportFixture(fixture) {
                    if (this.m_count === PolyShapesCallback.e_maxCount) {
                        return false;
                    }
                    const body = fixture.GetBody();
                    const shape = fixture.GetShape();
                    const overlap = box2d.b2TestOverlapShape(shape, 0, this.m_circle, 0, body.GetTransform(), this.m_transform);
                    if (overlap) {
                        this.DrawFixture(fixture);
                        ++this.m_count;
                    }
                    return true;
                }
                DrawFixture(fixture) {
                    const color = new box2d.b2Color(0.95, 0.95, 0.6);
                    const xf = fixture.GetBody().GetTransform();
                    switch (fixture.GetType()) {
                        case 0 /* e_circleShape */:
                            {
                                //const circle = ((shape instanceof box2d.b2CircleShape ? shape : null));
                                const circle = fixture.GetShape();
                                const center = box2d.b2Transform.MulXV(xf, circle.m_p, new box2d.b2Vec2());
                                const radius = circle.m_radius;
                                testbed.g_debugDraw.DrawCircle(center, radius, color);
                            }
                            break;
                        case 2 /* e_polygonShape */:
                            {
                                //const poly = ((shape instanceof box2d.b2PolygonShape ? shape : null));
                                const poly = fixture.GetShape();
                                const vertexCount = poly.m_count;
                                const vertices = [];
                                for (let i = 0; i < vertexCount; ++i) {
                                    vertices[i] = box2d.b2Transform.MulXV(xf, poly.m_vertices[i], new box2d.b2Vec2());
                                }
                                testbed.g_debugDraw.DrawPolygon(vertices, vertexCount, color);
                            }
                            break;
                        default:
                            break;
                    }
                }
            };
            exports_1("PolyShapesCallback", PolyShapesCallback);
            PolyShapesCallback.e_maxCount = 4;
            PolyShapes = class PolyShapes extends testbed.Test {
                constructor() {
                    super();
                    this.m_bodyIndex = 0;
                    this.m_bodies = new Array(PolyShapes.e_maxBodies);
                    this.m_polygons = box2d.b2MakeArray(4, () => new box2d.b2PolygonShape());
                    this.m_circle = new box2d.b2CircleShape();
                    // Ground body
                    {
                        const bd = new box2d.b2BodyDef();
                        const ground = this.m_world.CreateBody(bd);
                        const shape = new box2d.b2EdgeShape();
                        shape.Set(new box2d.b2Vec2(-40.0, 0.0), new box2d.b2Vec2(40.0, 0.0));
                        ground.CreateFixture(shape, 0.0);
                    }
                    {
                        const vertices = new Array(3);
                        vertices[0] = new box2d.b2Vec2(-0.5, 0.0);
                        vertices[1] = new box2d.b2Vec2(0.5, 0.0);
                        vertices[2] = new box2d.b2Vec2(0.0, 1.5);
                        this.m_polygons[0].Set(vertices, 3);
                    }
                    {
                        const vertices = new Array(3);
                        vertices[0] = new box2d.b2Vec2(-0.1, 0.0);
                        vertices[1] = new box2d.b2Vec2(0.1, 0.0);
                        vertices[2] = new box2d.b2Vec2(0.0, 1.5);
                        this.m_polygons[1].Set(vertices, 3);
                    }
                    {
                        const w = 1.0;
                        const b = w / (2.0 + box2d.b2Sqrt(2.0));
                        const s = box2d.b2Sqrt(2.0) * b;
                        const vertices = new Array(8);
                        vertices[0] = new box2d.b2Vec2(0.5 * s, 0.0);
                        vertices[1] = new box2d.b2Vec2(0.5 * w, b);
                        vertices[2] = new box2d.b2Vec2(0.5 * w, b + s);
                        vertices[3] = new box2d.b2Vec2(0.5 * s, w);
                        vertices[4] = new box2d.b2Vec2(-0.5 * s, w);
                        vertices[5] = new box2d.b2Vec2(-0.5 * w, b + s);
                        vertices[6] = new box2d.b2Vec2(-0.5 * w, b);
                        vertices[7] = new box2d.b2Vec2(-0.5 * s, 0.0);
                        this.m_polygons[2].Set(vertices, 8);
                    }
                    {
                        this.m_polygons[3].SetAsBox(0.5, 0.5);
                    }
                    {
                        this.m_circle.m_radius = 0.5;
                    }
                    for (let i = 0; i < PolyShapes.e_maxBodies; ++i) {
                        this.m_bodies[i] = null;
                    }
                }
                CreateBody(index) {
                    if (this.m_bodies[this.m_bodyIndex] !== null) {
                        this.m_world.DestroyBody(this.m_bodies[this.m_bodyIndex]);
                        this.m_bodies[this.m_bodyIndex] = null;
                    }
                    const bd = new box2d.b2BodyDef();
                    bd.type = 2 /* b2_dynamicBody */;
                    const x = box2d.b2RandomRange(-2.0, 2.0);
                    bd.position.Set(x, 10.0);
                    bd.angle = box2d.b2RandomRange(-box2d.b2_pi, box2d.b2_pi);
                    if (index === 4) {
                        bd.angularDamping = 0.02;
                    }
                    this.m_bodies[this.m_bodyIndex] = this.m_world.CreateBody(bd);
                    if (index < 4) {
                        const fd = new box2d.b2FixtureDef();
                        fd.shape = this.m_polygons[index];
                        fd.density = 1.0;
                        fd.friction = 0.3;
                        this.m_bodies[this.m_bodyIndex].CreateFixture(fd);
                    }
                    else {
                        const fd = new box2d.b2FixtureDef();
                        fd.shape = this.m_circle;
                        fd.density = 1.0;
                        fd.friction = 0.3;
                        this.m_bodies[this.m_bodyIndex].CreateFixture(fd);
                    }
                    this.m_bodyIndex = (this.m_bodyIndex + 1) % PolyShapes.e_maxBodies;
                }
                DestroyBody() {
                    for (let i = 0; i < PolyShapes.e_maxBodies; ++i) {
                        if (this.m_bodies[i] !== null) {
                            this.m_world.DestroyBody(this.m_bodies[i]);
                            this.m_bodies[i] = null;
                            return;
                        }
                    }
                }
                Keyboard(key) {
                    switch (key) {
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                            this.CreateBody(key.charCodeAt(0) - "1".charCodeAt(0));
                            break;
                        case "a":
                            for (let i = 0; i < PolyShapes.e_maxBodies; i += 2) {
                                if (this.m_bodies[i]) {
                                    const active = this.m_bodies[i].IsActive();
                                    this.m_bodies[i].SetActive(!active);
                                }
                            }
                            break;
                        case "d":
                            this.DestroyBody();
                            break;
                    }
                }
                Step(settings) {
                    super.Step(settings);
                    const callback = new PolyShapesCallback();
                    callback.m_circle.m_radius = 2.0;
                    callback.m_circle.m_p.Set(0.0, 1.1);
                    callback.m_transform.SetIdentity();
                    const aabb = new box2d.b2AABB();
                    callback.m_circle.ComputeAABB(aabb, callback.m_transform, 0);
                    this.m_world.QueryAABB(callback, aabb);
                    const color = new box2d.b2Color(0.4, 0.7, 0.8);
                    testbed.g_debugDraw.DrawCircle(callback.m_circle.m_p, callback.m_circle.m_radius, color);
                    testbed.g_debugDraw.DrawString(5, this.m_textLine, "Press 1-5 to drop stuff");
                    this.m_textLine += testbed.DRAW_STRING_NEW_LINE;
                    testbed.g_debugDraw.DrawString(5, this.m_textLine, "Press 'a' to (de)activate some bodies");
                    this.m_textLine += testbed.DRAW_STRING_NEW_LINE;
                    testbed.g_debugDraw.DrawString(5, this.m_textLine, "Press 'd' to destroy a body");
                    this.m_textLine += testbed.DRAW_STRING_NEW_LINE;
                }
                static Create() {
                    return new PolyShapes();
                }
            };
            exports_1("PolyShapes", PolyShapes);
            PolyShapes.e_maxBodies = 256;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9seVNoYXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBvbHlTaGFwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7Ozs7Ozs7Ozs7Ozs7OztZQUtGOzs7Ozs7ZUFNRztZQUNILHFCQUFBLE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLGVBQWU7Z0JBQTdEOztvQkFHUyxhQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3JDLGdCQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQ3RDLFlBQU8sR0FBRyxDQUFDLENBQUM7Z0JBd0RyQixDQUFDO2dCQXREUSxhQUFhLENBQUMsT0FBd0I7b0JBQzNDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUU7d0JBQ2xELE9BQU8sS0FBSyxDQUFDO3FCQUNkO29CQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDL0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUVqQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUU1RyxJQUFJLE9BQU8sRUFBRTt3QkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUMxQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2hCO29CQUVELE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBRU0sV0FBVyxDQUFDLE9BQXdCO29CQUN6QyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElB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QyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFDN0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUMvQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2hELFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFFOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNyQztvQkFFRDt3QkFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FB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