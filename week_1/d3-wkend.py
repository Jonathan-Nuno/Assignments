### Weekend assignment - todolist

# Add task to list
def add(todo, x, y):
    todo[x] = y

# Remove task from list
def remover(todo, number):
        index = number - 1
        d = list(todo)[index]
        del todo[d]

# View all task
def view2(x):
    n_order = 0
    for key, val in x.items():
        n_order += 1
        print("{0} - {1} - {2}".format(n_order, key, val))

# Dictionary & array
todo = {}

# Syntax
loop = True

while loop:
    print("TODO List")
    print("1. Add a task")
    print("2. Remove a task")
    print("3. View all tasks")
    print("Enter Q to quit")

    sel = (input("Please enter your selection: "))

    if sel in ('1', '2', '3', "q" , "Q"):
        if sel == '1': #add task
            name = input("Please provide a task name: ")
            prio = input("Please select prioty level (High | Medium | Low): ")
            add(todo, name, prio)

        elif sel == '2': #remove task
            number = int(input("Please provide list number to remove: "))
            remover(todo, number)

        elif sel == '3': #print todo list
            view2(todo)

        elif sel == "q" or sel == "Q": #exit todo list
            print("You have quit the TODO List")
            break

    else: #repeat loop if invalid selection occurs
        print("Please enter a valid secltion")
