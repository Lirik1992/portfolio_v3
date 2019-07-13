import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

const LineNumber = styled.div`
  ${tw`font-sans text-lg`};
  text-align: left;
  margin-top: 3px;
  &:before {
    content: "${props => props.line_number}";
    position: relative;
    color: #514c66;
    font-size: 16px;
    line-height: 1.6;
    z-index: 3;
    top: -1px;
    left: -10px;
  }
`

const Methods = styled.div`
  ${tw`font-sans text-lg`};
  color: #398ef8;
  display: inline;
`
const PropName = styled.div`
  ${tw`font-sans text-lg`};
  color: #eeff31;
  display: inline;
`

const Symbol = styled.span`
  position: relative;
  color: #fff;
  bottom: 1px;
`

const Dot = styled.div`
  color: #3b3553;
  display: inline;
  position: relative;
  top: -5px;
`

const Comment = styled.div`
  color: #78707e;
  display: inline;
`

const Scope = styled.div`
  color: #e3244c;
  display: inline;
`

const PropTwo = styled.span`
  color: #24e394;
  &:before {
    content: '.';
    color: #fff;
  }
`

const String = styled.span`
  color: #24e33a;
`

const Blinker = styled.span`
  &:before {
    content: '|';
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

const CodeLine = ({ lineNumber, method, name, symbol, dot, comment, scope, propTwo, string, object, skills }) => (
  <LineNumber line_number={lineNumber}>
    {dot ? <Dot>{dot} &nbsp;</Dot> : null}
    {method ? <Methods>{method} &nbsp;</Methods> : null}
    {name ? <PropName>{name} &nbsp;</PropName> : null}
    {symbol ? <Symbol>{symbol}</Symbol> : null}
    {comment ? <Comment>{comment}</Comment> : null}
    {scope.length ? (
      <Scope>
        {scope[0]}
        <PropTwo>{propTwo}</PropTwo>
        &nbsp;
        <Scope style={{ position: 'relative', top: '2px' }}>{scope[1]}</Scope>
        &nbsp;
        <String>{string}</String>
      </Scope>
    ) : null}
    {Object.entries(object).length ? (
      <Symbol>
        {'{'}
        &nbsp;&nbsp;
        <String>{Object.keys(object)[0]}</String>
        &nbsp;
        {':'}
        &nbsp;&nbsp;&nbsp;
        <String>{Object.values(object)[0]}</String>
        &nbsp;&nbsp;
        {'}'}
      </Symbol>
    ) : null}
    {skills ? (
      <String>
        &nbsp;&nbsp;
        {skills}
        &nbsp;&nbsp;
        <Symbol>
          <Blinker /> ]
        </Symbol>
      </String>
    ) : null}
  </LineNumber>
)

export default CodeLine

CodeLine.defaultProps = {
  method: '',
  lineNumber: '',
  name: '',
  symbol: '',
  dot: '',
  comment: '',
  scope: [],
  propTwo: '',
  string: '',
  object: {},
  skills: '',
}

CodeLine.propTypes = {
  method: PropTypes.string,
  lineNumber: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  dot: PropTypes.string,
  comment: PropTypes.string,
  scope: PropTypes.array,
  propTwo: PropTypes.string,
  string: PropTypes.string,
  object: PropTypes.object,
  skills: PropTypes.string,
}
