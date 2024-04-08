import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {
    young_player,
    youth_team,
    venmo,
    training,
    tent_event,
    team_img4,
    team_img3,
    team_img2,
    team_img1,
    sidepractice,
    sideline,
    neverforget,
    kid3,
    kid2,
    kid1,
    huddle,
    game,
    field_player,
    demers,
    demers_obituary,
    coach,
    caution_field,
    football,
    org_logo,
    rb1,
    cartoonplayer,
    footerLogo,
    headerLogo,
    hero1,
} from "../assets/images";

export const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#register", label: "Register" },
    { href: "#contact", label: "Contact Us" },
];

export const heroImages = [
    {
        imgURL: team_img1,
        alt: "hero image 1",
    },
    {
        imgURL: team_img3,
        alt: "hero image 2",
    },
    {
        imgURL: team_img2,
        alt: "hero image 3",
    },
];

export const statistics = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Players Trained" },
    { value: "5", label: "Championships Won" },
];

// constants/index.js

export const calendarEvents = [
    {
        start: new Date(2024, 3, 1, 10, 0),
        end: new Date(2024, 3, 1, 12, 0),
        title: 'Team Meeting',
        location: 'Bronx Warriors HQ',
        description: 'Discussion of upcoming season strategies and player development plans.',
    },
    {
        start: new Date(2024, 3, 5, 15, 0),
        end: new Date(2024, 3, 5, 17, 0),
        title: 'Training Session',
        location: 'Bronx Warriors Training Field',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 3, 10, 9, 0),
        end: new Date(2024, 3, 10, 11, 0),
        title: 'Tryouts',
        location: 'Bronx Warriors Stadium',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 3, 15, 18, 0),
        end: new Date(2024, 3, 15, 20, 0),
        title: 'Fundraiser Event',
        location: 'Bronx Community Center',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 3, 22, 14, 0),
        end: new Date(2024, 3, 22, 16, 0),
        title: 'Friendly Match',
        location: 'Bronx Warriors Stadium',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 3, 28, 11, 0),
        end: new Date(2024, 3, 28, 13, 0),
        title: 'Team Building Activity',
        location: 'Bronx Park',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 4, 3, 16, 0),
        end: new Date(2024, 4, 3, 18, 0),
        title: 'Training Session',
        location: 'Bronx Warriors Training Field',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 4, 8, 12, 0),
        end: new Date(2024, 4, 8, 14, 0),
        title: 'Press Conference',
        location: 'Bronx Warriors HQ',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 4, 12, 19, 0),
        end: new Date(2024, 4, 12, 21, 0),
        title: 'Fan Meet and Greet',
        location: 'Bronx Warriors Stadium',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 4, 18, 10, 0),
        end: new Date(2024, 4, 18, 12, 0),
        title: 'Charity Event',
        location: 'Bronx Community Center',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
    {
        start: new Date(2024, 4, 25, 13, 0),
        end: new Date(2024, 4, 25, 15, 0),
        title: 'Youth Football Clinic',
        location: 'Bronx Warriors Training Field',
        description: 'Discussion of upcoming season strategies and player development plans.',

    },
];

export const testimonials = [
    {
        imgURL: null,
        name: "Sarah Johnson",
        role: "Parent",
        feedback: "The Bronx Warriors have been an amazing experience for my child. The coaches are dedicated and truly care about the players' development on and off the field.",
    },
    {
        imgURL: null,
        name: "Michael Davis",
        role: "Former Player",
        feedback: "Playing for the Bronx Warriors was a defining moment in my life. The skills and values I learned during my time with the team have stayed with me throughout my career.",
    },
];


export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", link: "/" },
            { name: "About Us", link: "/about" },
            { name: "Teams", link: "/teams" },
            { name: "Register", link: "/register" },
            { name: "Contact Us", link: "/contact" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Terms of Service", link: "/terms-of-service" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "info@bronxwarriors.com", link: "mailto:info@bronxwarriors.com" },
            { name: "+1 (718) 123-4567", link: "tel:+17181234567" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "Facebook", link: "https://www.facebook.com/BronxWarriorsFootball" },
    { src: twitter, alt: "Twitter", link: "https://twitter.com/BronxWarriors" },
    { src: instagram, alt: "Instagram", link: "https://www.instagram.com/bronx_warriors_football" },
];