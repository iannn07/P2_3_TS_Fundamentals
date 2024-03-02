import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  // Event Listener (Submit Trigger)
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText.length) return;

    // To checks whether the list is empty or not
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    // Adding new item to the list
    const newItem = new ListItem(itemId.toString(), newEntryText);
    
    // Render the app
    fullList.addItem(newItem);
    template.render(fullList);
  });

  // Event Listener (Clear Trigger)
  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;

  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  // Load & Render the App
  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
