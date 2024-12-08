import './App.css'

import ArticleIcon from '@mui/icons-material/Article';
import CheckIcon from '@mui/icons-material/Check';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkIcon from '@mui/icons-material/Link';
import BookIcon from '@mui/icons-material/Book';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import StorageIcon from '@mui/icons-material/Storage';


export default function ListProfileItem({ text, href, icon }: {text: string, href: string, icon: string}) {
    let color: "primary" | "disabled" = "primary"
    if (href == "") {
        color = "disabled"
    }

    return (
        <ListItem>
            <ListItemIcon>
                <IconButton size="small" edge="start" href={href} target='_blank'>
                    {icon === 'twitter' && <TwitterIcon color={color} />}
                    {icon === 'github' && <GitHubIcon color={color} />}
                    {icon === 'mail' && <MailIcon color={color} />}
                    {icon === 'book' && <BookIcon color={color} />}
                    {icon === 'business' && <BusinessIcon color={color} />}
                    {icon === 'link' && <LinkIcon color={color} />}
                    {icon === 'school' && <SchoolIcon color={color} />}
                    {icon === 'article' && <ArticleIcon color={color} />}
                    {icon === 'storage' && <StorageIcon color={color} />}
                    {icon === 'check' && <CheckIcon color={color} />}
                    {icon === 'google' && <GoogleIcon color={color} />}
                    {icon === 'people' && <PeopleIcon color={color} />}
                </IconButton>
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}
