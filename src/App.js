import React, { Component } from 'react';
import './App.css';
import { Trans, withTranslation } from 'react-i18next';
import bostonImg from './boston2.jpg';
import maimiImg from './maiami2.jpeg';
import LanguageSwitcher from './languageSwitcher/LanguageSwitcher'


class App extends Component {
  state = {
    lng: ''
  }

  componentDidMount() {
    const { i18n } = this.props;
    console.log(`componentDidMount is -  ${i18n.language}`);
    this.setState({ lng: i18n.language })
  }
  handleChangeLanguage = ({ target }) => {
    const { value } = target;
    const { i18n } = this.props;
    i18n.changeLanguage(value);
    this.setState({ lng: value })
  }
  render() {
    const { t } = this.props;
    const { lng } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://react.i18next.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react.i18next
          </a>
          <div className="languageSwitcherHolder">
            <LanguageSwitcher currLng={lng}></LanguageSwitcher>
            <select className="selector" onChange={this.handleChangeLanguage}>
              <option value="uk" className="ukraine">українська</option>
              <option value="en">english</option>
              <option value="de">deutsch</option>
            </select>
          </div>
        </header>
        <Trans>
          <h1>{t('mainTitle')}</h1>
          <div className="wrapper">
            <div className="citieCard">
              <h2>{t('topic_1.title')}</h2>
              <img src={bostonImg} alt="boston" className="citieImg"></img>
              <p className="text">{t('topic_1.text_1')}</p>
              <p className="text">{t('topic_1.text_2')}</p>
            </div>
            <div className="citieCard">
              <h2>{t('topic_2.title')}</h2>
              <img src={maimiImg} className="citieImg" alt="maiami"></img>
              <p className="text">{t('topic_2.text_1')}</p>
              <p className="text">{t('topic_2.text_2')}</p>
            </div>
          </div>

        </Trans>

      </div >
    );
  }

}

export default withTranslation()(App);
