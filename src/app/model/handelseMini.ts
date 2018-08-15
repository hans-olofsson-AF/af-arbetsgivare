export class HandelseMini {
  private _id: number;
  private _typ; string;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get typ(): string {
    return this._typ;
  }

  set typ(typ: string) {
    this._typ = typ;
  }
}
