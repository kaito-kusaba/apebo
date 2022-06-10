import { useStyles } from './style'

type Props = {
  platform: string
  icon: string
}

export default function PlatformsContent({ platform, icon }: Props) {
  const styles = useStyles()
  return (
    <div>
      <button className={styles.button}>
        <img className={styles.img} src={icon} alt="" />
        {platform}
      </button>
    </div>
  )
}
