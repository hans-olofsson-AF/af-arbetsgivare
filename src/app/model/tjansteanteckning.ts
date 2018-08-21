export class Tjansteanteckning {
  private _rubrik: string;
  private _text; string;

  get rubrik(): string {
    return this._rubrik;
  }

  set rubrik(rubrik: string) {
    this._rubrik = rubrik;
  }

  get text(): string {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }
}
