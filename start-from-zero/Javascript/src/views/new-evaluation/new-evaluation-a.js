function NewEvaluationPage(options){
    const technicalData = {
        title: 'Technical Level',
        headers: ['Trainee','Junior','Middle','Senior'],
        columnData: [
            {
                inputLevels: ['Trainee']
            },
            {
                inputLevels: ['Junior1','Junior2','Junior3']
            },
            {
                inputLevels: ['Middle1','Middle2','Middle3']
            },
            {
                inputLevels: ['Senior1','Senior2','Senior3']
            },
        ]
    }

    const textarea = {
        
        text: [
            {
                label: 'Should the candidate be hired?',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate'
            },
            {
                label: 'General impression',
                placeholder: 'The type of project that is suitable for the candidate Is guidance required for the candidate'
            },
            {
                label: 'Workflow, Leadership and Soft Skills',
                placeholder: 'Describe the environment in which the candidate works. Describe any guidance or management experience.'
            }
        ]
        
    }

    const fieldset = {
        fieldset: [
            {
                legend: 'OOP, Design Patterns',
                description: 'Classes',
                select: [
                    {
                        name: ['classes','description','exception-handling','version-control']
                    }
                ],
                option: [
                    {
                        value: ['1','2','3']
                    }
                ]
            },
            
        ],
        
    }

    const newOptions = options || {};
    return `
    ${NAV()}
    ${TechnicalLevelPicker(
        technicalData
    )}
    ${TextArea(
        textarea
    )}
    ${NewEvaluationTable({
    
    })}
    
    ${FooterNew()}

    `;
}


const TableData = function(options = {}){
    const td = options.headers.map(function(el){
        return `
            <td class='technical-level-td'>${el}</td>
        `;
    }).join('');
    return td;
}

const TableCheckbox = function(options = {}){
    
    const newArr =[];
    options.columnData.forEach(function(d){
        newArr.push(`
            <td>
                ${d.inputLevels.map(function (j) {
                return `
                    <input class='input-checkbox' type="checkbox" name='${j}'>
                `}).join('')}
            </td>
        `);
    })
    return newArr.join('');
}
    

const TechnicalLevelPicker = function(options = {}){
    return `
    <h4 class='technical-header'>${options.title}</h4>
    <table class='technical-level-table'>

        <tbody class='tbody-new'>
            <tr class='technical-level'>
                ${TableData({headers: options.headers})}
            </tr>


            <tr class="technical-level-category">
                ${TableCheckbox({columnData: options.columnData})}
            </tr>
        </tbody>
    </table>
    `;
}

const TextareaElements = function(options={}){
    const textArr =[];
    options.textarea.forEach(function(d){
        textArr.push(`
            <div class="textarea-wrap">
            <h4 class='textarea-header'>${d.label}</h4>
            <textarea class='textarea' name="" id="" rows="10" placeholder="${d.placeholder}"></textarea>
            <div>
        `);
    })
    return textArr.join('');
}

const TextArea = function(options={}){
        return `
        ${TextareaElements({textarea: options.text})}
        `
}

const 



