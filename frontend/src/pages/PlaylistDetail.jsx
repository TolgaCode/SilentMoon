import SpotifyLogin from '../components/SpotifyLogin'
import Dashboard from '../components/Dashboard'
import '../sass/PlaylistDetail.scss'

const code = new URLSearchParams(window.location.search).get('code')


const PlaylistDetail = () => {
    
    return (
        <div className='playlistDetail'>
            {code ? <Dashboard code={code} /> : <SpotifyLogin />}
        </div>
        
    )
   
}
 
export default PlaylistDetail;