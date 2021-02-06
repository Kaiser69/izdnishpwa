
import React from "react";
import ReactDOM from 'react-dom';

class Typer extends React.Component {

    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 30 : 150
      });
  
      if (!isDeleting && text === fullText) {     
        setTimeout(() => this.setState({ isDeleting: true }), 200);   
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });      
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
        <h1>{ this.props.heading }&nbsp;
          <span>{ this.state.text }</span>
          <span id="cursor"></span>
        </h1>
      );
    }
  }
  
  ReactDOM.render(
    <Typer
      heading="Things for hipsters:"
      dataText={[  
        'Vinyl swag.', 
        'Seitan jianbing.',
        'Enamel pin meditation.',
        'Denim seitan.',
        'Semiotics austin.',
        'Sriracha fanny pack.',
        'Vape raw dreamcatcher.',
        'Fam blog.',
        '90s church-key.',
        'Pabst distillery.',
        'Street art unicorn.'
      ]} 
    />, 
    document.getElementById('app')
  );