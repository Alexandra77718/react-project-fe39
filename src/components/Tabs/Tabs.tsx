import React, {FC, useState} from "react";

import styles from './Tabs.module.scss';
import classNames from 'classnames';
import { TabsProps } from "./type";


const Tabs: FC<TabsProps> = ({ tabsList, activeTab, onClick }) => {
    
    return (
        <div className={styles.container}>
            {tabsList.map((tab) => {
                return (
                    <div key={tab.key} className={classNames(styles.tab, {
                        [styles.activeTab]: activeTab === tab.key,
                        [styles.disabled]: tab.disabled,
                    })}
                        onClick={tab.disabled ? undefined : onClick(tab.key)}
                    >
                        {tab.title}
                    </div>
                );
            })}
        </div>
    );
};

export default Tabs;