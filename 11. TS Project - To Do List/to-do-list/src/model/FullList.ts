import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

function isString(value: any): value is string {
  return typeof value === "string";
}

export default class FullList implements List {
  // Making the class to be a singleton (Only one instance)
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("list");
    if (!isString(storedList)) return;

    // Create new list
    const parsedList: {
      _itemId: string;
      _itemName: string;
      _isChecked: boolean;
    }[] = JSON.parse(storedList);

    // Store them to ListItem
    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._itemId,
        itemObj._itemName,
        itemObj._isChecked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("list", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
