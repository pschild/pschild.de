import Typography from "typography";
import sternGroveTheme from "typography-theme-stern-grove";
import lincolnTheme from "typography-theme-lincoln";

lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
        textShadow: 'none'
    }
});

const typography = new Typography(lincolnTheme);

export default typography;