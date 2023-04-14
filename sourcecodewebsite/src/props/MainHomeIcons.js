import IconsCard from './IconsCard';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ContactsIcon from "@material-ui/icons/Contacts";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import AssignmentReturnIcon from "@material-ui/icons/AssignmentReturn";
const MainHomeIcons = () => {
  
    return (
        <>
            <IconsCard
            Link="/"
            iconsTag={<AssignmentReturnIcon className="iconn" />}
            H2="Main Home"
          />
          <IconsCard
            Link="/contact"
            iconsTag={<ContactsIcon className="iconn" />}
            H2="Message Us"
          />
          <IconsCard
            Link="/aboutme"
            iconsTag={<AssignmentIndIcon className="iconn" />}
            H2="About Me"
          />

          <IconsCard
            Link="/livewebsite"
            iconsTag={<ViewCarouselIcon className="iconn" />}
            H2="Live Website"
          />
          <IconsCard
            Link="/logout"
            iconsTag={<ExitToAppIcon className="iconn" />}
            H2="Logout"
          />
        </>
    )
}

export default MainHomeIcons;
