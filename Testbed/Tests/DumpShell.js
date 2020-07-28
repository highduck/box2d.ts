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
    var box2d, testbed, DumpShell;
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
            DumpShell = class DumpShell extends testbed.Test {
                constructor() {
                    super();
                    // dump begin
                    /*box2d.b2Vec2*/
                    const g = new box2d.b2Vec2(0.000000000000000, 0.000000000000000);
                    this.m_world.SetGravity(g);
                    /*box2d.b2Body*/
                    const bodies = new Array(4);
                    /*box2d.b2Joint*/
                    const joints = new Array(2);
                    {
                        /*box2d.b2BodyDef*/
                        const bd = new box2d.b2BodyDef();
                        bd.type = 0 /* b2_staticBody */;
                        bd.position.Set(0.000000000000000, 0.000000000000000);
                        bd.angle = 0.000000000000000;
                        bd.linearVelocity.Set(0.000000000000000, 0.000000000000000);
                        bd.angularVelocity = 0.000000000000000;
                        bd.linearDamping = 0.000000000000000;
                        bd.angularDamping = 0.000000000000000;
                        bd.allowSleep = true;
                        bd.awake = true;
                        bd.fixedRotation = false;
                        bd.bullet = false;
                        bd.active = true;
                        bd.gravityScale = 1.000000000000000;
                        bodies[0] = this.m_world.CreateBody(bd);
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 10.000000000000000;
                            fd.restitution = 0.000000000000000;
                            fd.density = 0.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2EdgeShape*/
                            const shape = new box2d.b2EdgeShape();
                            shape.m_radius = 0.009999999776483;
                            shape.m_vertex0.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex1.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex2.Set(44.521739959716797, 0.000000000000000);
                            shape.m_vertex3.Set(0.000000000000000, 0.000000000000000);
                            shape.m_hasVertex0 = false;
                            shape.m_hasVertex3 = false;
                            fd.shape = shape;
                            bodies[0].CreateFixture(fd);
                        }
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 10.000000000000000;
                            fd.restitution = 0.000000000000000;
                            fd.density = 0.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2EdgeShape*/
                            const shape = new box2d.b2EdgeShape();
                            shape.m_radius = 0.009999999776483;
                            shape.m_vertex0.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex1.Set(0.000000000000000, 16.695652008056641);
                            shape.m_vertex2.Set(44.521739959716797, 16.695652008056641);
                            shape.m_vertex3.Set(0.000000000000000, 0.000000000000000);
                            shape.m_hasVertex0 = false;
                            shape.m_hasVertex3 = false;
                            fd.shape = shape;
                            bodies[0].CreateFixture(fd);
                        }
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 10.000000000000000;
                            fd.restitution = 0.000000000000000;
                            fd.density = 0.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2EdgeShape*/
                            const shape = new box2d.b2EdgeShape();
                            shape.m_radius = 0.009999999776483;
                            shape.m_vertex0.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex1.Set(0.000000000000000, 16.695652008056641);
                            shape.m_vertex2.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex3.Set(0.000000000000000, 0.000000000000000);
                            shape.m_hasVertex0 = false;
                            shape.m_hasVertex3 = false;
                            fd.shape = shape;
                            bodies[0].CreateFixture(fd);
                        }
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 10.000000000000000;
                            fd.restitution = 0.000000000000000;
                            fd.density = 0.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2EdgeShape*/
                            const shape = new box2d.b2EdgeShape();
                            shape.m_radius = 0.009999999776483;
                            shape.m_vertex0.Set(0.000000000000000, 0.000000000000000);
                            shape.m_vertex1.Set(44.521739959716797, 16.695652008056641);
                            shape.m_vertex2.Set(44.521739959716797, 0.000000000000000);
                            shape.m_vertex3.Set(0.000000000000000, 0.000000000000000);
                            shape.m_hasVertex0 = false;
                            shape.m_hasVertex3 = false;
                            fd.shape = shape;
                            bodies[0].CreateFixture(fd);
                        }
                    }
                    {
                        /*box2d.b2BodyDef*/
                        const bd = new box2d.b2BodyDef();
                        bd.type = 2 /* b2_dynamicBody */;
                        bd.position.Set(0.847826063632965, 2.500000000000000);
                        bd.angle = 0.000000000000000;
                        bd.linearVelocity.Set(0.000000000000000, 0.000000000000000);
                        bd.angularVelocity = 0.000000000000000;
                        bd.linearDamping = 0.500000000000000;
                        bd.angularDamping = 0.500000000000000;
                        bd.allowSleep = true;
                        bd.awake = true;
                        bd.fixedRotation = false;
                        bd.bullet = false;
                        bd.active = true;
                        bd.gravityScale = 1.000000000000000;
                        bodies[1] = this.m_world.CreateBody(bd);
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 1.000000000000000;
                            fd.restitution = 0.500000000000000;
                            fd.density = 10.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2PolygonShape*/
                            const shape = new box2d.b2PolygonShape();
                            /*box2d.b2Vec2[]*/
                            const vs = box2d.b2Vec2.MakeArray(8);
                            vs[0].Set(6.907599925994873, 0.327199995517731);
                            vs[1].Set(-0.322800010442734, 0.282599985599518);
                            vs[2].Set(-0.322800010442734, -0.295700013637543);
                            vs[3].Set(6.885900020599365, -0.364100009202957);
                            shape.Set(vs, 4);
                            fd.shape = shape;
                            bodies[1].CreateFixture(fd);
                        }
                    }
                    {
                        /*box2d.b2BodyDef*/
                        const bd = new box2d.b2BodyDef();
                        bd.type = 2 /* b2_dynamicBody */;
                        bd.position.Set(13.043478012084959, 2.500000000000000);
                        bd.angle = 0.000000000000000;
                        bd.linearVelocity.Set(0.000000000000000, 0.000000000000000);
                        bd.angularVelocity = 0.000000000000000;
                        bd.linearDamping = 0.500000000000000;
                        bd.angularDamping = 0.500000000000000;
                        bd.allowSleep = true;
                        bd.awake = true;
                        bd.fixedRotation = false;
                        bd.bullet = false;
                        bd.active = true;
                        bd.gravityScale = 1.000000000000000;
                        bodies[2] = this.m_world.CreateBody(bd);
                        {
                            /*box2d.b2FixtureDef*/
                            const fd = new box2d.b2FixtureDef();
                            fd.friction = 1.000000000000000;
                            fd.restitution = 0.500000000000000;
                            fd.density = 10.000000000000000;
                            fd.isSensor = false;
                            fd.filter.categoryBits = 1;
                            fd.filter.maskBits = 65535;
                            fd.filter.groupIndex = 0;
                            /*box2d.b2PolygonShape*/
                            const shape = new box2d.b2PolygonShape();
                            /*box2d.b2Vec2[]*/
                            const vs = box2d.b2Vec2.MakeArray(8);
                            vs[0].Set(0.200000002980232, -0.300000011920929);
                            vs[1].Set(0.200000002980232, 0.200000002980232);
                            vs[2].Set(-6.900000095367432, 0.200000002980232);
                            vs[3].Set(-6.900000095367432, -0.300000011920929);
                            shape.Set(vs, 4);
                            fd.shape = shape;
                            bodies[2].CreateFixture(fd);
                        }
                    }
                    {
                        /*box2d.b2BodyDef*/
                        const bd = new box2d.b2BodyDef();
                        bd.type = 0 /* b2_staticBody */;
                        bd.position.Set(0.000000000000000, 0.000000000000000);
                        bd.angle = 0.000000000000000;
                        bd.linearVelocity.Set(0.000000000000000, 0.000000000000000);
                        bd.angularVelocity = 0.000000000000000;
                        bd.linearDamping = 0.000000000000000;
                        bd.angularDamping = 0.000000000000000;
                        bd.allowSleep = true;
                        bd.awake = true;
                        bd.fixedRotation = false;
                        bd.bullet = false;
                        bd.active = true;
                        bd.gravityScale = 1.000000000000000;
                        bodies[3] = this.m_world.CreateBody(bd);
                    }
                    {
                        /*box2d.b2RevoluteJointDef*/
                        const jd = new box2d.b2RevoluteJointDef();
                        jd.bodyA = bodies[1];
                        jd.bodyB = bodies[0];
                        jd.collideConnected = false;
                        jd.localAnchorA.Set(0.000000000000000, 0.000000000000000);
                        jd.localAnchorB.Set(0.847826063632965, 2.500000000000000);
                        jd.referenceAngle = 0.000000000000000;
                        jd.enableLimit = false;
                        jd.lowerAngle = 0.000000000000000;
                        jd.upperAngle = 0.000000000000000;
                        jd.enableMotor = false;
                        jd.motorSpeed = 0.000000000000000;
                        jd.maxMotorTorque = 0.000000000000000;
                        joints[0] = this.m_world.CreateJoint(jd);
                    }
                    {
                        /*box2d.b2PrismaticJointDef*/
                        const jd = new box2d.b2PrismaticJointDef();
                        jd.bodyA = bodies[1];
                        jd.bodyB = bodies[2];
                        jd.collideConnected = false;
                        jd.localAnchorA.Set(0.000000000000000, 0.000000000000000);
                        jd.localAnchorB.Set(-12.195652008056641, 0.000000000000000);
                        jd.localAxisA.Set(-1.000000000000000, 0.000000000000000);
                        jd.referenceAngle = 0.000000000000000;
                        jd.enableLimit = true;
                        jd.lowerTranslation = -20.000000000000000;
                        jd.upperTranslation = 0.000000000000000;
                        jd.enableMotor = true;
                        jd.motorSpeed = 0.000000000000000;
                        jd.maxMotorForce = 10.000000000000000;
                        joints[1] = this.m_world.CreateJoint(jd);
                    }
                    // dump end
                }
                Step(settings) {
                    super.Step(settings);
                }
                static Create() {
                    return new DumpShell();
                }
            };
            exports_1("DumpShell", DumpShell);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHVtcFNoZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRHVtcFNoZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFOzs7Ozs7Ozs7Ozs7Ozs7WUFLRixZQUFBLE1BQWEsU0FBVSxTQUFRLE9BQU8sQ0FBQyxJQUFJO2dCQUN6QztvQkFDRSxLQUFLLEVBQUUsQ0FBQztvQkFFUixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixnQkFBZ0I7b0JBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM1QixpQkFBaUI7b0JBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUFDO3dCQUMzQixtQkFBbUI7d0JBQ25CLE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNqQyxFQUFFLENBQUMsSUFBSSx3QkFBaUMsQ0FBQzt3QkFDekMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzt3QkFDdEQsRUFBRSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQzt3QkFDN0IsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzt3QkFDNUQsRUFBRSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDdkMsRUFBRSxDQUFDLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDckMsRUFBRSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDdEMsRUFBRSxD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