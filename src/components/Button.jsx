import styled from 'styled-components'
const Button = styled.button`
  font-size: 21px;
  /* border : ${({theme})=> theme === 'light' ? '1px solid transparent' : '1px solid black'}; */
  margin : 2%;
  border : ${({theme})=> {
    if(theme === 'light')  return"1px solid transparent";
    else if(theme === 'black') return'1px solid black';
    else if(theme === 'dashed') return '1px dashed black';
    else if(theme === 'text') return '1px hidden black';
    else if(theme === 'link') return 'none';
  }};
  padding: 1% 4%;
  background : black;
  background-color: ${({theme})=> {
    if(theme ==='light')  return '#2490fe';
    else return 'white';
  }};
  color:  ${({theme})=> {
    if(theme === 'light') return 'white';
    else return "black";
  }};
  transition: transform 0.3s;

  &:hover {
    transform:  scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

export {Button}