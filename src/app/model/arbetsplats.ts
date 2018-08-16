import {HandelseMini} from './handelsemini';

export class Arbetsplats {
  private _kundnr: number;
  private _namn: string;
  private _duns: number;
  private _utdelningsadress: string;
  private _postnr: string;
  private _postort: string;
  private _telefon: string;
  private _epost: string;
  private _kontaktperson: string;
  private _handelserMini: Array<HandelseMini>;

  get kundnr(): number {
    return this._kundnr;
  }

  set kundnr(kundnr: number) {
    this._kundnr = kundnr;
  }

  get namn(): string {
    return this._namn;
  }

  set namn(namn: string) {
    this._namn = namn;
  }

  get duns(): number {
    return this._duns;
  }

  set duns(duns: number) {
    this._duns = duns;
  }

  get utdelningsadress(): string {
    return this._utdelningsadress;
  }

  set utdelningsadress(utdelningsadress: string) {
    this._utdelningsadress = utdelningsadress;
  }

  get postnr(): string {
    return this._postnr;
  }

  set postnr(postnr: string) {
    this._postnr = postnr;
  }

  get postort(): string {
    return this._postort;
  }

  set postort(postort: string) {
    this._postort = postort;
  }

  get telefon(): string {
    return this._telefon;
  }

  set telefon(telefon: string) {
    this._telefon = telefon;
  }

  get epost(): string {
    return this._epost;
  }

  set epost(epost: string) {
    this._epost = epost;
  }

  get kontaktperson(): string {
    return this._kontaktperson;
  }

  set kontaktperson(kontaktperson: string) {
    this._kontaktperson = kontaktperson;
  }

  get handelserMini(): Array<HandelseMini> {
    return this._handelserMini;
  }

  set handelserMini(handelseMini: Array<HandelseMini>) {
    this._handelserMini = handelseMini;
  }
}
