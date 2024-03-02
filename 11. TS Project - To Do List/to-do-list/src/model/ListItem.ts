export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _itemId: string = "",
    private _itemName: string = "",
    private _isChecked: boolean = false
  ) {}
  get id(): string {
    return this._itemId;
  }
  set id(id: string) {
    this._itemId = id;
  }
  get item(): string {
    return this._itemName;
  }
  set item(item: string) {
    this._itemName = item;
  }
  get checked(): boolean {
    return this._isChecked;
  }
  set checked(checked: boolean) {
    this._isChecked = checked;
  }
}
