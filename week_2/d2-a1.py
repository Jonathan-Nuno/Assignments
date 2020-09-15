from datetime import datetime

pool_tables = []

class PoolTable:
    def __init__(self, table_number):
        self.table_number = table_number
        self.start_time = None
        self.end_time = None
        # self.cost = cost
        self.is_occupied = False
    
    def check_out(self):
        self.start_time = datetime.now()
        self.end_time = None
        self.is_occupied = True
    
    def check_in(self):
        self.end_time = datetime.now()
        self.is_occupied = False


def display_start():
    print("""
    /// Pool Table Manager ///
    1. Check availability
    2. Check-out 
    3. Check-in
    4. Check cost
    !!Enter any other key to EXIT!!
    """)

def display_tables():
    for index in range(0, len(pool_tables)):
        table = pool_tables[index]
        print(f'Pool Table #{table.table_number} | Start Time-{table.start_time} | End Time-{table.end_time} | Status-{table.is_occupied}')


for index in range(1,13):
    pool_table = PoolTable(index)
    pool_tables.append(pool_table)

while True:
    display_start()
    choice = input("Please select an option: ")

    if choice == "1": # display all tables
        display_tables()

    elif choice == "2": # check out a table
        selector = int(input("Please select a table: "))
        pool_table = pool_tables[selector - 1]
        pool_table.check_out()

    elif choice == "3": # check in a table
        selector = int(input("Please enter your table number: "))
        pool_table = pool_tables[selector -1]
        pool_table.check_in()

    else: # exit table manager
        print("Thank you for using Table Manager")
        break


    
