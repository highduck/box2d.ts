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
    var box2d, testbed, MobileBalanced;
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
            MobileBalanced = class MobileBalanced extends testbed.Test {
                constructor() {
                    super();
                    // Create ground body.
                    const /*b2BodyDef*/ bodyDef = new box2d.b2BodyDef();
                    bodyDef.position.Set(0.0, 20.0);
                    const ground = this.m_world.CreateBody(bodyDef);
                    const /*float32*/ a = 0.5;
                    const /*b2Vec2*/ h = new box2d.b2Vec2(0.0, a);
                    const /*b2Body*/ root = this.AddNode(ground, box2d.b2Vec2_zero, 0, 3.0, a);
                    const /*b2RevoluteJointDef*/ jointDef = new box2d.b2RevoluteJointDef();
                    jointDef.bodyA = ground;
                    jointDef.bodyB = root;
                    jointDef.localAnchorA.SetZero();
                    jointDef.localAnchorB.Copy(h);
                    this.m_world.CreateJoint(jointDef);
                }
                AddNode(parent, localAnchor, depth, offset, a) {
                    const /*float32*/ density = 20.0;
                    const /*b2Vec2*/ h = new box2d.b2Vec2(0.0, a);
                    //  b2Vec2 p = parent->GetPosition() + localAnchor - h;
                    const /*b2Vec2*/ p = parent.GetPosition().Clone().SelfAdd(localAnchor).SelfSub(h);
                    const /*b2BodyDef*/ bodyDef = new box2d.b2BodyDef();
                    bodyDef.type = 2 /* b2_dynamicBody */;
                    bodyDef.position.Copy(p);
                    const /*b2Body*/ body = this.m_world.CreateBody(bodyDef);
                    const /*b2PolygonShape*/ shape = new box2d.b2PolygonShape();
                    shape.SetAsBox(0.25 * a, a);
                    body.CreateFixture(shape, density);
                    if (depth === MobileBalanced.e_depth) {
                        return body;
                    }
                    shape.SetAsBox(offset, 0.25 * a, new box2d.b2Vec2(0, -a), 0.0);
                    body.CreateFixture(shape, density);
                    const /*b2Vec2*/ a1 = new box2d.b2Vec2(offset, -a);
                    const /*b2Vec2*/ a2 = new box2d.b2Vec2(-offset, -a);
                    const /*b2Body*/ body1 = this.AddNode(body, a1, depth + 1, 0.5 * offset, a);
                    const /*b2Body*/ body2 = this.AddNode(body, a2, depth + 1, 0.5 * offset, a);
                    const /*b2RevoluteJointDef*/ jointDef = new box2d.b2RevoluteJointDef();
                    jointDef.bodyA = body;
                    jointDef.localAnchorB.Copy(h);
                    jointDef.localAnchorA.Copy(a1);
                    jointDef.bodyB = body1;
                    this.m_world.CreateJoint(jointDef);
                    jointDef.localAnchorA.Copy(a2);
                    jointDef.bodyB = body2;
                    this.m_world.CreateJoint(jointDef);
                    return body;
                }
                Step(settings) {
                    super.Step(settings);
                }
                static Create() {
                    return new MobileBalanced();
                }
            };
            exports_1("MobileBalanced", MobileBalanced);
            MobileBalanced.e_depth = 4;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9iaWxlQmFsYW5jZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2JpbGVCYWxhbmNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRTs7Ozs7Ozs7Ozs7Ozs7O1lBS0YsaUJBQUEsTUFBYSxjQUFlLFNBQVEsT0FBTyxDQUFDLElBQUk7Z0JBRzlDO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQUVSLHNCQUFzQjtvQkFDdEIsTUFBTSxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNwRCxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoRCxNQUFNLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO29CQUMxQixNQUFNLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFOUMsTUFBTSxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFM0UsTUFBTSxzQkFBc0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDdkUsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7b0JBQ3hCLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUN0QixRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNoQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztv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