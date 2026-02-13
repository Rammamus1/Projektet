class CustomNavbar extends HTMLElement {
    connectedCallback() {//makes sure it runs
        this.innerHTML = `
        <header>
            <nav id="navbar">
                <a href="../AdrianZixuanMain/Main.html" id="home-button">Home</a>               
                <ul>                           
                    <li>
                        <a href="" class="nav-button">About</a>
                    </li>
                    <li>
                        <a href="" class="nav-button">Works</a>
                    </li>
                    <li>
                        <a href="" class="nav-button">Tour</a>
                    </li>
                    <li>
                        <a href="" class="nav-button">Merch</a>
                    </li>                                 
                    <li>
                        <a href="" class="nav-button">Socials</a>
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
            <span>© 2026-30XX Kazoo Gruppen, Shawn Mendes. | All Rights Reserved</span>
        </footer>
        `
    }
};

class AboutSection extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <p>yabababababababab</p>
        `
    }
};

customElements.define("custom-navbar", CustomNavbar);
customElements.define("custom-footer", CustomFooter);
customElements.define("a-about", AboutSection);

// Mi bombo this shi laggy as hell
var lastScrollPos = 70;
window.addEventListener("scroll", () => {
    let e = document.getElementById("navbar");
    console.log("scrolled");
    console.log(window.pageYOffset);
    if (window.pageYOffset >= lastScrollPos){
        console.log("down");
        e.classList.add("scrolled-down");
        lastScrollPos = window.pageYOffset;
    } else if (window.pageYOffset < lastScrollPos) {
        console.log("up");
        e.classList.remove("scrolled-down");   
        lastScrollPos = 70;         
    } 
});
