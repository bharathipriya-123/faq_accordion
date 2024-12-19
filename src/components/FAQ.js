
import React, { useState } from 'react';
import '../style/FAQ.css';

export default function FAQ() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const faqs = [

        { 
            question: "Who designed the National Flag of India?",
            answer: "The flag was designed by Pingali Venkayya." 
        },

        { 
            question: "Name the National tree of India?",
            answer: "Banyan tree" 
        },

        { 
            question: "Name the Oceans of the World?",
            answer: "The Atlantic, Pacific, Indian, Arctic, and the Southern (Antarctic) oceans."
        },

        { 
             question: "Name the densest jungle in the world?",
             answer: "The Amazon rainforest" 
        },

        {
            question: "What is the Isosceles triangle?", 
            answer: "A triangle in which two sides have the same length or two sides are equal." 
        },

        {
             question: "Who is the Father of our Nation?", 
             answer: "Mahatma Gandhi" 
        },

        {
            question: "Who is the real founder of Microsoft?", 
            answer: "Bill Gates and Paul G. Allen" 
        },

        {
            question: "Who gave the universal law of gravitation?",
            answer: "Isaac Newton" 
        },

        { 
            question: "How many years of Independence India celebrated on August 15, 2022?", 
            answer: "India celebrated 75 years of Independence on August 15, 2022." 
        },

        { 
             question: "What is the smallest country in the world by land area?",
             answer: "Vatican City" 
        },

        { 
             question: "What is the hardest natural substance on Earth?",
             answer: "Diamond" 
        },
    ];

    const answers = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h1>FAQ SECTION</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <button className="faq-question" onClick={() => answers(index)}>
                        <span>{faq.question}</span>
                        <span className='faq-arrow'>{visibleIndex === index ? '↓': '←'}</span>
                     
                    </button>
                    {visibleIndex === index && <p className="faq-answer">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
}

