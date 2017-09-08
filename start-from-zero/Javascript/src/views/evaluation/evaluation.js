(function(){
    windowObjectWrap.EvaluationsPage = function(options){
        const headings = ['Name','Date','Level','Detalii'];
    
        const localSt = localStorage.length;
        var rows;
        if(localSt == 1){
            rows = [];
        }else{
            rows = JSON.parse(localStorage.getItem("localArr"));
        }
    
    
        this.render = `
        ${windowObjectWrap.NAV()}
        ${EvaluationsTable({
            items: rows,
            itemHeadings: headings
        })}
        ${windowObjectWrap.FooterFixed()}
        `;
    
    }
    
    const EvaluationTableHeader = function(options){
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
    
    const EvaluationTableRow = function(options={}){
        return `
        <tr class='table-body-tr' data-id='${options.id}'>
            <td>${options.username}</td>
            <td>${options.date}</td>
            <td>${options.radio}</td>
            <td class='detalii'>Detalii 
                <div class="button-toggle">
                    <span class="plus-button"></span>
                </div>
            </td>
            
        </tr>
        `;
        
    }

    const EvaluationTableBody = function(options={}){
        const rowsElements = options.items.map(function(rowObj){
            return EvaluationTableRow(rowObj);
        });
        const rowsEl = rowsElements.join('');
        return `
        <tbody class='table-body'>
            ${rowsEl}
        </tbody>
        `;
    };
    
    const DetailsEvaluation = function(options={}){  
        return `
        <div id='accordion' class="hidethis" data-id=${options.id}>
            <div class='textarea-details-wrapper'>
                <div class='details-list details-textarea'><p>${options.textarea1}</p></div>
                <div class='details-list details-textarea'><p>${options.textarea2}</p></div>
                <div class='details-list details-textarea'><p>${options.textarea3}</p></div>
            </div>
            <div class='oop-wrapper'>
                <div class='details-list details-oop'>${options.classes}</div>
                <div class='details-list details-oop'>${options.exceptionHandling}</div>
                <div class='details-list details-oop'>${options.versionControl}</div>
                <div class='details-list details-oop'>${options.accessModifiers}</div>
                <div class='details-list details-oop'>${options.designPatterns}</div>
                <div class='details-list details-oop'>${options.issueTracking}</div>
                <div class='details-list details-oop'>${options.polymorphism}</div>
                <div class='details-list details-oop'>${options.regex}</div>
            </div>
            <div class='http-wrapper'>
                <div class='details-list details-http'>${options.protocol}</div>
                <div class='details-list details-http'>${options.responseCodes}</div>
                <div class='details-list details-http'>${options.rest}</div>
                <div class='details-list details-http'>${options.headers}</div>
                <div class='details-list details-http'>${options.requestMethods}</div>
            </div>
            <div class='html-wrapper'>
                <div class='details-list details-html'>${options.doctype}</div>
                <div class='details-list details-html'>${options.tags}</div>
                <div class='details-list details-html'>${options.basicSeo}</div>
                <div class='details-list details-html'>${options.syntaxRules}</div>
                <div class='details-list details-html'>${options.attributes}</div>
            </div>
        </div>
        `;
    }
    
    
    const Details = function(options={}){
    
        const detailsElements = options.items.map((el) =>{
            return DetailsEvaluation(el);
        })
        const detailEl = detailsElements.join('');

        return `
        <div>
            ${detailEl}
        </div>
        `;
    }
    
    const EvaluationsTable = function(options={}){
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
                        ${Details({
                            items: options.items
                        })}
                    </div>
                </div>
            </div>
        </section>
        `;
    }
})();
