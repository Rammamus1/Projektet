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
            <span>This is a temporary footer</span>
        </footer>
        `
    }
};

customElements.define("custom-navbar", CustomNavbar);
customElements.define("custom-footer", CustomFooter);