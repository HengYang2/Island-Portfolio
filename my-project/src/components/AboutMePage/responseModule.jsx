import React from 'react'

export default function responseModule(selectedQuestion) {
    switch (selectedQuestion) {
        case 'option1':
            return ("My name is Heng Yang, I'm a software developer who enjoys creating games, making music and chilling on this island."); 
        case 'option2':
            return ('You are on Paradise Island, a place created from my imagination. You are expereiencing a piece of my mind!'); 
        case 'option3':
            return ('I enjoy making music, 3d modeling, coding, and spending time with friends and family.'); 
        default:
            return ('You seem a little lost stranger, is there something I can help you with?');
    }
}