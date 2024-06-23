import styles from './MercadosRegiao.module.css'
import mercadoLogo from '../../../assets/img/mercadodia.svg'
import MercadoCard from '../MercadoCard/MercadoCard'
import { useRef } from 'react'
import marketData from '../../../assets/data/marketData'
import HeaderConsumer from '../../../components/HeaderConsumer/HeaderConsumer'

function MercadosRegiao() {


    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }


    return (
        <section className={styles.mercados_regiao} id='container'>
            <div className={styles.title}>
                <i class="fa-solid fa-store"></i>
                <h2>Mercados na região</h2>
            </div>

            <div className={styles.carousel_prod} id='container' ref={carousel}>

                {marketData.map(({ img, name, andress, rate }) => (
                    <MercadoCard
                        name={name}
                        img={img}
                        andress={andress}
                        rate={rate} />
                ))}

            </div>

            <button className={styles.btn_carousel} onClick={handleLeftClick} id={styles.left}><i class="fa-solid fa-chevron-left" ></i></button>
            <button className={styles.btn_carousel} onClick={handleRightClick} id={styles.right}><i class="fa-solid fa-chevron-right" ></i></button>




        </section>
    )
}

export default MercadosRegiao;