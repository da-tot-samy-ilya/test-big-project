import React, { type FC, type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from "../../../lib/classNames/classNames"
import cls from "./Modal.module.scss"
import { Portal } from "../../Portal/ui/Portal"
import { useTheme } from "../../../../app/providers/ThemeProvider"

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}
const ANIMATION_DELAY = 200
export const Modal: FC<ModalProps> = ({ className, children, onClose, isOpen }) => {
    const [isClosing, setIsClosing] = useState(false)

    const { theme } = useTheme()
    
    
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        setIsClosing(true)
        timeoutRef.current = setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, ANIMATION_DELAY)
    }, [onClose])
    const escapeHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", escapeHandler)
        }

        return () => {
            clearTimeout(timeoutRef.current)
            window.removeEventListener("keydown", escapeHandler)
        }
    }, [isOpen, escapeHandler])

    return (
        <Portal>
            <div className={classNames(cls.Modal, { [cls.Modal_open]: isOpen, [cls.isClosing]: isClosing }, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={classNames(cls.content)} onClick={(e) => { e.stopPropagation() }}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}
