import React from 'react'
import styles from '../../styles/paginas/eventos/Eventos.module.css'
import Titulo from '../otros/Titulo'
import Calendario from '../otros/Calendario'

function Eventos({dia}) {
  return (
    <div>
        <div className={styles.cont_titulo}>
            <Titulo text={dia} blanco={true} />
            <h5>2022</h5>
        </div>

        <div className={styles.principal}>
            <div className={styles.eventos}>
                <div className={styles.evento}>
                    <h4 className={styles.titulo}>Regatas vs Maipú</h4>
                    <h5 className={styles.tag}>Nacional A Menores 2021</h5>
                    <div className={styles.type}>
                        <h5>Partido</h5>
                    </div>
                </div>
                <div className={styles.evento}>
                    <h4 className={styles.titulo}>Los juveniles citados a la preselección</h4>
                    <h5 className={styles.tag}>Sudamericano Juveniles 2022</h5>
                    <div className={styles.type}>
                        <h5>Noticia</h5>
                    </div>
                </div>
            </div>
            <div className={styles.div_calendario}>
                <Calendario />
            </div>
        </div>
        
        
    </div>
  )
}

export default Eventos