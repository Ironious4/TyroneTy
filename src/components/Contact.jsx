import React from "react";
import "./contact.css"; // Import the stylesheet

function Contact() {
    return (
        <div className="contact">
            <h1>Contacts:</h1>
            <ol>
                <li>Whatsapp/Call and SMS: 0706915524</li>
                <li>Email: tyronekariuki@gmail.com</li>
                <li>
                    <a href="https://www.facebook.com/tyrone.kariuki.16?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/tyronety100?igsh=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </li>
                <li>LinkedIn: Tyrone Kariuki</li>
                <li>GitHub: Tyrone Kariuki (Ironious4)</li>
            </ol>
        </div>
    );
}

export default Contact;
