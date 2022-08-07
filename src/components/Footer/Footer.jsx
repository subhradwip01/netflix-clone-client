import React from 'react'
import classes from "./Footer.module.css"
import {FaInstagram,FaTwitter,FaFacebookF,FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes.socialMenu}>
            <span className={classes.socialIcon}><FaFacebookF/></span>
            <span className={classes.socialIcon}><FaInstagram/></span>
            <span className={classes.socialIcon}><FaTwitter/></span>
            <span className={classes.socialIcon}><FaYoutube/></span>
        </div>
        <div className={classes.footerMenu}>
            <div className={classes.footerSubmenu}>
                <ul className={classes.menuList}>
                    <li className={classes.menuListItem}>Audio and Subtitles</li>
                    <li className={classes.menuListItem}>Media Center</li>
                    <li className={classes.menuListItem}>Privacy</li>
                    <li className={classes.menuListItem}>Contact Us</li>
                </ul>
            </div>
            <div className={classes.footerSubmenu}>
                <ul className={classes.menuList}>
                    <li className={classes.menuListItem}>Audio Description</li>
                    <li className={classes.menuListItem}>Investor Relations</li>
                    <li className={classes.menuListItem}>Legal Notice</li>
                </ul>
            </div>
            <div className={classes.footerSubmenu}>
                <ul className={classes.menuList}>
                    <li className={classes.menuListItem}>Help Centre</li>
                    <li className={classes.menuListItem}>Jobs</li>
                    <li className={classes.menuListItem}>Cookie Preferences</li>
                </ul>
            </div>
            <div className={classes.footerSubmenu}>
                <ul className={classes.menuList}>
                    <li className={classes.menuListItem}>Gift Card</li>
                    <li className={classes.menuListItem}>Terms of Use</li>
                    <li className={classes.menuListItem}>Corporate Information</li>
                    <li className={classes.menuListItem}>Media Center</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer