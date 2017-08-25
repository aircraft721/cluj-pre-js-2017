const Footer = function(){
    return `
    <footer class='fixed-footer'>
        <div class="container">
            <p class="footer-paragraph">Copyright@softvision 2017</p>
        </div>
    </footer>
    `;
}

const FooterNew = function(){
    return `
    <footer>
        <div class="container">
            <p class="footer-paragraph">Copyright@softvision 2017</p>
        </div>
    </footer>
    `;
}


const NAV = function(options={}){
    return `
    <nav class='navbar'>
        <a href="index.html"><img src="assets/126-Softvision-logo.png" alt="" class="image"></a>
        <a class='link-logout' href="#">Logout</a>
        <div class="container">
            <div class="row">
                <div class='link-block-wrapper'>
                    <a class='link-block evaluations-page' href="#0">Evaluations</a>
                    <a class='link-block new-evaluations-page' href="#0">New Evaluations</a>
                </div>
            </div>
        </div>
    </nav>
    `
}