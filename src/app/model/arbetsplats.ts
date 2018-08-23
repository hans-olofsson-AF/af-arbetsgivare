import {Tjansteanteckning} from './tjansteanteckning';
import {Kontaktperson} from './kontaktperson';
import {OrderMini} from './orderMini';

export class Arbetsplats {
  private _kundnr: number;
  private _namn: string;
  private _duns: number;
  private _utdelningsadress: string;
  private _postnr: string;
  private _postort: string;
  private _telefon: string;
  private _epost: string;
  private _kontaktpersoner: Array<Kontaktperson>;
  private _tjansteanteckningar: Array<Tjansteanteckning>;
  private _orders: Array<OrderMini>;

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

  get kontaktpersoner(): Array<Kontaktperson> {
    return this._kontaktpersoner;
  }

  set kontaktpersoner(kontaktpersoner: Array<Kontaktperson>) {
    this._kontaktpersoner = kontaktpersoner;
  }

  get tjansteanteckningar(): Array<Tjansteanteckning> {
    return this._tjansteanteckningar;
  }

  set tjansteanteckningar(tjansteanteckningar: Array<Tjansteanteckning>) {
    this._tjansteanteckningar = tjansteanteckningar;
  }

  get orders(): Array<OrderMini> {
    return this._orders;
  }

  set orders(orders: Array<OrderMini>) {
    this._orders = orders;
  }
}
