class MetuBalansas {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.months = params.months;
        this.DOM = null;
    }

    init() {
        this.renderTableList();
    }

    generateTableItem(item, index) {
        return `<div class="table-row">
                        <div class="cell">${index}</div>
                        <div class="cell">${this.months[index - 1 ]}</div>
                        <div class="cell">${item.income ? item.income + ' Eur' : '-'}</div>
                        <div class="cell">${item.expense ? item.expense : '-'}</div>
                        <div class="cell">${(item.income ? item.income : 0 ) - (item.expense ? item.expense : 0) + ' Eur'}</div>
                    </div>`;
    }

    generateFooterTable(item) {
        return `<div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">0.00 Eur</div>
                <div class="cell">0.00 Eur</div>
                <div class="cell">0.00 Eur</div>
                 `;
    }

    renderTableList() {
        let HTML = '';
        let index = 0;
        this.DOM = document.querySelector(this.selector);
        for(let item of this.data) {
            index ++;
            HTML += this.generateTableItem(item, index);
        }

        this.DOM.innerHTML = HTML;
    }

    renderFooterTableList() {

    }
}

export {MetuBalansas};