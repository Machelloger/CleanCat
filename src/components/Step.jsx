function Step({number, header, text}) {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'space-between'
        }
    }
    return(
        <div style={styles.container}>
            <h2 style={{marginRight: '20px'}}>{number}</h2>
            <div>
                <p style={{textAlign: 'left'}}>{header}</p>
                <p style={{fontSize: '0.7em', textAlign: 'left'}}>{text}</p>
            </div>
        </div>
    );
}

export default Step;