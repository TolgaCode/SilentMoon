import '../sass/PopUpPlayer.scss'
import xBtn from '../assets/img/xBtn.png'

export default function PopUpPlayer(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <img src={xBtn} onClick={() => props.setTrigger(false)} alt="X-Button-as-icon" className='xBtn'/>
      <div className='pop-inner'>
        { props.children }
      </div>
    </div>
  ) : "";
}
