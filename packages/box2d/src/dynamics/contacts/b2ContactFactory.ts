import { b2ShapeType } from '../../collision/shapes/b2Shape';
import { b2Contact } from './b2Contact';
import { b2Fixture } from '../b2Fixture';
import { b2Assert } from '../../common/b2Settings';

export class b2ContactFactory {
  readonly m_registers: number[] = [];
  pool: b2Contact[] = [];

  constructor() {
    this.InitializeRegisters();
  }

  private createFromPool() {
    return this.pool.pop() ?? new b2Contact();
  }

  private destroyToPool(contact: b2Contact): void {
    this.pool.push(contact);
  }

  private AddType(typeA: b2ShapeType, typeB: b2ShapeType): void {
    this.m_registers[(typeA << 2) | typeB] = 2;
    if (typeA !== typeB) {
      this.m_registers[(typeB << 2) | typeA] = 1;
    }
  }

  private InitializeRegisters(): void {
    for (let i = 0; i < b2ShapeType.e_shapeTypeCount; ++i) {
      for (let j = 0; j < b2ShapeType.e_shapeTypeCount; ++j) {
        this.m_registers[(i << 2) | j] = 0;
      }
    }

    this.AddType(b2ShapeType.e_circleShape, b2ShapeType.e_circleShape);
    this.AddType(b2ShapeType.e_polygonShape, b2ShapeType.e_circleShape);
    this.AddType(b2ShapeType.e_polygonShape, b2ShapeType.e_polygonShape);
    this.AddType(b2ShapeType.e_edgeShape, b2ShapeType.e_circleShape);
    this.AddType(b2ShapeType.e_edgeShape, b2ShapeType.e_polygonShape);
    this.AddType(b2ShapeType.e_chainShape, b2ShapeType.e_circleShape);
    this.AddType(b2ShapeType.e_chainShape, b2ShapeType.e_polygonShape);
  }

  Create(
    fixtureA: b2Fixture,
    indexA: number,
    fixtureB: b2Fixture,
    indexB: number,
  ): b2Contact | null {
    const typeA: b2ShapeType = fixtureA.GetType();
    const typeB: b2ShapeType = fixtureB.GetType();

    !!B2_DEBUG && b2Assert(0 <= typeA && typeA < b2ShapeType.e_shapeTypeCount);
    !!B2_DEBUG && b2Assert(0 <= typeB && typeB < b2ShapeType.e_shapeTypeCount);

    const reg = this.m_registers[(typeA << 2) | typeB];

    if (reg === 0) {
      return null;
    }
    const c = this.createFromPool();
    if (reg === 2) {
      c.Reset(fixtureA, indexA, fixtureB, indexB);
    } else if (reg === 1) {
      c.Reset(fixtureB, indexB, fixtureA, indexA);
    }

    return c;
  }

  Destroy(contact: b2Contact): void {
    if (B2_DEBUG) {
      const typeA = contact.m_fixtureA.GetType();
      const typeB = contact.m_fixtureB.GetType();
      b2Assert(0 <= typeA && typeB < b2ShapeType.e_shapeTypeCount);
      b2Assert(0 <= typeA && typeB < b2ShapeType.e_shapeTypeCount);
    }

    this.destroyToPool(contact);
  }
}
