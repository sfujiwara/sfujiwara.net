import './App.css'

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import LinkIcon from '@mui/icons-material/Link';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';
import CheckIcon from '@mui/icons-material/Check';
import GoogleIcon from '@mui/icons-material/Google';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';

import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import IconButton from '@mui/material/IconButton';


function profile() {
  return (
    <List>
      <ListItem>
        <ListItemIcon><MailIcon /></ListItemIcon>
        <ListItemText primary="shuhei.fujiwara[at]gmail.com" />
      </ListItem>
      <ListItemButton href='https://twitter.com/shuhei_fujiwara' target='_blank'>
        <ListItem disablePadding>
          <ListItemIcon><TwitterIcon /></ListItemIcon>
          <ListItemText primary="@shuhei_fujiwara" />
        </ListItem>
      </ListItemButton>
      <ListItemButton href="https://github.com/sfujiwara" target='_blank'>
        <ListItem disablePadding>
          <ListItemIcon><GitHubIcon /></ListItemIcon>
          <ListItemText primary="sfujiwara" />
        </ListItem>
      </ListItemButton>
      <ListItemButton href="https://www.kaggle.com/sfujiwara" target='_blank'>
        <ListItem disablePadding>
          <ListItemIcon><LinkIcon /></ListItemIcon>
          <ListItemText primary="Kaggle (Competition Expert)" />
        </ListItem>
      </ListItemButton>
      <ListItemButton href="https://speakerdeck.com/shuheif" target='_blank'>
        <ListItem disablePadding>
          <ListItemIcon><LinkIcon /></ListItemIcon>
          <ListItemText primary="Speaker Deck" />
        </ListItem>
      </ListItemButton>
    </List>
  )
}

function education() {
  const texts = [
    "March 2014: Master of Engineering, Graduate School of Science and Technology, Keio University.",
    "April 2013 - March 2014: Special Research Student, Graduate School of Information Science and Technology, the University of Tokyo.",
    "March 2012: Bachelor of Engineering, Dept. of Administration Engineering, Keio University.",
  ]

  return (
    <List>
      {texts.map((text) => {
        return <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      })}
    </List>
  )
}

function books() {
  const items = [
    {
      "text": "Supervising a translation of \"Practical Deep Learning for Cloud, Mobile, and Edge (Japanese Edition)\", O'Reilly Japan",
      "url": "https://www.oreilly.co.jp/books/9784814400287/"
    },
    {
      "text": "Supervising a translation of \"Fundamentals of Deep Learning (Japanese Edition)\", O'Reilly Japan",
      "url": "https://www.oreilly.co.jp/books/9784873118321/"
    },
    {
      "text": "Google Cloud Platform 実践 機械学習基盤 開発 Machine Learning/データ分析, 秀和システム",
      "url": "https://www.shuwasystem.co.jp/book/9784798059570.html"
    },
    {
      "text": "やってみよう！機械学習, 技術評論社",
      "url": "https://gihyo.jp/book/2019/978-4-297-10396-5"
    },
    {
      "text": "Software Design 2018 年 9 月号, 技術評論社",
      "url": "https://gihyo.jp/magazine/SD/archive/2018/201809"
    },
  ]

  return (
    <List>
      {items.map((item) => {
        return <ListItem>
          <ListItemIcon>
          <IconButton size="large" edge="start" href={item.url} target='_blank'>
            <BookIcon color='primary' />
          </IconButton>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })}
    </List>
  )
}

function refereedJournals() {
  const items = [
    {
      "text": "T. Kanamori, S. Fujiwara, A. Takeda, Robustness of learning algorithms using hinge loss with outlier indicators, Neural Networks, 2017",
      "url": "https://www.sciencedirect.com/science/article/pii/S0893608017301570"
    },
    {
      "text": "T. Kanamori, S. Fujiwara, A. Takeda, Breakdown Point of Robust Support Vector Machine, Entropy, 2017",
      "url": "https://www.mdpi.com/1099-4300/19/2/83"
    },
    {
      "text": "S. Fujiwara, A. Takeda, T. Kanamori, DC Algorithm for Extended Robust Support Vector Machine, Neural Computation, 2017",
      "url": "http://www.mitpressjournals.org/doi/abs/10.1162/NECO_a_00958#.WPzG-FPygp8"
    },
    {
      "text": "Y. Gunawardana, S. Fujiwara, A. Takeda, J. Woo, C. Woelk, M. Niranjan, Outlier-Detection at the Transcriptome-Proteome Interface, Bioinfomatics, 2015",
      "url": "https://academic.oup.com/bioinformatics/article/31/15/2530/188674"
    },
    {
      "text": "A. Takeda, S. Fujiwara and T. Kanamori, Extended Robust Support Vector Machine Based on Financial Risk Minimization, Neural Computation, 2014",
      "url": "http://www.mitpressjournals.org/doi/abs/10.1162/NECO_a_00647?journalCode=neco"
    },
  ]

  return (
    <List>
      {items.map((item) => {
        return <ListItem>
          <ListItemIcon>
          <IconButton size="large" edge="start" href={item.url} target='_blank'>
            <ArticleIcon color='primary' />
          </IconButton>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })}
    </List>
  )
}

