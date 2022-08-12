import React from 'react'
import styles from '../../styles/paginas/noticias/Noticias.module.css'

import Noticia from '../otros/Noticia'
import Articulo from '../otros/Articulo'
import ARTICULOS from '../../lists/articulos'
import Titulo from '../otros/Titulo'

function Noticias() {
  return (
    <div>
        <div className={styles.blob}></div>
        <Titulo text='Noticias' />
        <div className={styles.principal}>
            <Noticia 
            titulo='WAWAWA'
            img='https://placedog.net/150/80'
            cuerpo='Brand new whip got no keys, wawawa lil baby vs drake rkt kelkokeloke dj alan gome'
            principal={true}/>
        </div>
        <div className={styles.articulos}>
        {ARTICULOS &&
                ARTICULOS.map((item) => (
                  <Articulo key={item.id} titulo={item.titulo} img={item.img} />
                ))}
        </div>
    </div>
  )
}

export default Noticias