import NewDeadline from './baseComponents/NewDeadline'

interface DeadlineProps {}

const Deadline: React.FC<DeadlineProps> = () => {
    return (
        <div className='bg-gray-200 w-screen h-screen px-96 py-16'>
            <div className='bg-white h-full w-full p-9 rounded-md'>
                <h1 className='text-3xl text-center'>Customazible Deadline</h1>
                <NewDeadline />
            </div>
        </div>
    )
}

export default Deadline