$(document).ready(() => {
    // instantiating jf property on window
    if (!window.interface){ 
        window.interface = {
            // DESIGN
            selectedColor: 'yellow',
            colorPalette: {
                'green-light':   '#a6d6b8',
                'green-dark':    '#6a9a8a',
                'yellow':        '#fac557',
                'yellow-vibrant':'#ffb400',
                'red':           '#f06339',
                'pink':          '#F6A6A4',
                'cream':         '#f9ebc8',
                'purple':        '#353450',
                'purple-dark':   '#2C0E37',
                // vine colors
                'green-light_20%-light': '#b8dec6',
                'green-light_20%-dark': '#85ab93',
            },
            // INTERACTION
            mouseDown: 0,
            logs: {
                animations: {
                    leaves: [],
                    static: []
                },
                vines: {
                    count: 0,
                    data: []
                },
                leaves: {
                    count: 0
                }
            },
            canvas: {
                touches: [],
                containers: ['.cards.container','.television-container'],
                focus_index: 0
            },
            vines: {
                sizeModifier: 1.1,
            },
            leaves: {
                sizeModifier: 1.3
            },
            cards: {
                flipping: false,
                touches: [],
                data: [
                    {
                        type:'personal',
                        title:'pronouns',
                        content: 'my pronouns are he/him',
                        link: 'http://pronoun.is/he',
                        flipped: false
                    },
                    {
                        type:'comedy',
                        title:'LSI',
                        content: 'my team <i>holy goat</i> hosts the friday show at logan square improv. it\'s <a target="_blank" href="https://scapimag.com/2019/10/03/the-rise-of-logan-square-improv-how-one-indie-improv-theater-became-the-most-fun-place-to-play-in-the-city/">the best</a>.',
                        link: 'https://www.logansquareimprov.com',
                        flipped: false
                    },
                    {
                        type:'comedy',
                        title:'family friends',
                        content: 'alex prichodko and i made a bunch of sketch videos. i\'m proud of them.',
                        link: 'https://www.youtube.com/c/FamilyFriends',
                        flipped: false
                    },
                    {
                        type:'code',
                        title:'this website',
                        content: 'please enjoy this work in progress! all the code can be found on github.',
                        link: 'https://github.com/joefitz12/personal-website',
                        flipped: false
                    },
                    {
                        type:'comedy',
                        title: '<i>thank you, five</i>',
                        content: 'audrey schiffhauer, kennedy baldwin, renee barry, and i put up this show at sc.',
                        link: 'https://vimeo.com/390878707',
                        flipped: false
                    },
                    {
                        type:'code',
                        title: 'extra.css',
                        content: 'i used extra.css, a houdini library, to style some of the titles on this page',
                        link: 'https://extra-css.netlify.app/',
                        flipped: false 
                    }
                ]
            },
            static: {
                animate: true
            }
        };
    }
});