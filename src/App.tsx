import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateImc } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
    const [heightField, setHeightField] = useState<number>(0);
    const [weightField, setWeightField] = useState<number>(0);

    const handleCalculateButton = () => {
        if (heightField && weightField) {
        } else {
            alert('Digite todos os campos.');
        }
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
                    />
                    <input
                        type="number"
                        placeholder="Digite a seu peso. EX: 75.3 (em kg)"
                        value={weightField > 0 ? weightField : ''}
                        onChange={(e) =>
                            setWeightField(parseFloat(e.target.value))
                        }
                    />
                    <button onClick={handleCalculateButton}>Calcular</button>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.grid}>
                        {levels.map((item, key) => (
                            <GridItem key={key} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
