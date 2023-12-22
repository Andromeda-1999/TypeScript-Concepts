import { HasFormatter } from "../interfaces/HasFormatter"



export class ListTemplate {

    constructor(private cointainer: HTMLUListElement) {


    }
    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {

        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4)
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (pos === 'start') {
            this.cointainer.prepend(li);

        } else {
            this.cointainer.append(li);
        }
    }
}