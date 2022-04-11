import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should be able to add 1 and 4', () => {
    const button1 = container.find('#number1');
    const runningTotal = container.find('#running-total');
    const button4 = container.find('#number4');
    const addOperator = container.find('#operator_add');
    const equalOperator = container.find('#operator-equals');
    button1.simulate('click');
    addOperator.simulate('click');
    button4.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('5');

  });

  it('shoud ble able to subtract 4 from 7 ', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const equalOperator = container.find('#operator-equals');
    const subtractOperator = container.find('#operator-subtract');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtractOperator.simulate('click');
    button4.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  });

  it('should be able to multiply 3 and 5', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const equalOperator = container.find('#operator-equals');
    const multiplyOperator = container.find('#operator-multiply');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiplyOperator.simulate('click');
    button5.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  });

  it('should be able to divide 21 by 7', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const equalOperator = container.find('#operator-equals');
    const divideOperator = container.find('#operator-divide');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideOperator.simulate('click');
    button7.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    button3.simulate('click');
    button5.simulate('click');
    button2.simulate('click');
    expect(runningTotal.text()).toEqual('217352');
  });

  it('should be able to chain multiple operations together', () => {
    const runningTotal = container.find('#running-total');
    const equalOperator = container.find('#operator-equals');
    const divideOperator = container.find('#operator-divide');
    const multiplyOperator = container.find('#operator-multiply');
    const subtractOperator = container.find('#operator-subtract');
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    multiplyOperator.simulate('click');
    button7.simulate('click');
    divideOperator.simulate('click');
    button2.simulate('click');
    subtractOperator.simulate('click');
    button1.simulate('click');
    equalOperator.simulate('click');
    expect(runningTotal.text()).toEqual('6');
  });
})

