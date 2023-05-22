export const withStyleButton = (WrapComponent: any) => {
    const ComponentWithStyle = (props: any) => {
        let className = 'text-green-600'
        if (props.type === 'primary') {
            className = 'text-red-600'
        }
        return <WrapComponent {...props} className={className} />
    }
    return ComponentWithStyle
}
