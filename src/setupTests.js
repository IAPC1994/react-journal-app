import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

//Se agrega las siguientes lineas de codigo para que funcione el ultimo test de notes.test.js
// const noScroll = () => {};
// Object.defineProperty( window, 'scrollTo', { value: noScroll, writable: true });