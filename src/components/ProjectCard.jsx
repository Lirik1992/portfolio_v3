import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Tilt from 'react-vanilla-tilt'

const Wrapper = styled.div`
  width: inherit;
  height: inherit;
  ${tw`shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white`};
  position: relative;
  background: url("${props => props.bg}") no-repeat center center;
  background-size: cover;

  &:before {
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(170deg,rgba(0, 0, 0, 0.8),transparent 100%);
    position: absolute;
    border-radius: inherit;
  }
`

const Text = styled.div`
  ${tw`text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: default;
`

const Title = styled.div`
  ${tw`text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  cursor: default;
`

const TextWrapper = styled.div`
  position: relative;
  top: -50px;
  left: -75px;
  font-weight: 700;
  line-height: 1.2;
  width: 282px;
  height: 100px;
  bottom: 10px;
  transform: translateZ(20px);
`

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: #fff;
  margin: 10px 1px 13px;
`

const ProjectCard = ({ title, link, children, bg }) => {
  console.log(bg)
  const handleClick = () => {
    window.location.href = link
  }
  return (
    <Tilt
      style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      onClick={handleClick}
      options={{ glare: true, perspective: 1000, scale: 1, 'max-glare': 1 }}
    >
      <Wrapper bg={bg}>
        <TextWrapper>
          <Title>{title}</Title>
          <Divider />
          <Text>{children}</Text>
        </TextWrapper>
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
