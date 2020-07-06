import styled from 'styled-components';

const StyledPage = styled.div`
	background-color: #565D61;
	color: #DDD0CE;
	font-size: 28px;
	height: 70%;
	width: 100%;
	margin: auto;
	padding: 5%;
  text-align: center;
  
  button {
 		display: block;
  	cursor: pointer;
 		outline: none;
  	border: none;
  	background-color: var(--light);
  	width: 400px;
  	height: 70px;
 		border-radius: 30px;
  	font-size: 1.5rem;
  	color: var(--text);
  	background-size: 100% 100%;
  	box-shadow: 0 0 0 7px var(--light) inset;
    margin: auto;
  }

	animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;

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

export default StyledPage;