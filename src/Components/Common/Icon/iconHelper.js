import { ReactComponent as compassIcon } from "../../../images/icons/compass.svg";
import { ReactComponent as planeIcon } from "../../../images/icons/plane.svg";
import { ReactComponent as searchIcon } from "../../../images/icons/search.svg";

const iconFileMapper = {
    compass: compassIcon,
    plane: planeIcon,
    search: searchIcon,
};

export function getIcon(icon) {
    return iconFileMapper[icon];
}

export const availableIcons = Object.keys(iconFileMapper);
