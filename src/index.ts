import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const component = function (): HTMLDivElement {
    const element = document.createElement('div') as HTMLDivElement;
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    return element;
}

document.body.appendChild(component());
