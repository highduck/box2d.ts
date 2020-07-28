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
    var box2d, testbed, OneSidedPlatform, OneSidedPlatform_State;
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
            OneSidedPlatform = class OneSidedPlatform extends testbed.Test {
                constructor() {
                    super();
                    this.m_radius = 0.0;
                    this.m_top = 0.0;
                    this.m_bottom = 0.0;
                    this.m_state = OneSidedPlatform_State.e_unknown;
                    // Ground
                    {
                        const bd = new box2d.b2BodyDef();
                        const ground = this.m_world.CreateBody(bd);
                        const shape = new box2d.b2EdgeShape();
                        shape.Set(new box2d.b2Vec2(-40.0, 0.0), new box2d.b2Vec2(40.0, 0.0));
                        ground.CreateFixture(shape, 0.0);
                    }
                    // Platform
                    {
                        const bd = new box2d.b2BodyDef();
                        bd.position.Set(0.0, 10.0);
                        const body = this.m_world.CreateBody(bd);
                        const shape = new box2d.b2PolygonShape();
                        shape.SetAsBox(3.0, 0.5);
                        this.m_platform = body.CreateFixture(shape, 0.0);
                        this.m_bottom = 10.0 - 0.5;
                        this.m_top = 10.0 + 0.5;
                    }
                    // Actor
                    {
                        const bd = new box2d.b2BodyDef();
                        bd.type = 2 /* b2_dynamicBody */;
                        bd.position.Set(0.0, 12.0);
                        const body = this.m_world.CreateBody(bd);
                        this.m_radius = 0.5;
                        const shape = new box2d.b2CircleShape();
                        shape.m_radius = this.m_radius;
                        this.m_character = body.CreateFixture(shape, 20.0);
                        body.SetLinearVelocity(new box2d.b2Vec2(0.0, -50.0));
                        this.m_state = OneSidedPlatform_State.e_unknown;
                    }
                }
                PreSolve(contact, oldManifold) {
                    super.PreSolve(contact, oldManifold);
                    const fixtureA = contact.GetFixtureA();
                    const fixtureB = contact.GetFixtureB();
                    if (fixtureA !== this.m_platform && fixtureA !== this.m_character) {
                        return;
                    }
                    if (fixtureB !== this.m_platform && fixtureB !== this.m_character) {
                        return;
                    }
                    const position = this.m_character.GetBody().GetPosition();
                    if (position.y < this.m_top + this.m_radius - 3.0 * box2d.b2_linearSlop) {
                        contact.SetEnabled(false);
                    }
                }
                Step(settings) {
                    super.Step(settings);
                }
                static Create() {
                    return new OneSidedPlatform();
                }
            };
            exports_1("OneSidedPlatform", OneSidedPlatform);
            (function (OneSidedPlatform_State) {
                OneSidedPlatform_State[OneSidedPlatform_State["e_unknown"] = 0] = "e_unknown";
                OneSidedPlatform_State[OneSidedPlatform_State["e_above"] = 1] = "e_above";
                OneSidedPlatform_State[OneSidedPlatform_State["e_below"] = 2] = "e_below";
            })(OneSidedPlatform_State || (OneSidedPlatform_State = {}));
            exports_1("OneSidedPlatform_State", OneSidedPlatform_State);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT25lU2lkZWRQbGF0Zm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk9uZVNpZGVkUGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQkU7Ozs7Ozs7Ozs7Ozs7OztZQUtGLG1CQUFBLE1BQWEsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLElBQUk7Z0JBUWhEO29CQUNFLEtBQUssRUFBRSxDQUFDO29CQVJILGFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ2YsVUFBSyxHQUFHLEdBQUcsQ0FBQztvQkFDWixhQUFRLEdBQUcsR0FBRyxDQUFDO29CQUNmLFlBQU8sR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUM7b0JBT2hELFNBQVM7b0JBQ1Q7d0JBQ0UsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUUzQyxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNyRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsV0FBVztvQkFDWDt3QkFDRSxNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3QkFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVB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