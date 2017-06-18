import database


def parse_expenses(expenses_rows):
    output = 'Name\tCategory\tDescription\tRecord_Timestamp\n';
    for expenses in expenses_rows:
        output += '%s\t%s\t%s\t%d\t%d\n' % (expenses.username, expenses.category, expenses.description, expenses.price, expenses.record_ts)
    return output


def get_all_expenses():
    session = database.create_session()
    rows = session.execute('SELECT username, category, description, price, record_ts from expense;')
    return rows
    #print_expenses(rows)


def print_expenses(expenses_rows):
    print('Name\tCategory\tDescription\tPrice\tRecord_Timestamp')
    for expenses in expenses_rows:
        print('%s\t%s\t%s\t%d\t%d\n' % (expenses.username, expenses.category, expenses.description, expenses.price, expenses.record_ts))
        #print(expenses)


def save_expense(expense_map):
    session = database.create_session()
    id = session.execute('SELECT id from expenses')
    session.execute('INSERT INTO expense(username, category, description, price, record_ts) VALUES(%s, %s, %s, %s, %s);',(expense_map['username'], expense_map['category'], expense_map['description'], expense_map['price'], expense_map['timestamp']))

