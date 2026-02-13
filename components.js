class CustomNavbar extends HTMLElement {
    connectedCallback() {//makes sure it runs
        this.innerHTML = `
            <nav>
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
customElements.define("about", AboutSection);