function refereedConferenceProceedings() {
  return (
    <List>
      <ListItem>
        <ListItemIcon><ArticleIcon /></ListItemIcon>
        <ListItemText primary="Y. Gunawardana, S. Fujiwara, A. Takeda, C. Woelk and M. Niranjan, Outlier-Detecting Support Vector Regression for Modelling at the Transcriptome-Proteome Interface, Eighth International Workshop on Machine Learning in Systems Biology (MLSB 2014), 2014" />
      </ListItem>
    </List>
  )
}

function technicalPapers() {
  const items = [
    {
      "text": "S. Fujiwara, A. Takeda, T. Kanamori, DC Algorithm for Extended Robust Support Vector Machine, 2014",
      "url": "https://www.keisu.t.u-tokyo.ac.jp/data/2014/METR14-38.pdf"
    },
    {
      "text": "T. Kanamori, S. Fujiwara and A. Takeda, Breakdown Point of Robust Support Vector Machine, 2014",
      "url": "http://arxiv.org/abs/1409.0934"
    },
  ]

  return (
    <List>
      {items.map((item) => {
        return <ListItem>
          <ListItemIcon>
          <IconButton size="large" edge="start" href={item.url} target='_blank'>
            <ArticleIcon color='primary' />
          </IconButton>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })}
    </List>
  )
}

function academicConferences() {
  const texts = [
    "藤原秀平, 武田朗子, 金森敬文, ロバストサポートベクターマシンの拡張に対する DC アルゴリズムの適用, 第19回情報論的学習理論と機械学習 (IBISML) 研究会, 名古屋大学, 2014年 11月",
    "藤原秀平, 武田朗子, 金森敬文, サポートベクターマシンの拡張に対する DC アルゴリズムの適用, 日本オペレーションズリサーチ学会 最適化の理論と応用研究部会 - 未来を担う若手研究者の集い 2014 -, 筑波大学 , 2014年 5月",
    "藤原秀平, 武田朗子, 金森敬文 , 金融リスク尺度に基づくサポートベクターマシンの拡張, 日本オペレーションズリサーチ学会 最適化の理論と応用研究部会 - 未来を担う若手研究者の集い 2013 -, 筑波大学 , 2013年 6月",
    "藤原秀平, 武田朗子, 金森敬文, 金融リスク指標に基づく外れ値に対して頑健なサポートベクター マシンの拡張, 日本オペレーションズリサーチ学会春季研究発表会, 東京大学, 2013年 3月"
  ]

  return (
    <List>
      {texts.map((text) => {
        return <ListItem>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      })}
    </List>
  )
}

function superComputer() {
  const items = [
    {
      "text": "2021-09-28: #7 SQUID in Osaka University",
      "url": "http://www.hpc.cmc.osaka-u.ac.jp/lec_ws/20210928/"
    },
    {
      "text": "2021-06-23: #6 WISTERIA in Tokyo University",
      "url": "https://www.cc.u-tokyo.ac.jp/events/lectures/159/"
    },
    {
      "text": "2021-05-12: #5 ABCI in AIST",
      "url": "https://abci.ai/event/2021/05/12/ja_minicamp.html"
    },
    {
      "text": "2020-11-05: #4 FLOW in Nagoya University",
      "url": "https://icts.nagoya-u.ac.jp/ja/sc/event/20201105_hackathon/2020-11-05-gpu.html"
    },
    {
      "text": "2019-08-05: #3 TSUBAME in Tokyo Institute of Technology",
      "url": "http://gpu-computing.gsic.titech.ac.jp/node/100"
    },
    {
      "text": "2019-02-27: #2 ABCI in AIST",
      "url": "https://abci.ai/event/2019/02/27/ja_event.html"
    },
    {
      "text": "2019-01-24: #1 Reedbush in Tokyo University",
      "url": "https://www.cc.u-tokyo.ac.jp/events/lectures/111/"
    },
  ]

  return (
    <List>
      {items.map((item) => {
        return <ListItem>
          <ListItemIcon>
          <IconButton size="large" edge="start" href={item.url} target='_blank'>
            <StorageIcon color='primary' />
          </IconButton>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })}
    </List>
  )
}

