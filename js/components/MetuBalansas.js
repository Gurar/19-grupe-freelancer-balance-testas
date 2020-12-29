class MetuBalansas {
    constructor(params) {
        this.selectorTable = params.selectorTable;
        this.selectorFooter = params.selectorFooter;
        this.data = params.data;
        this.months = params.months;
        this.DOM = null;
        this.yearIncome = 0;
        this.yearExpense = 0;
        this.yearBalance = 0

    }

    init() {
        this.renderTableList();
        this.renderFooterTableList();
    }

    generateTableItem(item, index) {
        return `<div class="table-row">
                        <div class="cell">${index}</div>
                        <div class="cell">${this.months[index - 1]}</div>
                        <div class="cell">${item.income ? item.income + ' Eur' : '-'}</div>
                        <div class="cell">${item.expense ? item.expense : '-'}</div>
                        <div class="cell">${(item.income ? item.income : 0 ) - (item.expense ? item.expense : 0) + ' Eur'}</div>
                    </div>`;
    }

    renderTableList() {
        let HTML = '';
        let index = 0;
        this.DOM = document.querySelector(this.selectorTable);
        for(let item of this.data) {
            index ++;
            this.yearIncome += item.income ? item.income : 0;
            this.yearExpense+= item.expense ? item.expense : 0;
            this.yearBalance += (item.income ? item.income : 0) - (item.expense ? item.expense : 0);
            HTML += this.generateTableItem(item, index);
        }

        this.DOM.innerHTML = HTML;
    }

    renderFooterTableList() {
        let HTML = `<div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">${this.yearIncome} Eur</div>
        <div class="cell">${this.yearExpense} Eur</div>
        <div class="cell">${this.yearBalance} Eur</div>`;

        this.DOM = document.querySelector(this.selectorFooter);

        this.DOM.innerHTML = HTML;
    }
}

export {MetuBalansas};