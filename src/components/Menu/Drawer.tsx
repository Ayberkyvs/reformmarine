import React from "react"
import { Button, Drawer } from 'antd';
import { useState, cloneElement, ReactElement } from 'react';

export default function DrawerComponent({title="Menu", btnTitle, btnType="primary", btnClassName, children}: 
    {
        title?:string, 
        btnTitle: string | JSX.Element,
        btnType?:"primary" | "link" | "text" | "default" | "dashed" | undefined, 
        btnClassName?: string
        children?: any
    }) 
    {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return cloneElement(child as ReactElement, { onClose });
        }
        return child;
    });

    return (
        <>
        <Button type={btnType} onClick={showDrawer} className={btnClassName}>
            {btnTitle}
        </Button>
        <Drawer title={title} onClose={onClose} open={open}>
            {childrenWithProps}
        </Drawer>
        </>
    );
}