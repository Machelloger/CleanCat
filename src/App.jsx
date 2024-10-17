import './css/App.css'
import Individual from './Pages/IndividualPage.jsx'
import Organisations from './Pages/OrganisationsPage.jsx'
import './fonts/Manrope-ExtraLight.ttf'
import logo from './assets/logo.svg';
import { useRef, useState } from 'react';
import Bubbles from './components/Bubbles.jsx';
import {PrimeReactProvider} from 'primereact/api'
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { Dialog } from 'primereact/dialog';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { sendMessage } from './api/telegram.ts';
import { Button } from 'primereact/button';

function App() {
  const [swap, setSwap] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');
  const [material, setMaterial] = useState('');
  const [cleanType, setCleanType] = useState('');
  const toast = useRef(null)

  const [loading, setLoading] = useState(false);

  const accept = () => {
    toast.current.show({ severity: 'info', summary: 'Готово', detail: 'Ваш запрос принят', life: 3000 });
  };
  const reject = (text) => {
    toast.current.show({ severity: 'info', summary: 'Ошибка', detail: `${text}`, life: 3000 });
  };
  const SPECIAL_CHARS = [
    '\\',
    '_',
    '*',
    '[',
    ']',
    '(',
    ')',
    '~',
    '`',
    '>',
    '<',
    '&',
    '#',
    '+',
    '-',
    '=',
    '|',
    '{',
    '}',
    '.',
    '!'
  ]
  
  const escapeMarkdown = (text) => {
    SPECIAL_CHARS.forEach(char => (text = text.replaceAll(char, `\\${char}`)))
    return text
  }

  const handleSubmit = async () => {
    try {
      let message = `*Имя:* ${escapeMarkdown(name)}%0A*Номер:* ${escapeMarkdown(phoneNum)}%0A*Адрес:* ${escapeMarkdown(address)}%0A*Вид чистки:* ${escapeMarkdown(cleanType)}%0A*Материал*:${escapeMarkdown(material)}%0A`
      setLoading(true);
      await sendMessage(message);
      accept();
      setLoading(false);
    } catch(e) {
      reject(e);
    }
  };

  return (
    <PrimeReactProvider style={{width: '100vw'}}>
      <div className='Background'>
        <Bubbles />
        <div className="App">
          <div className='header'>
            <img width='20%' src={logo} alt='logo' />
            <div className='anchors'>
              <div style={{cursor: 'pointer'}}>
                <a style={{all: 'unset'}} href='#price'>
                Цены
                </a>
              </div>
              <div style={{cursor: 'pointer'}}>
                <a style={{all: 'unset'}} href='#questions'>
                Вопросы
                </a>
              </div>
              <div style={{cursor: 'pointer'}}>
                <a style={{all: 'unset'}} href='#contacts'>
                Контакты
                </a>
              </div>
              <div className='phoneNumber'>
                +7 (495) 208-58-75
              </div>
            </div>
          </div>
          <div className='switchButtons'>
            <button 
              style={swap ? {backgroundColor: 'rgba(255, 171, 71, 1)'} : {backgroundColor:'rgba(79, 112, 209, 1)'}} 
              onClick={() => {setSwap(false)}} className='btn1'> 
              Физ лицам
            </button>
            <button 
              style={swap ? {backgroundColor:'rgba(79, 112, 209, 1)'} : {backgroundColor: 'rgba(255, 171, 71, 1)'}} 
              onClick={() => {setSwap(true)}} className='btn1'> 
              Организациям
            </button>
          </div>
          <div>
            {swap ? <Organisations /> : <Individual />}
          </div>
          <div id='contacts' className='footer'>
            <h1>Связаться с нами</h1>
            <p>Вы можете оставить заявку и мы перезвоним Вам в ближайшее время</p>
            <a href='tel: +7(495)208-58-75'>+ 7 (495) 208-58-75</a>
            <button className='btnForm' onClick={() => setVisible(true)}>
              Оставить заявку
            </button>
            <form onSubmit={handleSubmit}>
              <Dialog className='DialogForm' header="Заявка" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <FloatLabel>
                    <InputText name='name' id="username" value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="username">Имя</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText name='phone' id="userphone" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
                    <label htmlFor="userphone">Телефон</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText name='address' id="useraddress" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <label htmlFor="useraddress">Адрес</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText name='cleanType' id="usercleantype" value={cleanType} onChange={(e) => setCleanType(e.target.value)} />
                    <label htmlFor="usercleantype">Вид чистки</label>
                </FloatLabel>
                <FloatLabel>
                    <InputText name='material' id="userMaterial" value={material} onChange={(e) => setMaterial(e.target.value)} />
                    <label htmlFor="userMaterial">Материал чистки</label>
                </FloatLabel>

                <Toast ref={toast} />
                <div className="confirmButton">
                    <Button loading={loading} onClick={handleSubmit}>
                      Отправить
                    </Button>
                </div>
              </Dialog>
            </form>
            <p className='littleText'>Информация на сайте не является публичной офертой</p>
            <p className='littleText' style={{marginBottom: '0', paddingBottom: '12px'}}>Все права защищены 2024 ©</p>
          </div>
        </div>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
