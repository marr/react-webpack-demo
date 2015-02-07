/** @jsx React.DOM */
'use strict';

var React = require('react'),
    forms = require('newforms');

var QuestionForm = function(kwargs) {

    var formConfig = {
        errorCssClass: 'error-field'
    };

    kwargs.questions.map(function(question) {
        formConfig['question_' + question.id] = new forms.CharField({
            label: question.name,
            name: 'question_' + question.id
        });
    });

    formConfig.onChange = kwargs.onChange;

    return forms.Form.extend(formConfig);
};

module.exports = React.createClass({
    displayName: 'CampaignQuestions',

    propTypes: {
        questions: React.PropTypes.array.isRequired
    },

    getDefaultProps: function() {
        return {
            onChange: this.forceUpdate,
            questions: []
        };
    },

    onSubmit: function() {
        debugger;
    },

    render: function() {
        var questionForm = new QuestionForm(this.props);
        return (
            <form className="campaign-questions"
                action="/foo"
                method="POST"
                onSubmit={this.onSubmit}>
                <forms.RenderForm form={questionForm} />
                <button>post</button>
            </form>
        );
    }
});

