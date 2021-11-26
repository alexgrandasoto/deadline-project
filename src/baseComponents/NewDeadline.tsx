import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment, useState } from 'react'
import CreateDeadline from './CreateDeadline'
import './NewDeadline.sass'

interface NewDeadlineProps {}

const NewDeadline: React.FC<NewDeadlineProps> = () => {
    const [modal, setModal] = useState(false)
    return (
        <Fragment>
            <div onClick={() => setModal(true)} className='flex cursor-pointer'>
                <div className='border border-green-600 rounded-full mr-4 flex justify-center h-8 w-8'>
                    <FontAwesomeIcon icon={faPlus} className='icon_new_deadline' />
                </div>
                <span>Create New Deadline</span>
            </div>
            {
                modal &&
                    <CreateDeadline />       
            }
        </Fragment>
    )
}

export default NewDeadline