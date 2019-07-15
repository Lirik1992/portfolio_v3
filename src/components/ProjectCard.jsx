import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Tilt from 'react-vanilla-tilt'

const Wrapper = styled.div`
  width: 100%;
  height: inherit;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  background: url("${props => props.bg}") no-repeat center center;
  background-size: cover;
  // background-color: gray;
  // background-blend-mode: luminosity;
  filter: blur(5px);
`

const Text = styled.div`
  ${tw`opacity-75 font-sans text-sm md:text-base`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const ProjectCard = ({ title, link, children, bg }) => {
  console.log(bg)
  const handleClick = () => {
    console.log(link)
    // window.location.href = link
  }
  return (
    <Tilt
      style={{ width: '100%', height: '100%' }}
      onClick={handleClick}
      options={{ glare: true, perspective: 700, scale: 1.05 }}
    >
      <Wrapper bg={bg}>
        <Text>{children}</Text>
        <Title>{title}</Title>
      </Wrapper>
    </Tilt>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
}
