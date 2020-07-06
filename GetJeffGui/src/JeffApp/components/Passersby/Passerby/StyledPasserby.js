import styled from 'styled-components';

const StyledPasserby = styled.div`
  color: #DDD0CE;
  height: 85px;
  width: 90%;
  margin: auto;
  font-size: 24px;
  border-radius: 5px;
	font-weight: bolder;
  display: block;
  text-align: center;
  padding: 2px;
  background-color: linear-gradient(to right, rgba(36,31,31,1) 0%, rgba(36,31,31,1) 32%, rgba(74,71,70,1) 100%);
  box-shadow: inset 5px 5px 10px #000008, inset -5px -5px 10px #000001;

  p {
    margin-bottom: 2px;
  }

	animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
	0% {
	opacity:0;
}
	100% {
	opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
}
	
`;

export default StyledPasserby;