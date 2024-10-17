import '../css/Bubbles.scss'
import { isMobile } from 'react-device-detect';

function Bubbles() {
  const bubblestyleBigScreen = [
    {
      key: 1,
      width:'40px',
      height:'40px',
      left:'10%',
      animationDuration:'40s',
      animationDelay:'-10s',
    },
    {
      key: 2,
      width:'20px',
      height:'20px',
      left:'20%',
      animationDuration:'25s',
      animationDelay:'-10s',
    },
    {
      key: 3,
      width:'50px',
      height:'50px',
      left:'35%',
      animationDuration:'35s',
      animationDelay:'-10s',
    },
    {
      key: 4,
      width:'80px',
      height:'80px',
      left:'5%',
      animationDuration:'55s',
      animationDelay:'-30s',
    },
    {
      key: 5,
      width:'35px',
      height:'35px',
      left:'55%',
      animationDuration:'30s',
      animationDelay:'-10s',
    },
    {
      key: 6,
      width:'45px',
      height:'45px',
      left:'65%',
      animationDuration:'40s',
      animationDelay:'-30s',
    },
    {
      key: 7,
      width:'90px',
      height:'90px',
      left:'85%',
      animationDuration:'60s',
      animationDelay:'-20s',
    },
    {
      key: 8,
      width:'25px',
      height:'25px',
      left:'80%',
      animationDuration:'30s',
      animationDelay:'-2s',
    },
    {
      key: 9,
      width:'15px',
      height:'15px',
      left:'70%',
      animationDuration:'25s',
      animationDelay:'-10s',
    },
    {
      key: 10,
      width:'90px',
      height:'90px',
      left:'8%',
      animationDuration:'50s',
      animationDelay:'-4s',
    }
  ];
  const bubblestyleMobileScreen = [
    {
      key: 1,
      width:'40px',
      height:'40px',
      left:'10%',
      animationDuration:'40s',
      animationDelay:'-20s',
    },
    {
      key: 2,
      width:'20px',
      height:'20px',
      left:'15%',
      animationDuration:'25s',
      animationDelay:'-10s',
    },
    {
      key: 3,
      width:'50px',
      height:'50px',
      left:'90%',
      animationDuration:'35s',
      animationDelay:'-12s',
    },
    {
      key: 4,
      width:'35px',
      height:'35px',
      left:'55%',
      animationDuration:'30s',
      animationDelay:'-11s',
    },
    {
      key: 5,
      width:'45px',
      height:'45px',
      left:'65%',
      animationDuration:'40s',
      animationDelay:'-25s',
    },
    {
      key: 6,
      width:'15px',
      height:'15px',
      left:'70%',
      animationDuration:'25s',
      animationDelay:'-17s',
    },
    {
      key: 7,
      width:'90px',
      height:'90px',
      left:'8%',
      animationDuration:'50s',
      animationDelay:'-13s',
    }
  ];
    return(
        <div className='bubbles'>
            {
              isMobile ? 
              bubblestyleMobileScreen.map(itemStyle => {
                return(
                  <div key={itemStyle.key} style={itemStyle} className='bubble' />
                )
              })
              :
              bubblestyleBigScreen.map(itemStyle => {
                return(
                  <div key={itemStyle.key} style={itemStyle} className='bubble' />
                )
              })
            }
        </div>
    )
}

export default Bubbles