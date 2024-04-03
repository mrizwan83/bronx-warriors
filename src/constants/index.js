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
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/register", label: "Register" },
    { href: "/contact", label: "Contact Us" },
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

export const upcomingEvents = [
    { date: "2023-08-15", title: "Season Opener vs. Riverdale Raiders", location: "Bronx, NY" },
    { date: "2023-08-22", title: "Home Game vs. Pelham Panthers", location: "Bronx, NY" },
    { date: "2023-08-29", title: "Away Game vs. Yonkers Bulldogs", location: "Yonkers, NY" },
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