
const TableHeadElement = function(options){
    const tableHead = [];
    const elements = [{name:'Nume'},{name:'Tehnologie'},{name:'Nivel'}, {name:''}];
    elements.forEach(function(n){
        tableHead.push(`<th class='table-head-element'>${n.name}</th>`);
    });
    return tableHead.join('');
}

const CandidateDetailsForm = function(options){
    const candidateDetails = [];
    const details = [

        {
            name:'Dan Constantinescu',
            language: 'Javascript',
            level:'Junior'
        },
        {
            name:'Adolf H',
            language: 'SS',
            level:'Master'
        },
        {
            name:'Fiodor D',
            language: 'Russian',
            level:'Master'
        },
        {
            name:'Reddit',
            language: 'Ruby',
            level:'Master'
        },
    ];

   


    details.map(function(n){
        
        candidateDetails.push(
        `<tr class="table-body-tr">
            <td>${n.name}</td>
            <td>${n.language}</td>
            <td>${n.level}</td>
            <td class='detalii'>Detalii 
                <a href="#" class="button-toggle plus-button">
                    <span class="minus-toggle"></span>
                </a>
            </td>
        </tr>`);
        
    });
    return candidateDetails.join('');
}



const EvaluationPageTable = function(){
    return `
    <section class="table-section">
        <div class="container full-width">
            <div class="row">
                <div class="col-md-12">
                    <table class='table-evaluation'>
                            <thead>
                            <tr class="table-head-row">
                                ${TableHeadElement()}
                            </tr>
                        </thead>
                        <tbody class='table-body'>
                            ${CandidateDetailsForm()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    `;
}




const EvaluationPage = function(){
    return `
        ${NAV()}
        ${EvaluationPageTable()}
        ${Footer()}
    `;
}

window.onload = function(){
    
    const app = document.querySelector('#app');
    app.innerHTML = EvaluationPage();
}