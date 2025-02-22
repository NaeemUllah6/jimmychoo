import Button from './button'
const Calculator = () => {
    const buttons = [
        { number: 'C' }, { number: '/' }, { number: '*' }, { number: '-' }, { number: '7' }, { number: '8' }, { number: '9' },
        { number: '+' }, { number: '4' }, { number: '5' }, { number: '6' }, { number: '=' }, { number: '1' }, { number: '2' },
        { number: '3' }, { number: '0' }, { number: '.' },
    ]
    return (
        <div className='flex items-center justify-center bg-black flex-col h-screen'>
            <div className='p-3 bg-white rounded'>
                <input disabled className='mb-3 h-[70px] border focus:outline-none text-[#DFB83B] rounded bg-black py-2 px-3' type="text" />
                <div className='grid grid-cols-4 gap-1'>
                    {
                        buttons.map((button, index) => (
                            <Button className="w-full h-full" key={index}>{button.number}</Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Calculator
