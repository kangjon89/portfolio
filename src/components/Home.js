import React from 'react'

const Home = () => {
    return (
        <div>
            <img
                src="./images/sea.jpg"
                alt="background"
                background-atcchment="fixed"
            />
            <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">
                        Hello, my name is
                    </div>
                    <div class="text-2">
                        Jonathan Kang
                    </div>
                    <div class="text-3">
                        And I'm a <span class="typing"></span>
                    </div>
                    <a href="#contact">
                        Contact Me</a>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Home
