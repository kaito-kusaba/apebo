import PlatformsContent from '../PlatformsContent'
import { useInjection } from './hooks'
import { useStyles } from './style'

export default function PlatformsContentList() {
  const styles = useStyles()
  const { platforms } = useInjection()
  return (
    <div className={styles.buttonContainer}>
      {platforms.map(platform => {
        return <PlatformsContent platform={platform.platform!} icon={platform.icon} />
      })}
    </div>
  )
}
