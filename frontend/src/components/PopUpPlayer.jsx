import '../sass/PopUpPlayer.scss'
import xBtn from '../assets/img/xBtn.png'

export default function PopUpPlayer(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='pop-inner'>
        <img src={xBtn} onClick={() => props.setTrigger(false)} alt="X-Button-as-icon" className='xBtn'/>
        { props.children }
      </div>
    </div>
  ) : "";
}
