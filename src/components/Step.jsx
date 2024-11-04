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
            <h2 style={{margin: '15px 20px 0 0'}}>{number}</h2>
            <div>
                <div style={{textAlign: 'left', marginBottom: '0'}}>{header}</div>
                <div style={{fontSize: '0.7em', textAlign: 'left'}}>{text}</div>
            </div>
        </div>
    );
}

export default Step;