export class ListTemplate {
    constructor(cointainer) {
        this.cointainer = cointainer;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.cointainer.prepend(li);
        }
        else {
            this.cointainer.append(li);
        }
    }
}
