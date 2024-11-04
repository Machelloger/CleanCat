import PriceBlock from '../components/PriceBlock.jsx';
import Step from '../components/Step.jsx';
import styles from '../css/Individual.module.scss'
import After from '../assets/priceListImg/after.png'   
import Before from '../assets/priceListImg/before.png'   
import {Splitter, SplitterPanel } from 'primereact/splitter'
import FAQBlock from '../components/FAQBlock.jsx';

const Individual = (props) => {
    const priceData = [
        {
            key: 1,
            topic: 'Химчистка прямых диванов', 
            price: '3000 р', 
            image: require('../assets/priceListImg/sofa-28 1.png'),
            cleanTime: '30-90', 
            dryTime: '4-8 часов'
        },
        {
            key: 2,
            topic: 'Химчистка угловых диванов', 
            price: '3590 р', 
            image: require('../assets/priceListImg/1676300804_grizly-club-p-klipart-uglovoi-divan-16 1.png'),
            cleanTime: '30-90', 
            dryTime: '4-8 часов'
        },
        {
            key: 3,
            topic: 'Химчистка кресел', 
            price: '1990 р', 
            image: require('../assets/priceListImg/armchair-41 1.png'),
            cleanTime: '30-60', 
            dryTime: '3-8 часов'
        },
        {
            key: 4,
            topic: 'Химчистка матрасов', 
            price: '1990 р', 
            image: require('../assets/priceListImg/pngimg.com - mattresse_PNG63228 1.png'),
            cleanTime: '25-90', 
            dryTime: '4-9 часов'
        },
        {
            key: 5,
            topic: 'Химчистка офисных кресел', 
            price: '800 р', 
            image: require('../assets/priceListImg/Office-Chair 1.png'),
            cleanTime: '15-45', 
            dryTime: '2-4 часа'
        },
        {
            key: 6,
            topic: 'Химчистка стульев', 
            price: '900 р', 
            image: require('../assets/priceListImg/1675854405_grizly-club-p-belii-stul-klipart-7 1.png'),
            cleanTime: '15-35', 
            dryTime: '3-5 часов'
        },
        {
            key: 7,
            topic: 'Химчистка пуфов и банкетов', 
            price: '790 р', 
            image: require('../assets/priceListImg/14926 1.png'),
            cleanTime: '15-35', 
            dryTime: '2-5 часов'
        },
        {
            key: 8,
            topic: 'Химчистка ковров', 
            price: '500 р/кв.м', 
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
                и мягкой мебели на дому
                </h1>
                <p style={{backgroundColor: 'rgba(179, 234, 252, 0.2)', borderRadius: '20px', width: 'fit-content', padding: '10px'}}>
                    Работаем с любыми загрязнениями<br/>
                    Профессиональное оборудование<br/>Удаляем пятна и неприятные запахи<br/>
                    Гарантия результата
                </p>
                <div className={styles.floattextBlock}>
                    <p className={styles.floattext}>Выезд в день обращения</p>
                    <p className={styles.floattext}>Никаких предоплат</p>
                </div>
            </div>
            <div id='price' className={styles.block2}>
                <h1>
                    Услуги и цены
                </h1>
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
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
                <button className='btnForm' onClick={props.formVisChanger()}>
                    Оставить заявку
                </button>
            </div>
            <div className={styles.block3}>
                <h1>
                    Процесс оказания услуг
                </h1>
                <p>3 простых шага и ваша мебель обретет первозданную чистоту!</p>
                <div className={styles.wrapper}>
                    <Step number={'01'} header={'Заявка на сайте'} text={<p>Оставьте заявку на сайте или по телефону +7(926)457-04-24. <br/> В течение 5 минут вам перезвонит наш оператор</p>} />
                    <Step number={'02'} header={'Оценка работ'} text={<p>Специалист оценивает степень загрязнения мебели, подбирает методы и средства и рассчитывает стоимость.</p>} />
                    <Step number={'03'} header={'Химчистка'} text={<p>Производится чистка мебели: выведение пятен и устранение неприятного запаха.</p>} />
                </div>
            </div>
            <div className={styles.block4}>
                <h1>Как проходит чистка мебели</h1>
                <p>Выезд мастера в пределах МКАД Бесплатный!</p>
                <div className={styles.wrapper}>
                    <Step number={'01'} header={'Сухая чистка'} text={<p>Обеспыливаем поверхность пылесосом для сухой уборки. Устраняем песок, пыль, волосы, шерсть и прочие загрязнения с мебели</p>} />
                    <Step number={'02'} header={'Обработка пятен'} text={<p>Замачиваем застарелые пятна. Выводим локальные пятна от фломастеров, ручки, краски и пр.</p>} />
                    <Step number={'03'} header={'Основная чистка'} text={<p>Производится чистка мебели: выведение пятен и устранение неприятного запаха.</p>} />
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <Splitter className={styles.splitter} style={{width: '70vw', border: '0px', background: 'none'}}>
                        <SplitterPanel className={styles.splitterPhoto} style={{display: 'flex', flexDirection: 'row', justifyContent: 'start', position: 'relative', overflow: 'hidden'}}>
                            <img draggable='false' style={{width: '70vw'}} src={Before} alt='beforeafter' />
                        </SplitterPanel>
                        <SplitterPanel className={styles.splitterPhoto} style={{display: 'flex', flexDirection: 'row', justifyContent: 'end', position: 'relative', overflowX: 'hidden'}}>
                            <img draggable='false' style={{width: '70vw'}} src={After} alt='beforeafter' />
                        </SplitterPanel>
                    </Splitter>
                </div>
                <div className={styles.wrapper}>
                    <Step number={'04'} header={'Обработка активным кислородом'} text={<p>Дезинфицируем мебель эко способом и обрабатываем антибактериальным составом</p>} />
                    <Step number={'05'} header={'Ополаскивание'} text={<p>Тщательно вымываем остатки моющего раствора из глубинных слоев мебели</p>} />
                    <Step number={'06'} header={'Удаление влаги'} text={<p>С помощью экстрактора максимально удаляем всю оставшуюся влагу из изделия, тем самым ускоряем процесс сушки</p>} />
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

export default Individual;