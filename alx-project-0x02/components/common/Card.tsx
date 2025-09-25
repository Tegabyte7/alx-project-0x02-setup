import CardProps from '@/interfaces'


const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-lg text-gray-500">{content}</p>
        </div>
    )
}
export default Card;