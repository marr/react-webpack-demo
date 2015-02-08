/** @jsx React.DOM */
'use strict';

var React = require('react'),
    forms = require('newforms');

var QuestionForm = function(kwargs) {

    var formConfig = { errorCssClass: 'error-field' };

    kwargs.questions.map(function(question) {

        var field;
        if ('field' == question.type) {
            field = new forms.CharField({
                label: question.name,
                name: question.guid
            });
        }
        if ('dropdown' == question.type) {
            field = new forms.ChoiceField({
                label: question.name,
                name: question.guid,
                options: question.options
            });
        }

        formConfig[question.guid] = field;
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

    onSubmit: function(e) {
        e.preventDefault();
        var form = this.refs.form.getForm();
        var isValid = form.validate();
        if (isValid) {
            
        }
    },

    render: function() {
        if (!this.props.questions.length) { return <div>No questions</div>; }
        var questionForm = new QuestionForm({
            onChange: this.props.onChange,
            questions: this.props.questions
        });
        return (
            <form className="campaign-questions"
                action="/foo"
                method="POST"
                onSubmit={this.onSubmit}>
                <forms.RenderForm form={questionForm} ref="form" />
            </form>
        );
    }
});


