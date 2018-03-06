import Typography from "typography";
import sternGroveTheme from "typography-theme-stern-grove";
import lincolnTheme from "typography-theme-lincoln";

const linkColor = '#E74C3C';

lincolnTheme.googleFonts = [{
    name: 'Varela',
    styles: ['400']
}, {
    name: 'Lora',
    styles: ['400', '400i', '700']
}];
lincolnTheme.headerFontFamily = ['Varela', 'sans-serif'];
lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
        textShadow: 'none',
        color: linkColor,
        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ' + linkColor + ' 1px, ' + linkColor + ' 2px, rgba(0, 0, 0, 0) 2px)'
    }
});

const typography = new Typography(lincolnTheme);

export default typography;