import React from 'react'

const Navbar = () => {
    return (
        <navbar>
                <script src="script.js"></script>
            <div class="scroll-up-btn">
                <i class="fas fa-angle-up"></i>
            </div>
            <nav class="navbar">
                <div class="max-width">
                    <div class="logo">
                        <a href="/"><span>Kangfolio.</span></a>
                    </div>
                        <ul class="menu">
                            <li><a href="#home" class="menu-btn">Home</a></li>
                            <li><a href="#about" class="menu-btn">About</a></li>
                            <li><a href="#services" class="menu-btn">Services</a></li>
                            <li><a href="#skills" class="menu-btn">Skills</a></li>
                            <li><a href="#projects" class="menu-btn">Projects</a></li>
                            <li><a href="#contact" class="menu-btn">Contact Me</a></li>
                        </ul>
                    <div class="menu-btn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </navbar>
    )
}

export default Navbar
