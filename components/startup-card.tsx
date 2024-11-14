import {EyeIcon} from "lucide-react";

const StartupCard = ({post }: {post: StartupTypeCard}) => {
    const { _createdAt, views, author: {_authorId, name}, title, category } = post;
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup_card_date'>
                    {formatDate(_createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary'/>
                    <span className='text-16-medium'>{views}</span>
                </div>
            </div>

            <div className='flex-between mt-5 gap-5'>
            </div>
        </li>
    )
}
export  default StartupCard