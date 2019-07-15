import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Cycler } from 'react-text-scrambler'
import PropTypes from 'prop-types'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import CodeLine from '../views/CodeLine'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const Purple = styled.strong`
  color: #5918df;
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => {
  const phrases = ['websites', 'ux/ui', 'things', 'mobile applications', 'servers']
  return (
    <React.Fragment>
      <Layout />
      <Parallax pages={5}>
        <Hero offset={0}>
          <BigTitle>
            Hello, <br /> I'm <Purple>Dmitry Likharev</Purple>
          </BigTitle>
          <Subtitle>My passion is coding</Subtitle>
          <Subtitle>
            I develop and design &nbsp;
            <Cycler duration={3000} delay={2000} strings={phrases} />
          </Subtitle>
        </Hero>
        <Projects offset={1}>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Freiheit"
              link="https://www.behance.net/gallery/58937147/Freiheit"
              bg="../images/projectOne.jpg"
            >
              This project is my entry to Adobe's #ChallengeYourPerspective contest.
            </ProjectCard>
            <ProjectCard
              title="Harry Potter"
              link="https://www.behance.net/gallery/52915793/Harry-Potter"
              bg="../images/projectOne.jpg"
              // linear-gradient(to right, #662D8C 0%, #ED1E79 100%)
            >
              I entered the DOCMA 2017 award with this Harry Potter inspired image.
            </ProjectCard>
            <ProjectCard
              title="Tomb Raider"
              link="https://www.behance.net/gallery/43907099/Tomb-Raider"
              bg="../images/projectOne.jpg"
            >
              Recreation of a Tomb Raider Wallpaper (Fan Art)
            </ProjectCard>
            <ProjectCard
              title="Eagle"
              link="https://www.behance.net/gallery/38068151/Eagle"
              bg="../images/projectOne.jpg"
            >
              A fantasy image manipulation relocating the habitat of wild animals.
            </ProjectCard>
          </ProjectsWrapper>
        </Projects>
        <About offset={3}>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              I am 26 years old developer from Russia. In the early start of my career I was working as a freelancer for
              2 years, then I came to the enterprise and I am working in high loaded projects (IoT, Web conferencing,
              etc.) for 3 years and counting.
            </AboutSub>
          </AboutHero>
          {/* <AboutDesc>
          </AboutDesc> */}
          <Inner style={{ marginTop: '40px' }}>
            <CodeLine lineNumber="01" method="class" name="Dmitry Likharev" symbol="{" />
            <CodeLine lineNumber="02" dot={aboutData.dot} comment={aboutData.comments[0]} />
            <CodeLine lineNumber="03" dot={aboutData.dot} comment={aboutData.comments[1]} />
            <CodeLine lineNumber="04" method="constructor" symbol="() {" dot={aboutData.dot} />
            <CodeLine
              lineNumber="05"
              dot={aboutData.dot + aboutData.dot}
              propTwo="name"
              scope={aboutData.scope}
              string={aboutData.name}
            />
            <CodeLine
              lineNumber="06"
              dot={aboutData.dot + aboutData.dot}
              propTwo="dayOfBirthTimestamp"
              scope={aboutData.scope}
              string={aboutData.birthday}
            />
            <CodeLine
              lineNumber="07"
              dot={aboutData.dot + aboutData.dot}
              propTwo="email"
              scope={aboutData.scope}
              string={aboutData.email}
            />
            <CodeLine lineNumber="08" symbol="}" dot={aboutData.dot} />
            <CodeLine lineNumber="09" symbol="() {" name="workExperience" dot={aboutData.dot} />
            <CodeLine lineNumber="10" symbol="[" method="return" dot={aboutData.dot + aboutData.dot} />
            <CodeLine
              lineNumber="11"
              object={aboutData.workExperience[0]}
              dot={aboutData.dot + aboutData.dot + aboutData.dot}
            />
            <CodeLine
              lineNumber="12"
              object={aboutData.workExperience[1]}
              dot={aboutData.dot + aboutData.dot + aboutData.dot}
            />
            <CodeLine lineNumber="13" dot={aboutData.dot + aboutData.dot} symbol="]" />
            <CodeLine lineNumber="14" dot={aboutData.dot} symbol="}" />
            <CodeLine lineNumber="15" dot={aboutData.dot} name="skills" symbol="() {" />
            <CodeLine
              lineNumber="16"
              dot={aboutData.dot + aboutData.dot}
              symbol="["
              method="return"
              skills={aboutData.skills}
            />
            <CodeLine lineNumber="17" dot={aboutData.dot} symbol="}" />
            <CodeLine lineNumber="18" symbol="}" />
          </Inner>
        </About>
        <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Say <a href="mailto:ldo19735@gmail.com">Hi</a> or find me on other platforms:{' '}
              <a href="https://www.linkedin.com/in/dmitry-likharev-61a244178/">LinkedIn</a> &{' '}
              <a href="https://www.instagram.com/push_remote/">Instagram</a>
            </ContactText>
          </Inner>
          <Footer>&copy; 2019 made by Dmitry Likharev.</Footer>
        </Contact>
      </Parallax>
    </React.Fragment>
  )
}

const aboutData = {
  birthday: '719442000000',
  email: `'ldo19735@gmail.com'`,
  name: `'Dmitry Likharev'`,
  dot: '..',
  scope: ['this', '='],
  comments: [`// I'm ambitious and love new challenges :)`, '// My vast variety of skills is continuously expanding.'],
  workExperience: [
    {
      "'2014 - now'": `'Full-Stack Designer/developer as freelancer'`,
    },
    {
      "'2016 - now'": `'Front-end Developer at MERA'`,
    },
  ],
  skills: `'HTML5.1/CSS4/JS', 'React', 'Jest', 'AngularJS', 'Karma', 'jQuery', 'Node.js', 'Bootstrap/Material Design', 'Webpack/Gulp/Grunt', 'SASS/SCSS', 'npm/yarn/bower', 'PWA', 'SSR', 'SPA', 'GIT', 'Python', 'Django', 'Jade/Pug`,
}

export default Index
