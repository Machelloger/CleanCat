import PriceBlock from '../components/PriceBlock.jsx';
import styles from '../css/Organisations.module.scss'
import FAQBlock from '../components/FAQBlock.jsx';

function Organisations() {
    const priceData = [
        {
            key: 1,
            topic: 'Химчистка прямых диванов', 
            price: '500 р', 
            image: require('../assets/priceListImg/sofa-28 1.png'),
            cleanTime: '30-90', 
            dryTime: '4-8 часов'
        },
        {
            key: 2,
            topic: 'Химчистка угловых диванов', 
            price: '500 р', 
            image: require('../assets/priceListImg/1676300804_grizly-club-p-klipart-uglovoi-divan-16 1.png'),
            cleanTime: '20-60', 
            dryTime: '2-6 часов'
        },
        {
            key: 3,
            topic: 'Химчистка кресел', 
            price: '300 р', 
            image: require('../assets/priceListImg/armchair-41 1.png'),
            cleanTime: '30-60', 
            dryTime: '3-8 часов'
        },
        {
            key: 4,
            topic: 'Химчистка матрасов', 
            price: '300 р', 
            image: require('../assets/priceListImg/pngimg.com - mattresse_PNG63228 1.png'),
            cleanTime: '25-90', 
            dryTime: '4-8 часов'
        },
        {
            key: 5,
            topic: 'Химчистка офисных кресел', 
            price: '200 р', 
            image: require('../assets/priceListImg/Office-Chair 1.png'),
            cleanTime: '15-45', 
            dryTime: '2-4 часа'
        },
        {
            key: 6,
            topic: 'Химчистка стульев', 
            price: '250 р', 
            image: require('../assets/priceListImg/1675854405_grizly-club-p-belii-stul-klipart-7 1.png'),
            cleanTime: '15-35', 
            dryTime: '3-5 часов'
        },
        {
            key: 7,
            topic: 'Химчистка пуфов и банкетов', 
            price: '150 р', 
            image: require('../assets/priceListImg/14926 1.png'),
            cleanTime: '15-35', 
            dryTime: '2-5 часов'
        },
        {
            key: 8,
            topic: 'Химчистка ковров', 
            price: '120 р/кв.м', 
            image: require('../assets/priceListImg/pinpng.com-carpet-png-1051108 1.png'),
            cleanTime: '20-90', 
            dryTime: '3-5 часов'
        },
    ]
    return (
        <div className={styles.content}>
            <div className={styles.block1}>
                <h1>
                Химчистка диванов<br/>
                и мягкой мебели для организаций
                </h1>
                <p>
                    Работаем с любыми загрязнениями<br/>
                    Профессиональное оборудование<br/>Удаляем пятна и неприятные запахи<br/>
                    Гарантия результата
                </p>
                <div>
                    <p>Выезд в день обращения</p>
                    <p>Никаких предоплат</p>
                </div>
            </div>
            <div id='price' className={styles.block2}>
                <h1>
                    Услуги и цены
                </h1>
                <h3>
                    Рассчет стоимости производится индивидуально в зависимости от обьема работ и других критериев
                </h3>
                <p>Выезд мастера в пределах МКАД - бесплатный</p>
                <div className={styles.priceItemsContainer}>
                    {
                        priceData.map(item => {
                            return(
                                <PriceBlock key={item.key} topic={item.topic} price={item.price} 
                                cleanTime={item.cleanTime} dryTime={item.dryTime} imageUrl={item.image}/>
                            );
                        })
                    }
                </div>
            </div>
            <div className={styles.blockBeforeAfter}>
                <h1>
                    Результат нашей работы
                </h1>
                <p>
                    Каждый заказ мы выполняем бережно и внимательно, даем указания, что не испортим вашу мебель!
                </p>
                <div className={styles.beforeAfterPhotoGrid}>
                    <img src={require('../assets/BeforeAfterImg/image 1.png')} alt='' />
                    <img src={require('../assets/BeforeAfterImg/image 2.png')} alt='' />
                    <img src={require('../assets/BeforeAfterImg/image 3.png')} alt='' />
                    <img src={require('../assets/BeforeAfterImg/image 4.png')} alt='' />
                </div>
            </div>
            <div id='questions' className={styles.block5}>
                <h1>
                    Часто задаваемые вопросы
                </h1>
                <FAQBlock question={'Возможно ли вывести загрязнения, которым больше месяца или даже года?'} answer={'Возможно, если известно его происхождение и не подвергалось самостоятельным попыткам его выведения. Но даже при таких обстоятельствах мы выводим до 80% всех загрязнений.'} />
                <FAQBlock question={'Можно ли спать в помещениях после недавней химчистки?'} answer={'Да, можно. Неприятных запахов и вредных веществ от используемой химии в изделиях после химической чистки не остается.'} />
                <FAQBlock question={'Какие загрязнения вы устраняете, как насчет клея или акриловой краски?'} answer={'Все загрязнения классифицируются, благодаря этому на устранение любого загрязнения разработана определенная технология с применением химических средств и оборудования. Клей и акриловую краску также возможно вывести, если технолог определит, что это не повредит очищаемой поверхности.'} />
                <FAQBlock question={'Даете ли вы гарантию, что не испортите мебель или ковер?'} answer={'Мы гарантируем только бережное обращение с Вашим имуществом! До начала работ технолог определяет способ чистки и ухода не только исходя из загрязнений, но и исходя из типа материала, структуры волокна, его износа, стойкости к внешним воздействиям, и многих других факторов.'} />
                <FAQBlock question={'Какую технику и чистящие средства используете?'} answer={'Оборудование, инвентарь и химические средства - профессиональные, имеют сертификаты соответствия и паспорта фирмы изготовителя.'} />
            </div>
        </div>
    );
}

export default Organisations;