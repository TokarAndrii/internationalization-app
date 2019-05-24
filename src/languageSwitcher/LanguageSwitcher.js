import React, { Component } from 'react';
import uk from './ukraine.png';
import de from './germany.png';
import en from './united-kingdom.png';
import styles from './LanguageSwitcher.module.css'

class LanguageSwitcher extends Component {

    render() {
        const { currLng } = this.props;
        return (
            <>
                {currLng === "uk" && (

                    <img className={styles.flagIcon} height="40px" src={uk} alt="uk"></img>
                )
                }
                {currLng === "en" && (

                    <img className={styles.flagIcon} height="40px" src={en} alt="en"></img>

                )
                }
                {currLng === "de" && (

                    <img className={styles.flagIcon} height="40px" src={de} alt="de"></img>
                )
                }

            </>
        )
    }
};

export default LanguageSwitcher;