import { useStyles } from './style'

type Props = {
  env: string
  icon: string
}

export default function PlayEnvsContent({ env, icon }: Props) {
  const styles = useStyles()
  return (
    <div>
      <button className={styles.button}>
        <img className={styles.img} src={icon} alt="" />
        {env}
      </button>
    </div>
  )
}
