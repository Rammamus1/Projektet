class CustomNavbar extends HTMLElement {
    connectedCallback() { //makes sure it runs
        this.innerHTML = `
        <header id="default-header">
            <nav>
                <a href="../AdrianZixuanMain/Main.html" id="home-button">Home</a>               
                <ul>                           
                    <li>
                        <a href="../HistoryUndersida/history.html" class="nav-button">History</a>
                    </li>
                    <li>
                        <a href="../WorksUndersida/works.html" class="nav-button">Works</a>
                    </li>
                    <li>
                        <a href="../ToursUndersida/mainTours.html" class="nav-button">Tours</a>
                    </li>
                    <li>
                        <a href="../MerchUndersida/MerchSida.html" class="nav-button">Merch</a>
                    </li>                                 
                    <li>
                        <a href="../SOCIIALS/social.html" class="nav-button">Socials</a>
                    </li>                                                                                                                 
                </ul>
            </nav>     
        </header>       
        `
    }
};

class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <span class="footer-description">
            This is a fanmade appreciation website of Shawn Mendes made as a programming assignment for us students at KTH, Royal Institute of Technology.
            </span>
            <section>
                <a href="https://privacy.umusic.com/terms/" class="footer-description">Terms & Conditions</a>
                <a href="https://privacy.umusic.com/" class="footer-description">Privacy Policy</a>
            </section>
        </footer>
        `
    }
};

customElements.define("custom-navbar", CustomNavbar);
customElements.define("custom-footer", CustomFooter);

// Fixed I think
var lastScrollPos = window.pageYOffset;
window.addEventListener("scroll", () => {
    let e = document.getElementById("default-header");
    console.log("scrolled");
    console.log(window.scrollY);
    let currentScrollPos = window.scrollY;

    if (currentScrollPos >= lastScrollPos){
        console.log("down");
        e.classList.add("scrolled-down");
        lastScrollPos = window.scrollY;
    } else if (currentScrollPos < lastScrollPos) {
        console.log("up");
        e.classList.remove("scrolled-down");
        lastScrollPos = window.pageYOffset;            
    } 
});
