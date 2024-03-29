import React, { ChangeEvent, FC, KeyboardEvent } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { Theme, useThemeContext } from 'src/context/Theme/Context';

type InputProps = {
    value: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    title?: string;
    placeholder: string;
    disabled?: boolean;
    errorText?: string;
    type?: string;
    className?: string;
    onBlur?: () => void
};

const Input: FC<InputProps> = ({
    value,
    onChange,
    title,
    type,
    placeholder,
    disabled,
    errorText,
    className,
    onKeyDown,
    onBlur,
}) => {
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    };
    const { theme } = useThemeContext();

    return (
        <div className={styles.container}>
        { title && (
            <div className={classNames(styles.title, {
                [styles.darkTitle]: theme === Theme.Dark,
            })}
            >{title}</div>
        )
        }      

            <input type={type} value={value} className={classNames(styles.input, className, {
                [styles.disabled]: disabled,
                [styles.valid]: errorText,
            })}
                placeholder={placeholder}
                onChange={onChangeText}
                onBlur={onBlur}
                disabled={disabled}
                onKeyDown={onKeyDown}
            />
            {errorText && <div className={styles.validText}>{errorText}</ div>}
        </div>
    );
};

export default Input;
