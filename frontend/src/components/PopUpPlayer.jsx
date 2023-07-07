
import '../sass/PopUpPlayer.scss'


export default function PopUpPlayer(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='pop-inner'>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        { props.children}
      </div>
    </div>
  ) : "";
}
