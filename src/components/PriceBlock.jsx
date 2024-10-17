function PriceBlock({topic, price, cleanTime, dryTime, imageUrl}) {
    const styles = {
        container: {
            // margin: '20px 40px 20px 40px'
        }
    }
    return(
        <div style={styles.container}>
            <p>{topic}</p>
            <img style={{height: '160px'}} alt='pricePhoto' src={imageUrl} />
            <p style={{fontSize: '0.7em'}}>Стоимость от {price}</p>
            <p style={{fontSize: '0.7em'}}> Время чистки {cleanTime} мин</p>
            <p style={{fontSize: '0.7em'}}>Высыхание {dryTime}</p>
        </div>
    );
};

export default PriceBlock;