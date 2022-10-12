import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className={classes.mainFooter}>
      <ul className={classes.links}>
        <li className={classes.link}>Created by Wojciech Glegoła</li>
        <li className={classes.link}>
          <Link to="www.wp.pl">About [todo]</Link>
        </li>
        <li className={classes.link}>
          <Link to="/roadmap">RoadMap [todo]</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
