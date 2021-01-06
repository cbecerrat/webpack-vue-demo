import * as _ from 'lodash';

const component = function (): HTMLDivElement {
    const element = document.createElement('div') as HTMLDivElement;
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
