export class Kontaktperson {
  private _kundnr: number;
  private _typ: string;
  private _namn: string;
  private _epost: string;
  private _telnr: string;
  private _beskrivning: string;

  get kundnr(): number {
    return this._kundnr;
  }

  set kundnr(kundnr: number) {
    this._kundnr = kundnr;
  }

  get typ(): string {
    return this._typ;
  }

  set typ(typ: string) {
    this._typ = typ;
  }

  get namn(): string {
    return this._namn;
  }

  set namn(namn: string) {
    this._namn = namn;
  }

  get epost(): string {
    return this._epost;
  }

  set epost(epost: string) {
    this._epost = epost;
  }

  get telnr(): string {
    return this._telnr;
  }

  set telnr(telnr: string) {
    this._telnr = telnr;
  }

  get beskrivning(): string {
    return this._beskrivning;
  }

  set beskrivning(beskrivning: string) {
    this._beskrivning = beskrivning;
  }
}
