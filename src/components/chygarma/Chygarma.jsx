import css from "./chygarma.module.css"

import React from 'react';

export const Chygarma = () => {
    return (
        <div className="container">
            <div className={css.titles}>
                <h1>ЧЫГАРМА</h1>
                <p className={css.p}>Кыргызский литературный портал, предоставляющий авторам возможность свободной публикации
                    произведений</p>
                <span>Кыргызча / Русский</span>
            </div>
        </div>
    );
}
