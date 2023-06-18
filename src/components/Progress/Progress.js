import './Progress.css';
import {ReactComponent as StatisticLineStart} from '../../images/el1.svg'
import {ReactComponent as StatisticLineMedium} from '../../images/el2.svg'
import {ReactComponent as StatisticLineEnd} from '../../images/el3.svg'

function Progress(props) {
  return(
    <div className='progress'>
      <StatisticLineStart className='line-side line-side_left' style={{strokeDashoffset:props.statics[1]}} />
      <StatisticLineMedium className='line-medium' style={{strokeDashoffset:props.statics[2]}} />
      <StatisticLineEnd className='line-side line-side_right' style={{strokeDashoffset:props.statics[3]}} />
    </div>

  )
}

export default Progress;