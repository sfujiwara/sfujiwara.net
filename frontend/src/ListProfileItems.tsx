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


export default function ListProfileItem({ text, href, icon }) {
    return (
        <ListItem>
            <ListItemIcon>
                <IconButton size="small" edge="start" href={href} target='_blank'>
                    {icon === 'twitter' && <TwitterIcon color='primary' />}
                    {icon === 'github' && <GitHubIcon color='primary' />}
                    {icon === 'mail' && <MailIcon color='primary' />}
                    {icon === 'book' && <BookIcon color='primary' />}
                    {icon === 'business' && <BusinessIcon color='primary' />}
                    {icon === 'link' && <LinkIcon color='primary' />}
                    {icon === 'school' && <SchoolIcon color='primary' />}
                    {icon === 'article' && <ArticleIcon color='primary' />}
                    {icon === 'storage' && <StorageIcon color='primary' />}
                    {icon === 'check' && <CheckIcon color='primary' />}
                    {icon === 'google' && <GoogleIcon color='primary' />}
                    {icon === 'people' && <PeopleIcon color='primary' />}
                </IconButton>
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
}
