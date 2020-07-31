/*
 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
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

 // #if B2_ENABLE_CONTROLLER

import {b2Controller} from "./b2Controller";
import {b2Vec2} from "../common/b2Math";
import {b2TimeStep} from "../dynamics/b2TimeStep";
import {b2Draw} from "../common/b2Draw";

/**
 * Applies a force every frame
 */
export class b2ConstantAccelController extends b2Controller {
    /**
     * The acceleration to apply
     */
    readonly A = new b2Vec2(0, 0);

    Step(step: b2TimeStep) {
        const dtA = b2Vec2.MulSV(step.dt, this.A, b2ConstantAccelController.Step_s_dtA);
        for (let i = this.m_bodyList; i; i = i.nextBody) {
            const body = i.body;
            if (!body.IsAwake()) {
                continue;
            }
            body.SetLinearVelocity(b2Vec2.AddVV(body.GetLinearVelocity(), dtA, b2Vec2.s_t0));
        }
    }

    private static Step_s_dtA = new b2Vec2();

    Draw(draw: b2Draw) {
    }
}

// #endif