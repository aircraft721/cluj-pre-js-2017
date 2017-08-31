const LoginForm = function () {
    return `
    <div class="col-md-3 form-column">
        <div class="blue-line">Interview Feedback</div>
        <form action="" id='login-form' class="user-input">
            
            <input class='input-zero field' id='username-login' type="text" name='username' placeholder="Username">
          
            
            <input class='input-zero field' id='password-login' type="password" name='password' placeholder="Password">
            
            <a href="#"></a>
            <input type="submit" class='button-login-form' id='login-btn' value='Login'>
        </form>
    </div>`;
};

const LoginHeader = function () {
    return `
        <section class="hero-image-section">
            <div class="container">
                <div class="row">
                    ${LoginForm()}
                </div>
            </div>
        </section>    
    `;
};

const SubmitFeedbackSection = function () {
    return `
    <section class="new-feedback">
        <div class="container">
            <div class="row center-row">
                <div class="col-md-4 col-44">
                    <div class="image-feedback">
                        <img src="assets/new%20feedback.jpg" alt="new feedback">
                    </div>
                </div>
                <div class="col-md-offset-1"></div>
                <div class="col-md-7">
                    <div class="text-wrapper">
                        <h3 class='header-text'>View feedback results</h3>
                        <p class="paragraph-text">
                        loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quia? Totam dolores iure quaerat, laudantium vitae fugiat pariatur minima commodi. Voluptatem voluptatibus soluta ipsam ut aliquid veritatis quae! Assumenda, nesciunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil labore totam fugit maxime autem ullam at, laudantium asperiores culpa ratione error tenetur qui accusamus saepe, aliquam officiis nam aspernatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ducimus nostrum, voluptatibus cupiditate earum! Illum excepturi alias quas doloribus ab, expedita nostrum quod aperiam itaque nam velit officia, vel, odio.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    `;
};

const SubmitFeedbackResults = function () {
    return `
    <section class="result-feedback">
        <div class="container">
            <div class="row center-row">
            <div class="col-md-7">
                    <div class="text-wrapper">
                        <h3 class='header-text'>View feedback results</h3>
                        <p class="paragraph-text">
                        loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, quia? Totam dolores iure quaerat, laudantium vitae fugiat pariatur minima commodi. Voluptatem voluptatibus soluta ipsam ut aliquid veritatis quae! Assumenda, nesciunt?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nihil labore totam fugit maxime autem ullam at, laudantium asperiores culpa ratione error tenetur qui accusamus saepe, aliquam officiis nam aspernatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ducimus nostrum, voluptatibus cupiditate earum! Illum excepturi alias quas doloribus ab, expedita nostrum quod aperiam itaque nam velit officia, vel, odio.
                        </p>
                    </div>
                </div>
                
                <div class="col-md-offset-1"></div>
                <div class="col-md-4">
                    <div class="image-feedback">
                        <img src="assets/results.jpg" alt="new feedback">
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    `;
};


function Login() {
    this.render = `
        ${LoginHeader()}
        ${SubmitFeedbackSection()}
        ${SubmitFeedbackResults()}
        ${Footer()}
    `;
};

