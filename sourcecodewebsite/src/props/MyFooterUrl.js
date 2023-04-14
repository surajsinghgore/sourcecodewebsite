import React from 'react'



import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
const MyFooterUrl = () => {
    return (
        <div>
            <a href="//www.instagram.com/surajsinghgore/" target="__blank">
          {" "}
          <InstagramIcon className="icons ig" />{" "}
          <span className="text igg">Instagram</span>
        </a>

        <a href="//www.facebook.com/surajsinghrajpoot3224" target="__blank">
          {" "}
          <FacebookIcon className="icons fb" />
          <span className="text fbb">Facebook</span>
        </a>

        <a href="//in.pinterest.com/surajthakurrs45/" target="__blank">
          {" "}
          <PinterestIcon className="icons pi" />
          <span className="text pii">Pinterest</span>
        </a>

        <a href="//twitter.com/Surajthakurrs45" target="__blank">
          {" "}
          <TwitterIcon className="icons tw" />
          <span className="text tww">Twitter</span>
        </a>

        <a href="//www.linkedin.com/in/suraj-singh-96a754189/" target="__blank">
          {" "}
          <LinkedInIcon className="icons li" />
          <span className="text lii">Linkedin</span>
        </a>

        <a href="https://www.instagram.com/surajsinghgore/" target="__blank">
          {" "}
          <TelegramIcon className="icons te" />
          <span className="text tee">Telegram</span>
        </a>
        </div>
    )
}

export default MyFooterUrl;
