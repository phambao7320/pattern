import { withStyleButton } from '../hoc/withStyle'
const Button = ({ action: handleClick, type, className }: any) => {
    console.log(type, className)
    return <button className={className} onClick={handleClick}>{`Button ${type}`}</button>
}

Button.displayName = 'Button'

export default withStyleButton(Button)
