from flask import Flask, request, json, jsonify
import expenses

app = Flask(__name__)


@app.route("/")
def hello():
    return 'Welcome to Budget Tracker'


@app.route("/allexpences")
def all_expences():
    jsonresult = ''
    try:
        expenseList = []
        expenceRecords = expenses.get_all_expenses()
        for record in expenceRecords:
            expense = "{'username': %s,'category': %s,'description': %s,'price': %d,'timestamp': %d}" %(record.username,record.category,record.description,record.price,record.record_ts)
            expenseList.append(expense)
            print('Record ' + expense)
        jsonresult = json.dumps(expenseList)
    except Exception as e:
        print('Error in parsing json ', e)
    return jsonify(users=jsonresult)


@app.route("/addexpense", methods=['post'])
def add_expense():
    expenserecord = request.get_json()
    #expense = json.loads(expenserecord)
    expenses.save_expense(expenserecord)
    return 'Ok'


if __name__ == '__main__':
    app.run()