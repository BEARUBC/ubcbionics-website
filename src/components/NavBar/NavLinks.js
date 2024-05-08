import "./Navbar.css";

function NavLinks({fn}) {
    return (
        <div class={fn}>
            {/* <li><a href="/pilot">PILOT</a></li> pilots are no longer being recruited. Might be in the future. */}
            <li><a href="/teams">TEAMS</a></li>
            <li><a href="/grasp">PROJECTS</a></li>
            <li><a href="/sponsor">SPONSORS</a></li>
            <li><a href="/contactform">CONTACT</a></li>
        </div>
    );
}

export default NavLinks;