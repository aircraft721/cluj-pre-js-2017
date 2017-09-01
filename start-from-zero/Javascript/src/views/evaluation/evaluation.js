function EvaluationsPage(options){
    const headings = ['Name','Language','Level',''];
    const rows = [
        {
            username:'Dan Constantinescu',
            language: 'Javascript',
            radio:'Junior'
        },
        {
            username:'Adolf Hgg',
            language: 'SwS',
            radio:'Master'
        },
        {
            username:'Fiodor D',
            language: 'Russian',
            radio:'Master'
        },
        JSON.parse(localStorage.getItem('userObj')),
        //JSON.parse(localStorage.getItem('userObj2')),
    ];

    

    this.render = `
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
        <td>${options.username}</td>
        <td>${options.regex}</td>
        <td>${options.radio}</td>
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




