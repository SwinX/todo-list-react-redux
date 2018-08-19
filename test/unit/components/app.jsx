import React from 'react';
import App from '../../../src/components/app.jsx';

const {shallow} = enzyme;

describe('App', () => {
    it('should pass', () => {
        const app = shallow(
            <App/>
        );

        expect(app.exists()).to.be.equal(true);
    });
});
