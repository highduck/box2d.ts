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
    var box2d, testbed, Mobile;
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
            Mobile = class Mobile extends testbed.Test {
                constructor() {
                    super();
                    // Create ground body.
                    const bodyDef = new box2d.b2BodyDef();
                    bodyDef.position.Set(0.0, 20.0);
                    const ground = this.m_world.CreateBody(bodyDef);
                    const a = 0.5;
                    const h = new box2d.b2Vec2(0.0, a);
                    const root = this.AddNode(ground, box2d.b2Vec2_zero, 0, 3.0, a);
                    const jointDef = new box2d.b2RevoluteJointDef();
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
                    if (depth === Mobile.e_depth) {
                        return body;
                    }
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
                    return new Mobile();
                }
            };
            exports_1("Mobile", Mobile);
            Mobile.e_depth = 4;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9iaWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9iaWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOzs7Ozs7Ozs7Ozs7Ozs7WUFLRixTQUFBLE1BQWEsTUFBTyxTQUFRLE9BQU8sQ0FBQyxJQUFJO2dCQUd0QztvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFFUixzQkFBc0I7b0JBQ3RCLE1BQU0sT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoRCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQ2QsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFFbkMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO29CQUNoRCxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztvQkFDeEIsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2hDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFFTSxP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