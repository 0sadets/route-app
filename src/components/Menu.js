import {Link} from 'react-router-dom';
export default function Menu()
{
    return(
        <div className='nav'>
            <nav>
                <Link  to="/Cheops">Cheops</Link>
                <Link  to="/HangingGardens">Hanging Gardens</Link>
                <Link  to="/TempleOfArtemis">Temple of Artemis</Link>
                <Link  to="/Zevs">Statue of Zeus</Link>
                <Link  to="/Mausoleum">Mausoleum</Link>
                <Link  to="/Colossus">Colossus</Link>
                <Link  to="/Lighthouse">Lighthouse</Link>
            </nav>
        </div>
    )
}