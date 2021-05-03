import React from 'react'

const About = () => {
    return (
        <div>
            <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">
                    About me</h2>
                <div class="about-content">
                    <div class="column left">
                        {/* <img src="/images/1212.jpg" alt="123"> */}
                    </div>
                    <div class="column right">
                        <div class="text">
                            I'm a.... <span class="typing-2"></span>
                        </div>
                        <p>
                            Growing up, I firmly believed I would become someone that would be in the healthcare industry. I finished my schooling career aiming to become
                            dentist. It took me over 8 professional years to realize what I was aiming for was leading me nowhere. I had a gut cringing opportunity to try something
                            new and it was a world of code. And now, it seems to be I have found "the calling" everyone says they go through. When it comes to cleaning up a website,
                            or making code "cleaner" and more "efficient" has been an itch that seems to keep itching.
                        </p>
                        <p>
                            When I am not looking as VSCode and trying new things, I love to get down on some PC video games, or recently I been enjoying the Oculus Quest 2 and when
                            it is not raining in Seattle, I like to go out and play golf or play basketball. When it comes to winter, there is something that I LOVE to do is snowboarding.
                            My father was an avid skier and as a child, I automatically thought snowboarding was cool and kept to it! 
                        </p>
                        <a href="/images/Jonathan_Kang_Resume.pdf" download>Download CV</a>
                    </div>
                </div>
            </div>           
            </section>
        </div>
    )
}

export default About
