import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);
    const [toShow, setToShow] = useState<Level | null>(null);

    const handleCalculateButton = () => {
        if (heightField && weightField) {
            setToShow(calculateImc(heightField, weightField));
        } else {
            alert('Digite todos os campos.');
        }
    };

    const handleBackButton = () => {
        setToShow(null);
        setHeightField(0);
        setWeightField(0);
    };

    return (
        <div className={styles.main}>
            <header className={styles.headerContainer}>
                <img src={poweredImage} alt="imagem logo" width={150} />
            </header>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC.</h1>
                    <p>
                        IMC é a sigla para o índice de Massa Corpórea, parâmetro
                        adotado pela organização mundial de saúde para calcular
                        o peso ideal de cada pessoa
                    </p>
                    <input
                        type="number"
                        placeholder="Digite a sua altura. EX: 1.5 (em metros)"
                        value={heightField > 0 ? heightField : ''}
                        onChange={(e) =>
                            setHeightField(parseFloat(e.target.value))
                        }
                        disabled={toShow ? true : false}
                    />
                    <input
                        type="number"
                        placeholder="Digite o seu peso. EX: 75.3 (em kg)"
                        value={weightField > 0 ? weightField : ''}
                        onChange={(e) =>
                            setWeightField(parseFloat(e.target.value))
                        }
                        disabled={toShow ? true : false}
                    />
                    <button
                        onClick={handleCalculateButton}
                        disabled={toShow ? true : false}
                    >
                        Calcular
                    </button>
                </div>
                <div className={styles.rightSide}>
                    {!toShow && (
                        <div className={styles.grid}>
                            {levels.map((item, key) => (
                                <GridItem key={key} item={item} />
                            ))}
                        </div>
                    )}
                    {toShow && (
                        <div className={styles.rightBig}>
                            <div
                                className={styles.rightArrow}
                                onClick={handleBackButton}
                            >
                                <img src={leftArrowImage} alt="" width={25} />
                            </div>
                            <GridItem item={toShow} />
                        </div>
                    )}
                </div>
                <div className={styles.anunciosrightSide}>
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9393326410573324"
                    ></script>

                    <ins
                        className={styles.adsbygoogle}
                        data-ad-client="ca-pub-9393326410573324"
                        data-ad-slot="4560904069"
                        data-ad-format="auto"
                        data-adtest="on"
                        data-full-width-responsive="true"
                    ></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>
            </div>
        </div>
    );
};

export default App;
