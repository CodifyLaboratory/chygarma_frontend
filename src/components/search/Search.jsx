import css from "./search.module.css"
import Filter from "../../assets/img/filter.png"
import React from 'react';

export const Search = () => {
    return (
        <div className={css.search}>
            <input className={css.inp} placeholder={"Поиск"} type="text"/>
            <span><img src={Filter} alt=""/></span>
        </div>
    );
}
