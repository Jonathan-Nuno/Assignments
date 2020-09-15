# Assignment 1 - Grocery App

grocery_items = []

class Grocery_list:
    def __init__(self, store):
        self.store = store
        self.items = []

class Grocery_Items:
    def __init__(self, itemName, itemPrice, itemQuantity):
        self.item = itemName
        self.price = itemPrice
        self.quantity = itemQuantity

def add():
    store = input("Enter store name: ")
    item = input("Enter Item: ")
    price = float(input("Enter price of the item: "))
    quantity = float(input("Enter quantity: "))
    return (store, item, price, quantity)

def display_items():
    print("/// Grocery List ///")
    for index in range(0, len(grocery_items)):
        grocery_item = grocery_items[index]
        print(f' {index + 1}: {grocery_item["item"]} - ${grocery_item["price"]} - {grocery_item["quantity"]}')

def store():
    grocery_item = grocery_items[store]
    print(f'{grocery_item["store"]} ')
    # sel_store = input("Enter store name for shopping list: ")
    # print(sel_store)


while True:
    print("""
    1. Add an item
    2. Delete an item
    3. Display all items
    q. Quit Grocery List    
    """)

    selection = input("Make a selection: ")
    if selection == "1":
        (store, item, price, quantity) = add()
        grocery_item = {"store": store, "item": item, "price": price, "quantity": quantity}
        grocery_items.append(grocery_item)
    elif selection == "2":
        display_items()
        del_item = int(input("Please enter item you wish to delete: "))
        del grocery_items[del_item - 1]
    elif selection == "3":
        display_items()

    elif selection == "q" or selection == "Q":
        break
    else:
        print("Invalid Entry")


        




