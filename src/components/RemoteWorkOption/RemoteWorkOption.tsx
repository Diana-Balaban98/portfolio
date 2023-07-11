import React from 'react';
import styleContainer from '../../common/styles/Container.module.css';
import s from './RemoteWorkOption.module.css'

export const RemoteWorkOption = () => {
    return (
        <div className={s.RemoteWorkOptionBlock}>
             <div className={styleContainer.container}>
                 <div className={s.wrapperRemoteWorkOption}>
                        <h3 className={s.title}>I am considering options for remote work</h3>
                     <button>Hire me</button>
                 </div>
             </div>
        </div>
    );
};

