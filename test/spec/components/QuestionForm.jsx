/** @jsx React.DOM */
'use strict';

describe('CampaignQuestions', function() {

    var React = require('react/addons'),
        CampaignQuestions = require('../../../src/scripts/components/CampaignQuestions'),
        TestUtils = React.addons.TestUtils;

    var questions;

    beforeEach(function() {

        questions = [];

    });

    function renderQuestions(props) {
        return TestUtils.renderIntoDocument(<CampaignQuestions {...props} />);
    }

    it('shows nothing when there are no questions', function() {
 
        var fixture = renderQuestions().getDOMNode();
        var text = fixture.innerText;

        expect(text).to.equal('No questions');
    });

    it('shows a question when there are questions', function() {
        questions.push({
            id: 21251,
            name: 'Will it blend?',
            type: 'field',
            guid: 'asdf'
        });
 
        var fixture = renderQuestions({ questions: questions }).getDOMNode();
        var text = fixture.querySelector('label').innerText;

        expect(text).to.equal('Will it blend?');

    });

});


