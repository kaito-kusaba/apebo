import React, { useState, createContext, useContext, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useStyles } from './style'

export type AlertTypes = 'default' | 'error'

const AlertContext = createContext(({}: { text: string; type?: AlertTypes }) => {})
AlertContext.displayName = 'AlertContext'

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider: React.FC = ({ children }) => {
  const [showable, setShowable] = useState<boolean>(false)
  const [AlertText, setAlertText] = useState<string>('')
  const [AlertType, setAlertType] = useState<AlertTypes>('default')

  type showAlertTypes = { text: string; type?: AlertTypes }
  const showAlert = ({ text, type = 'default' }: showAlertTypes) => {
    setAlertText(text)
    setAlertType(type)
    setShowable(true)
  }

  useEffect(() => {
    return () => setShowable(false)
  }, [])

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      {createPortal(
        <Alert visible={showable} AlertType={AlertType}>
          {AlertText}
        </Alert>,
        document.body,
      )}
    </AlertContext.Provider>
  )
}

type AlertProps = {
  visible: boolean
  AlertType: AlertTypes
  children: string
}

const Alert: React.FC<AlertProps> = ({ visible, AlertType, children }) => {
  const styles = useStyles({ visible, AlertType })
  return (
    <div className={styles.container()}>
      <span className={styles.text}>{children}</span>
    </div>
  )
}
