from datetime import datetime

pool_tables = []
fmt = '%H:%M:%S' # format for datetime
cost = 30 # cost per time rate
time = 60 # time rate in minutes


class PoolTable:
    def __init__(self, table_number):
        self.table_number = table_number
        self.start_time = None
        self.end_time = None
        self.is_occupied = False
        self.time_played = None

    def check_out(self):
        self.start_time = datetime.now()
        self.end_time = None
        self.is_occupied = True
    
    def check_in(self):
        self.end_time = datetime.now()
        self.is_occupied = False

    def total_time(self):
        self.time_played = self.end_time - self.start_time
    
    def total_time_no_end(self):
        self.time_played = datetime.now() - self.start_time


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
        if table.is_occupied == False:
            print(f'Pool Table #{table.table_number} | Start Time-{format_time(table.start_time)} | End Time-{format_time(table.end_time)} | Status-Unoccupied')
        else:
            print(f'Pool Table #{table.table_number} | Start Time-{format_time(table.start_time)} | End Time-{format_time(table.end_time)} | Status-Occupied')

def format_time(dt):
    if dt == None:
        return "Time not started"
    else:
        return dt.strftime(fmt)

def cost_calc(time_played, cost, time):
    x = time_played / time 
    return (x * cost)

for index in range(1,13):
    pool_table = PoolTable(index)
    pool_tables.append(pool_table)


while True:
    display_start()
    choice = input("Please select an option: ")

    if choice == "1": # display all tables
        display_tables()

    elif choice == "2": # check out a table
        try:
            selector = int(input("Please select a table: "))
            pool_table = pool_tables[selector- 1]
        except ValueError:
            print("Invalid input, please only enter numbers")
        except IndexError:
            print("Please enter number between 1 through 12")

        if pool_table.is_occupied == True:
            print("This table is currently occupied")
        else:
            pool_table.check_out()

    elif choice == "3": # check in a table
        try:   
            selector = int(input("Please enter your table number: "))
            pool_table = pool_tables[selector -1]
        except ValueError:
            print("Invalid input, please only enter numbers")
        except IndexError:
            print("Please enter number between 1 through 12")            
        
        if pool_table.is_occupied == False:
            print("This table has not been checked out")
        else:
            pool_table.check_in()

    elif choice == "4": # check cost
        try:   
            selector = int(input("Please enter your table number: "))
            pool_table = pool_tables[selector -1]
        except ValueError:
            print("Invalid input, please only enter numbers")
        except IndexError:
            print("Please enter number between 1 through 12")       
        
        if pool_table.start_time == None and pool_table.end_time == None:
            print("Invalid selection, Table not in use")
        elif pool_table.start_time != None and pool_table.end_time == None:
            pool_table.total_time_no_end()
            played_time_mins = int(round(pool_table.time_played.total_seconds() / 60))
            current_cost = cost_calc(played_time_mins, cost, time)
            print(f'Pool table #{pool_table.table_number} | Current Time Played - {played_time_mins} minutes | Current Cost - ${current_cost:.2f}')
        else:    
            pool_table.total_time()
            played_time_mins = int(round(pool_table.time_played.total_seconds() / 60))
            final_cost = cost_calc(played_time_mins, cost, time)
            print(f'Pool table #{pool_table.table_number} | Final Total Time - {played_time_mins} minutes | Final Total Cost - ${final_cost:.2f}')

    else: # exit table manager
        print("Thank you for using Table Manager")
        break


    
