import * as React from 'react';

import {
    ModalRoot, mapStateToProps, mapDispatchToProps
} from '../../../../src/components/modal/modal-root.jsx';

import Dialog from '@material-ui/core/dialog';

import {shallow} from 'enzyme';

import {ModalType} from '../../../../src/constants';
import ActionType from '../../../../src/actions/types';

describe('ModalRoot', () => {
    describe('render', () => {
        it('should render empty dialog if passed dialog type is not known to modal root', () => {
            const wrapper = shallow((
                <ModalRoot type={'foo'} props={{}} onClose={() => {}} />
            ));

            expect(wrapper.find(Dialog).children())
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
