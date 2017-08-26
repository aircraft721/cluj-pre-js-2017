const Nav = function(){
    return `
    <nav class='navbar'>
        <a href="index.html"><img src="assets/126-Softvision-logo.png" alt="" class="image"></a>
        <a class='link-logout' href="#">Logout</a>
        <div class="container">
            <div class="row">
                <div class='link-block-wrapper'>
                    <a class='link-block' href="#0">Evaluations</a>
                    <a class='link-block' href="new-evaluation-zero.html">New Evaluations</a>
                </div>
            </div>
        </div>
    </nav>
    `;
}


const FormCandidate = function(){
    return `
    <section class="form-candidate">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <form action="" class="user-input" method='post'>



                    </form>
                </div>             
            </div>
        </div>
    </section>
    `;
}


const UserInput = function(){
    return `
    <div class="field-ev">
        <input class='input-username' type="text" name='username' placeholder="Username">
        <input class='input-password' type="password" name='password' placeholder="Password">
        <input class='input-calendar' type="date">
    </div>
    `;
}










































const Footer = function(){
    return `
    <footer>
        <div class="container">
            <p class="footer-paragraph">Copyright@softvision 2017</p>
        </div>
    </footer>
    `;
}