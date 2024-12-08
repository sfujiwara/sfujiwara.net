import './App.css'


import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import ListProfileItem from './ListProfileItems';
import {
  academicConferences,
  accounts,
  activities,
  awards,
  books,
  conferenceProceedings,
  educations,
  journals,
  selectedTalks,
  superComputers,
  technicalPapers,
  workExperiences,
} from './items';


function App() {

  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>Shuhei Fujiwara</Typography>
      <List>{accounts.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Work Experience</Typography>
      <List>{workExperiences.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Education</Typography>
      <List>{educations.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Publications</Typography>

      <Typography component="h3" variant="h5" gutterBottom>Books</Typography>
      <List>{books.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h3" variant="h5" gutterBottom>Refereed Journals</Typography>
      <List>{journals.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h3" variant="h5" gutterBottom>Refereed Conference Proceedings</Typography>
      <List>{conferenceProceedings.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h3" variant="h5" gutterBottom>Technical Papers</Typography>
      <List>{technicalPapers.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Talks</Typography>

      <Typography component="h3" variant="h5" gutterBottom>Academic Conferences</Typography>
      <List>{academicConferences.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h3" variant="h5" gutterBottom>Tutor of Super Computer Seminars</Typography>
      <List>{superComputers.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h3" variant="h5" gutterBottom>Selected Talks in Tech Events</Typography>
      <List>{selectedTalks.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Awards</Typography>
      <List>{awards.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>

      <Typography component="h2" variant="h4" gutterBottom>Activities</Typography>
      <List>{activities.map(item => <ListProfileItem text={item.text} href={item.link} icon={item.icon} />)}</List>
    </>
  )
}

export default App
