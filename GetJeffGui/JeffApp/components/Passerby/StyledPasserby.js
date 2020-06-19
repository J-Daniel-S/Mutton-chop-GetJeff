import styled, { keyframes } from 'styled-components';

const StyledPasserby = styled.div`
	height: 65px;
	font-weight: bolder;
	display: block;

	&:hover {
		cursor: pointer;
	}

    box-shadow: inset 5px 5px 10px #000008, 
                 inset -5px -5px 10px #000001;

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