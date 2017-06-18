class BudgetTracker {
    constructor() {
        this.handleEvents();
    }

    handleEvents() {
        this.addBudget()
    }

    sendAjax(url, data = '', method, callback) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(this.readyState === 4 && this.status === 200) {
                callback.call(xhr.responseText);
            }
        }
        xhr.open(method, url, true);
        xhr.send(data);
    }

    addBudget() {
        document.getElementById('submit_expense').addEventListener('click', (event) => {
            let user_name = 'default_user';
            let price = document.getElementById('price').value;
            let category = document.getElementById('category').value;
            let date = document.getElementById('date').value;
            let month = document.getElementById('month').value;
            let year = document.getElementById('year').value;
            let description = document.getElementById('description').value;

            let timestamp = new Date(parseInt(year, 10), parseInt(month - 1, 10), parseInt(date)).getTime();

            let data = {
                "username": user_name,
                "price": price,
                "category": category,
                "description": description,
                "record_ts": timestamp
            };

            let url = '';
            this.sendAjax(url, JSON.stringify(data), 'POST', (result) => {
                console.log(result);
            });
        });
    }
}

new BudgetTracker();