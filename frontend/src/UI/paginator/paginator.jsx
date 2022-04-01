import React from 'react';
import { Link } from 'react-router-dom';
import Mybutton from '../buttons/MyButton';

const Paginator = ({ page, changePage }) => {

    let barItems = [
        {id:1, title:'Users', to:'/users', addTitle:'Add Group'},
        {id:2, title:'Groups', to:'/groups',addTitle:'Add Group'},
    ]
    return (
        <div>
            <div className='navbar__header'>
            {barItems.map(p =>
                    <Link onClick={() => changePage(p)} key={p.id} className={window.location.pathname===p.to 
                        ? ' header__link_get header__link'
                        : 'header__link'  } to={p.to}><strong>{p.title}</strong>
                    </Link>
                    
            )}
            </div>

        </div>
    );
}

export default Paginator;
