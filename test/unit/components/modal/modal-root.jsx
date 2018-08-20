import * as React from 'react';

import {
    ModalRoot, mapStateToProps, mapDispatchToProps
} from '../../../../src/components/modal/modal-root.jsx';

import TodoForm from '../../../../src/components/modal/todo-form';

import {shallow} from 'enzyme';

import {ModalType} from '../../../../src/constants';
import ActionType from '../../../../src/actions/types';

describe('ModalRoot', () => {
    describe('render', () => {
        it('should render TodoForm if passed dialog type is `TODO_FORM`', () => {
            const onClose = sinon.stub();
            const wrapper = shallow((
                <ModalRoot type={ModalType.TODO_FORM} props={{}} onClose={onClose} />
            ));

            expect(wrapper.contains(<TodoForm onClose={onClose} {...{}} />))
                .to.be.true;
        });

        it('should render empty dialog if passed dialog type is not known to modal root', () => {
            const wrapper = shallow((
                <ModalRoot type={'foo'} props={{}} onClose={() => {}} />
            ));

            expect(wrapper.find(<div/>).children())
                .to.have.length(0);
        });
    });

    describe('mapStateToProps', () => {
        it('should pick `modal` part of the state', () => {
            const state = {
                modal: {foo: 'bar'}
            };

            expect(mapStateToProps(state)).to.eql({foo: 'bar'});
        });
    });

    describe('mapDispatchToProps', () => {
        describe('onClose', () => {
            it('should dispatch `HIDE_MODAL` action', () => {
                const dispatch = sinon.stub();
                const onClose = mapDispatchToProps(dispatch).onClose;

                onClose();

                expect(dispatch).to.be.calledWith({type: ActionType.HIDE_MODAL});
            });
        });
    });
});
