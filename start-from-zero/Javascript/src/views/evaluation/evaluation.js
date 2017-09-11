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

    const blabla = function(options={}){
        
    }
    
    const DetailsEvaluation = function(options={}){  
        const keys = Object.keys(options);
        console.log(keys[0]);
        return `
        <div id='accordion' class="hidethis" data-id=${options.id}>
            <div class='textarea-details-wrapper'>
                <div class='details-list details-textarea'><span class='top-left'>${keys[3]}</span><p>${options.textarea1}</p></div>
                <div class='details-list details-textarea'><span class='top-left'>${keys[4]}</span><p>${options.textarea2}</p></div>
                <div class='details-list details-textarea'><span class='top-left'>${keys[5]}</span><p>${options.textarea3}</p></div>
            </div>
            <div class='oop-wrapper'>
                <div class='details-list details-oop'><span class='top-left'>${keys[6]}</span>${options.classes}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[7]}</span>${options.exceptionHandling}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[8]}</span>${options.versionControl}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[9]}</span>${options.accessModifiers}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[10]}</span>${options.designPatterns}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[11]}</span>${options.issueTracking}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[12]}</span>${options.polymorphism}</div>
                <div class='details-list details-oop'><span class='top-left'>${keys[13]}</span>${options.regex}</div>
            </div>
            <div class='http-wrapper'>
                <div class='details-list details-http'><span class='top-left'>${keys[14]}</span>${options.protocol}</div>
                <div class='details-list details-http'><span class='top-left'>${keys[15]}</span>${options.responseCodes}</div>
                <div class='details-list details-http'><span class='top-left'>${keys[16]}</span>${options.rest}</div>
                <div class='details-list details-http'><span class='top-left'>${keys[17]}</span>${options.headers}</div>
                <div class='details-list details-http'><span class='top-left'>${keys[18]}</span>${options.requestMethods}</div>
            </div>
            <div class='html-wrapper'>
                <div class='details-list details-html'><span class='top-left'>${keys[19]}</span>${options.doctype}</div>
                <div class='details-list details-html'><span class='top-left'>${keys[20]}</span>${options.tags}</div>
                <div class='details-list details-html'><span class='top-left'>${keys[21]}</span>${options.basicSeo}</div>
                <div class='details-list details-html'><span class='top-left'>${keys[22]}</span>${options.syntaxRules}</div>
                <div class='details-list details-html'><span class='top-left'>${keys[23]}</span>${options.attributes}</div>
            </div>
            <div class='css-wrapper'>
                <div class='details-list details-css'><span class='top-left'>${keys[24]}</span>${options.usage}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[25]}</span>${options.boxModeling}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[26]}</span>${options.css3}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[27]}</span>${options.classes}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[28]}</span>${options.selectors}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[29]}</span>${options.styling}</div>
                <div class='details-list details-css'><span class='top-left'>${keys[30]}</span>${options.dynamicStylesheet}</div>
            </div>
            <div class='javascript-wrapper'>
                <div class='details-list details-js'><span class='top-left'>${keys[31]}</span>${options.dataTypes}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[32]}</span>${options.objectManipulation}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[33]}</span>${options.domManipulation}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[34]}</span>${options.functions}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[35]}</span>${options.templating}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[36]}</span>${options.eventHandling}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[37]}</span>${options.prototype}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[38]}</span>${options.testing}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[39]}</span>${options.ajax}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[40]}</span>${options.debug}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[41]}</span>${options.websockets}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[42]}</span>${options.tooling}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[43]}</span>${options.libraries}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[44]}</span>${options.browserEngines}</div>
                <div class='details-list details-js'><span class='top-left'>${keys[45]}</span>${options.frameworks}</div>
            </div>
            <div class='nodejs-wrapper'>
            <div class='details-list details-node'><span class='top-left'>${keys[46]}</span>${options.backendFrameworks}</div>
            <div class='details-list details-node'><span class='top-left'>${keys[47]}</span>${options.templating}</div>
            <div class='details-list details-node'><span class='top-left'>${keys[48]}</span>${options.domManipulation}</div>
            <div class='details-list details-node'><span class='top-left'>${keys[49]}</span>${options.unitTesting}</div>
        </div>
        </div>
        `;
    }


    
    
    const Details = function(options={}){
    
        const detailsElements = options.items.map((el) =>{
            return DetailsEvaluation(el);
        })
        const detailEl = detailsElements.join('');

        return detailEl;
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