function selectedTalks() {
  const items = [
    {
      "text": "Machine Learning Developer Meetup Tokyo",
      "url": "https://events.withgoogle.com/ml-developer-meetup/"
    },
    {
      "text": "Dogrun 2018 @ Google Cloud Next'18 Tokyo",
      "url": "https://gcpug-tokyo.connpass.com/event/95560/"
    },
    {
      "text": "DeNA TechCon 2021",
      "url": "https://techcon.dena.com/2021/session/12/"
    },
  ]

  return (
    <List>
      {items.map((item) => {
        return <ListItem>
          <ListItemIcon>
          <IconButton size="large" edge="start" href={item.url} target='_blank'>
            <CheckIcon color='primary' />
          </IconButton>
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      })}
    </List>
  )
}

function awards() {
  return (
    <List>
      <ListItem>
        <ListItemIcon><SchoolIcon /></ListItemIcon>
        <ListItemText primary="優秀研究賞, 慶應義塾大学大学院理工学研究科開放環境科学専攻オープンシステムマネジメント専修" />
      </ListItem>
      <ListItem>
        <ListItemIcon><GoogleIcon /></ListItemIcon>
        <ListItemText primary="Google Developer Expert (Machine Learning)" />
      </ListItem>
      <ListItem>
        <ListItemIcon><GoogleIcon /></ListItemIcon>
        <ListItemText primary="Google Cloud Champion Innovator (Cloud AI/ML)" />
      </ListItem>
    </List>
  )
}

function activities() {
  return (
    <List>
      <ListItem>
        <ListItemIcon><PeopleIcon /></ListItemIcon>
        <ListItemText primary="TensorFlow User Group (Tokyo) Organizer" />
      </ListItem>
      <ListItem>
        <ListItemIcon><PeopleIcon /></ListItemIcon>
        <ListItemText primary="Casual Optimization Organizer" />
      </ListItem>
    </List>
  )
}

function App() {

  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>Shuhei Fujiwara</Typography>
      {profile()}

      <Typography component="h2" variant="h4" gutterBottom>Work Experience</Typography>
      <List>
        <ListItem>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="September 2019 - May 2024, DeNA Inc., Software Engineer" />
        </ListItem>
        <ListItem>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="April 2018 - Augast 2019, Mercari (Merpay) Inc., Software Engineer" />
        </ListItem>
        <ListItem>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="December 2017 - March 2018, Mercari (Souzoh) Inc., Software Engineer" />
        </ListItem>
        <ListItem>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="April 2015 - December 2017, TOPGATE Inc., Software Engineer" />
        </ListItem>
        <ListItem>
          <ListItemIcon><BusinessIcon /></ListItemIcon>
          <ListItemText primary="August 2012 - October 2012, Boeing Japan, Japan Advanced Strategy Analysis Lab, Phantom Works, Software Engineer (Internship)" />
        </ListItem>
      </List>

      <Typography component="h2" variant="h4" gutterBottom>Education</Typography>
      {education()}

      <Typography component="h2" variant="h4" gutterBottom>Publications</Typography>

      <Typography component="h3" variant="h5" gutterBottom>Books</Typography>
      {books()}

      <Typography component="h3" variant="h5" gutterBottom>Refereed Journals</Typography>
      {refereedJournals()}

      <Typography component="h3" variant="h5" gutterBottom>Refereed Conference Proceedings</Typography>
      {refereedConferenceProceedings()}

      <Typography component="h3" variant="h5" gutterBottom>Technical Papers</Typography>
      {technicalPapers()}

      <Typography component="h2" variant="h4" gutterBottom>Talks</Typography>

      <Typography component="h3" variant="h5" gutterBottom>Academic Conferences</Typography>
      {academicConferences()}

      <Typography component="h3" variant="h5" gutterBottom>Tutor of Super Computer Seminars</Typography>
      {superComputer()}

      <Typography component="h3" variant="h5" gutterBottom>Selected Talks in Tech Events</Typography>
      {selectedTalks()}

      <Typography component="h2" variant="h4" gutterBottom>Awards</Typography>
      {awards()}

      <Typography component="h2" variant="h4" gutterBottom>Activities</Typography>
      {activities()}
    </>
  )
}

export default App
