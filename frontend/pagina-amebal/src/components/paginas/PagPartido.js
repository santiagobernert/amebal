import React from 'react'
import styles from "../../styles/paginas/pagpartido/PagPartido.module.css";
import "../../App.css";


function PagPartido({ titulo,
    equipo1,
    equipo2,
    categoria,
    sede,
    fecha,
    torneo,
    jornada,
    resultado }) {
  return (
    <div>
        <div className={styles.div_titulo}>
            <h2>{titulo}</h2>
        </div>
        <div className={styles.info}>
            <div className={styles.links}>
                <a href={torneo}>{torneo}</a>
                <a href={jornada}>{jornada}</a>
            </div>
            <div className={styles.static}>
                <div>
                    <h5 className="bold">Dia</h5>
                    <h5 className="light">{torneo}</h5>
                </div>
                <div>
                    <h5 className="bold">Sede</h5>
                    <h5 className="light">{sede}</h5>
                </div>
                <div>
                    <h5 className="bold">Categoría</h5>
                    <h5 className="light">{categoria}</h5>
                </div>
            </div>
            
        </div>
        <div className={styles.resultado}>
            <a href={`clubes/${equipo1}`}><img src={equipo1.imagen} alt={equipo1.abv} /></a>
            <div className={styles.detalles}>
                <div><h4>{equipo1.abv}</h4> <h4>{resultado.final_eq1}</h4></div>
                <h4>-</h4>
                <div><h4>{equipo2.abv}</h4> <h4>{resultado.final_eq2}</h4></div>
            </div>  
            <a href={`clubes/${equipo2}`}><img src={equipo2.imagen} alt={equipo2.abv} /></a>
        </div>
        <div className={styles.tabla}>
            <table>
                <thead>
                    <tr>
                        <td>Equipo</td>
                        <td>1T</td>
                        <td>2T</td>
                        <td>1S</td>
                        <td>2S</td>
                        <td>7M</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{equipo1.abv}</td>
                        <td>{resultado.parcial_eq1}</td>
                        <td>{resultado.final_eq1}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>{equipo2.abv}</td>
                        <td>{resultado.parcial_eq2}</td>
                        <td>{resultado.final_eq2}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.tabla}>
            <table>
                <thead>
                    <tr>
                        <td>
                            Oficiales
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A</td>
                        <td>Leonardo Belot</td>
                        <td>A</td>
                        <td>Federico De Cara</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>Alejandro Varas</td>
                        <td>B</td>
                        <td>Paul Paul</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.tabla}>
            <table>
                <thead>
                    <tr>
                        <td>
                            Goleadores
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jugador</td>
                        <td>Goles</td>
                        <td>Jugador</td>
                        <td>Goles</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Raul</td>
                        <td>Ramon</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.planilla}>
            <table>
                <thead>
                    <tr>
                        <td>
                            Planilla
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>N°</td>
                        <td>Jugador</td>
                        <td>A</td>
                        <td>2'</td>
                        <td>D</td>
                        <td>D+R</td>
                        <td>G</td>
                        <td>N°</td>
                        <td>Jugador</td>
                        <td>A</td>
                        <td>2'</td>
                        <td>D</td>
                        <td>D+R</td>
                        <td>G</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>1</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Alejo Martaux</td>
                        <td>x</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>3</td>
                        <td>2</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>2</td>
                        <td>-</td>
                        <td>-</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>2</td>
                        <td>3</td>
                        <td>Ardilla Ardilla</td>
                        <td>x</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>4</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>7</td>
                        <td>5</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>10</td>
                        <td>8</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>9</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>65</td>
                        <td>Alejo Martaux</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>35</td>
                        <td>Ardilla Ardilla</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <img src="https://placedog.net/300/250" />
        </div>
    </div>
  )
}

export default PagPartido