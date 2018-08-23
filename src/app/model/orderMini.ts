export class OrderMini {
  private _id: number;
  private _yrkesbenamning: string;
  private _platsrubrik: string;
  private _tilltrade: Date;
  private _forstaPubliceringsdatum: Date;
  private _sistaPubliceringsdatum: Date;
  private _sistaAnsokningsdatum: Date;
  private _ansokanOvrigt: string;

  /**
   * Getter platsrubrik
   * @return {string}
   */
  public get platsrubrik(): string {
    return this._platsrubrik;
  }

  /**
   * Setter platsrubrik
   * @param {string} value
   */
  public set platsrubrik(value: string) {
    this._platsrubrik = value;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter yrkesbenamning
   * @return {string}
   */
  public get yrkesbenamning(): string {
    return this._yrkesbenamning;
  }

  /**
   * Getter tilltrade
   * @return {Date}
   */
  public get tilltrade(): Date {
    return this._tilltrade;
  }

  /**
   * Getter forstaPubliceringsdatum
   * @return {Date}
   */
  public get forstaPubliceringsdatum(): Date {
    return this._forstaPubliceringsdatum;
  }

  /**
   * Getter sistaPubliceringsdatum
   * @return {Date}
   */
  public get sistaPubliceringsdatum(): Date {
    return this._sistaPubliceringsdatum;
  }

  /**
   * Getter sistaAnsokningsdatum
   * @return {Date}
   */
  public get sistaAnsokningsdatum(): Date {
    return this._sistaAnsokningsdatum;
  }

  /**
   * Getter ansokanOvrigt
   * @return {string}
   */
  public get ansokanOvrigt(): string {
    return this._ansokanOvrigt;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter yrkesbenamning
   * @param {string} value
   */
  public set yrkesbenamning(value: string) {
    this._yrkesbenamning = value;
  }

  /**
   * Setter tilltrade
   * @param {Date} value
   */
  public set tilltrade(value: Date) {
    this._tilltrade = value;
  }

  /**
   * Setter forstaPubliceringsdatum
   * @param {Date} value
   */
  public set forstaPubliceringsdatum(value: Date) {
    this._forstaPubliceringsdatum = value;
  }

  /**
   * Setter sistaPubliceringsdatum
   * @param {Date} value
   */
  public set sistaPubliceringsdatum(value: Date) {
    this._sistaPubliceringsdatum = value;
  }

  /**
   * Setter sistaAnsokningsdatum
   * @param {Date} value
   */
  public set sistaAnsokningsdatum(value: Date) {
    this._sistaAnsokningsdatum = value;
  }

  /**
   * Setter ansokanOvrigt
   * @param {string} value
   */
  public set ansokanOvrigt(value: string) {
    this._ansokanOvrigt = value;
  }
}
