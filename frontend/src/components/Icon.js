import * as icons from "react-bootstrap-icons";

export const Icon = ({ iconName, ...props }) => {
    const BootstrapIcon = icons[iconName];

    if (!BootstrapIcon) {
        console.error(`Icon "${iconName}" does not exist in react-bootstrap-icons.`);
        return null;
    }

    return <BootstrapIcon {...props} />;
};
