import * as React from 'react';
import * as _ from 'lodash';

import {TodoForm} from '../../../../../src/components/modal/todo-form/todo-form.jsx';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

import {shallow} from 'enzyme';

describe('TodoForm', () => {
    it('should open the dialog when mounted', () => {
        const component = renderTodoForm_();

        expect(component.first(Dialog).prop('open')).to.be.true;
    });

    it('should close the dialog when onExited is triggered', () => {
        const onClose = sinon.stub();
        const component = renderTodoForm_({
            handlers: {onClose}
        });

        const dialogOnClose = component.first(Dialog).prop('onExited');
        dialogOnClose();

        expect(onClose).to.be.calledOnce;
    });

    it('should render todo text if it available', () => {
        const component = renderTodoForm_({
            text: 'foobar'
        });

        expect(component.find(TextField).prop('value'))
            .to.be.equal('foobar');
    });

    describe('cancel button', () => {
        it('should hide the dialog', () => {
            const component = renderTodoForm_({
                classes: {cancelButton: 'cancel-button'}
            });

            component.find('.cancel-button').simulate('click');

            expect(component.state('isOpen')).to.be.false;
        });

        it('should call onCancel handler', () => {
            const onCancel = sinon.stub();
            const component = renderTodoForm_({
                handlers: {onCancel},
                classes: {cancelButton: 'cancel-button'}
            });

            component.find('.cancel-button').simulate('click');

            expect(onCancel).to.be.calledOnce;
        });
    });

    describe('save button', () => {
        it('should be disabled if todo text is not available', () => {
            const component = renderTodoForm_({
                classes: {saveButton: 'save-button'},
                text: ''
            });

            expect(component.find('.save-button').prop('disabled'))
                .to.be.true;
        });

        it('should be enabled if todo text is available', () => {
            const component = renderTodoForm_({
                classes: {saveButton: 'save-button'},
                text: 'foobar'
            });

            expect(component.find('.save-button').prop('disabled'))
                .to.be.false;
        });

        it('should hide the dialog', () => {
            const component = renderTodoForm_({
                classes: {saveButton: 'save-button'}
            });

            component.find('.save-button').simulate('click');

            expect(component.state('isOpen')).to.be.false;
        });

        it('should call onSave handler with entered text', () => {
            const onSave = sinon.stub();
            const component = renderTodoForm_({
                handlers: {onSave},
                classes: {saveButton: 'save-button'}
            });

            component.find(TextField).simulate(
                'change',
                {target: {value: 'todo_text'}}
            );
            component.find('.save-button').simulate('click');

            expect(onSave).to.be.calledWith('todo_text');
        });
    });
});

function renderTodoForm_(options = {}) {
    options = _.defaultsDeep(options, {
        handlers: {
            onSave: sinon.stub(),
            onCancel: sinon.stub(),
            onClose: sinon.stub()
        },

        classes: {
            saveButton: 'default-save-button',
            cancelButton: 'default-cancel-button'
        },

        text: 'default_text'
    });

    const {handlers, classes, text} = options;

    return shallow(
        <TodoForm
            onClose={handlers.onClose}
            onSave={handlers.onSave}
            onCancel={handlers.onCancel}
            classes={classes}
            text={text}
        />
    );
}
