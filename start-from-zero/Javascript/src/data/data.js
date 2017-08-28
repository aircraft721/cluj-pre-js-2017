function InputData(){
    const inputPlaceholder = {
        
        media: [
            {
                user: 'Username',
                class: 'input-username',
                placeholder: 'Username',
                type: 'text'
            },
            {
                user: 'password',
                class: 'input-password',
                placeholder: 'Password',
                type: 'text'
            },
            {
                type: 'date',
                class: 'input-calendar',
                placeholder: '',
                type: 'date'
            },
        ],

        user: ['username', 'password', 'date'],
        placeholder: ['Username', 'Password', ''],
        type: ['text', 'password', 'date'],
    }
    return inputPlaceholder;
}

function TechnicalData(){
    const technicalData = {
        title: 'Technical Level',
        headers: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            {
                inputLevels: ['Trainee'],
            },
            {
                inputLevels: ['Junior1', 'Junior2', 'Junior3'],
            },
            {
                inputLevels: ['Middle1', 'Middle2', 'Middle3'],
            },
            {
                inputLevels: ['Senior1', 'Senior2', 'Senior3'],
            },
        ],
    };
    return technicalData;
}
    
function TextareaData(){
    const textarea = { 
        text: [
            {
                label: 'Should the candidate be hired?',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate',
            },
            {
                label: 'General impression',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate',
            },
            {
                label: 'Workflow, Leadership and Soft Skills',
                placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.',
            },
        ],
    };
    return textarea;
}    
        
function FieldsetData(){
    const fieldset = {
        data: [
            {
                fieldsetName: 'OOP, Design Patterns',
                items: [
                    {
                        span: 'Classes',
                        name: 'classes',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Exception handling',
                        name: 'exception-handling',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Version Control',
                        name: 'version-control',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Access modifiers',
                        name: 'access-modifiers',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Design Pattern',
                        name: 'design-patterns',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Issue Tracking',
                        name: 'issue-tracking',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Polymorphism',
                        name: 'polymorphism',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'RegEx',
                        name: 'regex',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
            {
                fieldsetName: 'HTTP',
                items: [
                    {
                        span: 'Protocol',
                        name: 'protocol',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Response codes',
                        name: 'response-codes',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'REST',
                        name: 'rest',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Headers',
                        name: 'headers',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Request methods',
                        name: 'request-methods',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
            {
                fieldsetName: 'HTML',
                items: [
                    {
                        span: 'Doctype',
                        name: 'doctype',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Tags',
                        name: 'tags',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Basic SEO',
                        name: 'basic-seo',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Syntax rules',
                        name: 'syntax-rules',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Attributes',
                        name: 'attributes',
                        voptionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
            {
                fieldsetName: 'CSS',
                items: [
                    {
                        span: 'Usage',
                        name: 'usage',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Box Modeling',
                        name: 'box-modeling',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'CSS 3.0',
                        name: 'css-3',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Classes',
                        name: 'classes',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Selectors',
                        name: 'selectors',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Styling',
                        name: 'styling',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Dynamic stylesheet',
                        name: 'dynamic-stylesheet',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
            {
                fieldsetName: 'Javascript',
                items: [
                    {
                        span: 'Data types and variables',
                        name: 'data-types',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Object manipulation',
                        name: 'object-manipulation',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'DOM Manipulation',
                        name: 'dom-manipulation',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Functions',
                        name: 'functions',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Templating',
                        name: 'templating',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Event Handling',
                        name: 'evemt-handling',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Prototype and OOP',
                        name: 'prototype',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Testing(unit, E2E)',
                        name: 'testing',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'AJAX',
                        name: 'ajax',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Debugging',
                        name: 'debug',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Websockets',
                        name: 'websockets',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Tooling',
                        name: 'tooling',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Libraries',
                        name: 'libraries',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Promises',
                        name: 'promises',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Browser Engines',
                        name: 'browser-engines',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Frameworks',
                        name: 'frameworks',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
            {
                fieldsetName: 'NodeJS',
                items: [
                    {
                        span: 'Backend frameworks',
                        name: 'backend-frameworks',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Templating',
                        name: 'templating',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'DOM Manipulation',
                        name: 'dom-manipulation',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                    {
                        span: 'Unit Testing',
                        name: 'unit-testing',
                        optionValue: ['0', '1', '2', '3'],
                        dropdown: ['Javascript', 'Java', 'Python', 'Haskell'],
                    },
                ],
            },
        ],
    };
    return fieldset;
}   
        
    
        