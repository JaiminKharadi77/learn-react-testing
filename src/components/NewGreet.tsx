type NewGreetProps = {
    name?: string
}


export default function NewGreet(props: NewGreetProps) {
    const { name = "" } = props
    return (
        <div>Hello {name}</div>
    )
}