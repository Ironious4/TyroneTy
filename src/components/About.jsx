import React from "react";
import "./about.css";

function About() {
    return (
        <div className="container">
        <div className="about">
            <h1>About me:</h1>
            <p>Hello there, my name is Tyrone Kariuki and I am a software developer.I was born on 13th August 2001 and I am a generally a cool and smart guy with many passions and interests.</p>
            <h2>Educational background:</h2>
            <p>I started and finished my primary school education in Peak View Academy between the years 2008-2015. I then proceeded to my high school education in Othaya Boys High School between the years 2016-2019. Moreover I studied at the Jomo Kenyatta University of Agriculture and Technology where I pursued a Bachelor's degree in Strategic Management between the years 2020-2023 and graduated with a Second Class Honours Upper Division. Finally I went to Moringa school where I studied Software Engineering between June and December 2024. </p>
            <h3>Interests/Hobbies:</h3>
            <ol>
                <li>Workout</li>
                <li>Music</li>
                <li>Sports i.e Football and Athletics</li>
                <li>Travelling</li>
            </ol>

        </div>
        <img src="./public/mall.jpg" alt="mall" className="image"></img>
        </div>
    )
}

export default About;