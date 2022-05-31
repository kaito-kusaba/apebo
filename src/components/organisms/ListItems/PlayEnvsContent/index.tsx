import { useStyles } from './style'

type Props = {
  envs: string
  icon: string
}

export default function PlayEnvsContent({ envs, icon }: Props) {
  const styles = useStyles()
  return (
    <div>
      <button className={styles.button}>
        <img className={styles.img} src={icon} alt="" />
        {envs}
      </button>
    </div>
  )
}
