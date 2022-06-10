import { useStyles } from './style'

type Props = {
  platform: string | null
  icon: string
  onClick: () => void
  style?: string
}

export default function PlatformsContent({ platform, icon, onClick, style }: Props) {
  const styles = useStyles()
  return (
    <button className={`${styles.button} ${style}`} onClick={onClick}>
      <img className={styles.img} src={icon} alt="" />
      {platform}
    </button>
  )
}
