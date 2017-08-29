function EvaluationsPage(options){
    const headings = ['Name','Language','Level',''];
    
    const rows = [
        {
            name:'Dan Constantinescu',
            language: 'Javascript',
            level:'Junior'
        },
        {
            name:'Adolf Hgg',
            language: 'SwS',
            level:'Master'
        },
        {
            name:'Fiodor D',
            language: 'Russian',
            level:'Master'
        },
    ];

    const newOptions = options || {};
    return `
    ${NAV()}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings
    })}
    ${FooterFixed()}


    `;
}

function EvaluationTableHeader(options){
    const headings = [];
    options.headings.map((el)=>{
        const generatedEl = `<th class='table-head-element'>${el}</th>`;
        headings.push(generatedEl);
        
    });

    const headingsEl = `${headings.join('')}`;

    return `
    <thead>
        <tr class="table-head-row">
            ${headingsEl}
        </tr>
    </thead>
    `;
}




function EvaluationTableRow(options={}){

    return `
    <tr class='table-body-tr'>
        <td>${options.name}</td>
        <td>${options.language}</td>
        <td>${options.level} 2</td>
        <td class='detalii'>Detalii 
            <a href="#" class="button-toggle plus-button">
                <span class="minus-toggle"></span>
            </a>
        </td>
    </tr>
    `;
}


    
function EvaluationTableBody(options={}){
    
    const rowsElements = options.items.map(function(rowObj){
        return EvaluationTableRow(rowObj);
    })

    const rowsEl = rowsElements.join('');

    return `
    <tbody class='table-body'>
        ${rowsEl}
    </tbody>
    `;
}

function EvaluationsTable(options={}){
    
    return `
    <section class="table-section">
        <div class="container full-width">
            <div class="row">
                <div class="col-md-12">
                    <table class='table-evaluation'>
                        ${EvaluationTableHeader({
                            headings: options.itemHeadings 
                        })}
                        ${EvaluationTableBody({
                            items: options.items
                        })}
                    </table>
                </div>
            </div>
        </div>
    </section>
    `;
}



window.onload = function(){
    const app = document.querySelector('#app');
    app.innerHTML = EvaluationsPage();
}

