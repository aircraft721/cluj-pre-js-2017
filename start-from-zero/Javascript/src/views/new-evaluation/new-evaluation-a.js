function NewEvaluationPage(options) {

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

    const newOptions = options || {};
    return `
    ${NAV()}
    <section class="form-candidate">
    <div class="container">
       <div class="row">
            <div class="col-md-12">
                <form action="" class="user-input" method='post'>
                
   
    
    ${Inputs(
        inputPlaceholder
    )}

    ${TechnicalLevelPicker(
        technicalData,
    )}
    ${TextArea(
        textarea,
    )}

    ${SelectOption(
        fieldset,
    )}

                        <div class="button-wrap">
                            <input type="submit" class='submit-button' value='Submit'>
                        </div>


                    </form>
                </div>

            </div>

        </div>

    </section>
    
    ${Footer()}
    `;
}


const TableData = function (options = {}) {
    const currentLevel = options.headers.map((el) => `
            <td class='technical-level-td'>${el}</td>
        `).join('');
    return currentLevel;
};

const TableCheckbox = function (options = {}) {
    const checkboxArr = [];
    options.columnData.forEach((d) => {
        checkboxArr.push(`
            <td>
                ${d.inputLevels.map((j) => `
                    <input class='input-checkbox' type="checkbox" name='${j}'>
                `).join('')}
            </td>
        `);
    });
    return checkboxArr.join('');
};


const TechnicalLevelPicker = function (options = {}) {
    return `
    
    <h4 class='technical-header'>${options.title}</h4>
    <table class='technical-level-table'>

        <tbody class='tbody-new'>
            <tr class='technical-level'>
                ${TableData({ headers: options.headers })}
            </tr>


            <tr class="technical-level-category">
                ${TableCheckbox({ columnData: options.columnData })}
            </tr>
        </tbody>
    </table>
    `;
};

const TextareaElements = function (options = {}) {
    const textareaArr = [];
    options.textarea.forEach((d) => {
        textareaArr.push(`
            <div class="textarea-wrap">
            <h4 class='textarea-header'>${d.label}</h4>
            <textarea class='textarea' name="" id="" rows="10" placeholder="${d.placeholder}"></textarea>
            <div>
        `);
    });
    return textareaArr.join('');
};

const TextArea = function (options = {}) {
    return `
        ${TextareaElements({ textarea: options.text })}
        `;
};


const Option = function (options = {}) {
    return `
    <option value="${options}">${options}</option>
    `;
};

const Select = function (options = {}) {
    return `
    
    <div class="column-30 margin-right">
    <span class='description'>${options.span}</span>
    <select name="${options.name}" class="select">
        ${options.dropdown.map((g, i) => Option(g,i)).join('')}
        
    </select>
    </div>
    
    `;
};

const TechnicalAreaPicker = function (options = {}) {
    const fieldsets = options.fieldsetObj.map((n) => `
        <fieldset class='fieldset'>
            <legend class='legend'>${n.fieldsetName}</legend>

                ${n.items.map((o)=>{
                    return Select(o);
                }).join('')}

            <div class="fieldset-wrap"></div>
        </fieldset>`);
    return fieldsets.join('');
};

const InputFunction = function(options = {}){
    const input = options.inputs.map((d) => {
        return `
            <input class='${d.class}' type="${d.type}" name='${d.name}' placeholder="${d.placeholder}">
            `
    })
        

    
    return input.join('');
}


const Inputs = function(options = {}){
    return `
    <div class="field-ev">
        ${InputFunction({inputs: options.media})}
    </div>
    `
}


const SelectOption = function (options = {}) {
    return `
        ${TechnicalAreaPicker({ fieldsetObj: options.data })}
    `;
};


const NewEvaluationPageAll = function () {
    return NewEvaluationPage();
};

window.onload = function () {
    const app = document.querySelector('#app');
    app.innerHTML = NewEvaluationPageAll();
};