const NewEvaluationTable = function(options = {}){
    return `
<section class="form-candidate">
    <div class="container">
       <div class="row">
            <div class="col-md-12">
                <form action="" class="user-input" method='post'>
                <div class="field-ev">
                    <input class='input-username' type="text" name='username' placeholder="Username">
                    <input class='input-password' type="password" name='password' placeholder="Password">
                    <input class='input-calendar' type="date">
                </div>

                <div class="textarea-wrap">
                    <h4 class='textarea-header'>Should the candidate be hired?</h4>
                    <textarea class='textarea' name="" id="" rows="10" placeholder="The type of project that is suitable for the candidate Is guidance required for the candidate"></textarea>
                </div>

                <div class="textarea-wrap">
                    <h4 class='textarea-header'>General impression</h4>
                    <textarea class='textarea' name="" id="" rows="10" placeholder="The type of project that is suitable for the candidate Is guidance required for the candidate" required></textarea>
                </div>

                <div class="textarea-wrap">
                    <h4 class='textarea-header'>Workflow, Leadership and Soft Skills</h4>
                    <textarea class='textarea' name="" id="" rows="10" placeholder="Describe the environment in which the candidate works. Describe any guidance or management experience."></textarea>
                </div>




                <fieldset class='fieldset'>
                  <legend class='legend'>OOP, Design Patterns</legend>
                   <div class="fieldset-wrap">
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>CHECK THISS</span>
                               
                                
                                
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Exception handling</span>
                                <select name="exception-handling" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Version Control</span>
                                <select name="version-control" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Access modifiers</span>
                                <select name="access-modifiers" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Design Pattern</span>
                                <select name="design-patterns" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Issue Tracking</span>
                                <select name="issue-tracking" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Polymorphism</span>
                                <select name="polymorphism" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>RegEx</span>
                                <select name="regex" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>

                        </div>
                   </div>


                </fieldset>



                <fieldset class='fieldset'>
                    <legend class='legend'>HTTP</legend>
                    <div class="fieldset-wrap">

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Protocol</span>
                                <select name="protocol" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Response codes</span>
                                <select name="response-codes" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>REST</span>
                                <select name="rest" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Headers</span>
                                <select name="headers" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Request methods</span>
                                <select name="request-methods" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Sessions &#38; Cookies</span>
                                <select name="sessions-cookies" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </fieldset>


                <fieldset class='fieldset'>
                    <legend class='legend'>HTML</legend>
                    <div class="fieldset-wrap">
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Doctype</span>
                                <select name="doctype" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Tags</span>
                                <select name="tags" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Basic SEO</span>
                                <select name="basic-seo" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Syntax rules</span>
                                <select name="syntax-rules" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Attributes</span>
                                <select name="attributes" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>

                        </div>


                    </div>
                </fieldset>


                <fieldset class='fieldset'>
                    <legend class='legend'>CSS</legend>
                    <div class="fieldset-wrap">
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Usage</span>
                                <select name="usage" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Box Modeling</span>
                                <select name="box-modeling" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30">
                                <span class='description'>CSS 3.0</span>
                                <select name="css-3" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Classes</span>
                                <select name="" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Exception handling</span>
                                <select name="" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Version Control</span>
                                <select name="" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </fieldset>


                <fieldset class='fieldset'>
                    <legend class='legend'>Javascript</legend>
                    <div class="fieldset-wrap">
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Data types and variables</span>
                                <select name="data-types" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Object manipulation</span>
                                <select name="object-manipulation" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>DOM Manipulation</span>
                                <select name="dom-manipulation" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Functions</span>
                                <select name="functions" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Templating</span>
                                <select name="templating" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Event Handling</span>
                                <select name="evemt=handling" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Prototype and OOP</span>
                                <select name="prototype" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Testing(unit, E2E)</span>
                                <select name="testing" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>AJAX</span>
                                <select name="ajax" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Debugging</span>
                                <select name="debug" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Websockets</span>
                                <select name="" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Tooling</span>
                                <select name="tooling" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Libraries</span>
                                <select name="libraries" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Promises</span>
                                <select name="promises" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>Browser Engines</span>
                                <select name="browser-engines" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Frameworks</span>
                                <select name="frameworks" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>

                        </div>


                    </div>
                </fieldset>

                <fieldset class='fieldset'>
                    <legend class='legend'>NodeJS</legend>
                    <div class="fieldset-wrap">
                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Backend frameworks</span>
                                <select name="backend-frameworks" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 margin-right">
                                <span class='description'>Templating</span>
                                <select name="templating" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                            <div class="column-30 ">
                                <span class='description'>DOM Manipulation</span>
                                <select name="dom-manipulation" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>
                        </div>

                        <div class="row1">

                            <div class="column-30 margin-right">
                                <span class='description'>Unit Testing</span>
                                <select name="unit-testing" class="select">
                                    <option value="">Evaluation</option>
                                    <option value="0">Stuff1</option>
                                    <option value="1">Stuff2</option>
                                    <option value="1">Stuff2</option>
                                </select>
                            </div>

                        </div>


                    </div>
                </fieldset>




            <div class="button-wrap">
                <input type="submit" class='submit-button' value='Submit'>
            </div>


          </form>
            </div>

          </div>

       </div>

</section>

    `;
}

const NewEvaluationPageAll = function(){
    return `
        
        ${NewEvaluationPage()}
        
    `;
}

window.onload = function(){
    const app = document.querySelector('#app');
    app.innerHTML = NewEvaluationPageAll();
}