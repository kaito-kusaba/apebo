import PlayEnvsContent from '../PlayEnvsContent'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default function PlayEnvsContentList() {
  const styles = useStyles()
  const { envs } = useInjection()
  return (
    <div className={styles.buttonContainer}>
      {envs.map(env => {
        return <PlayEnvsContent envs={env.env!} icon={env.icon} />
      })}
    </div>
  )
}
