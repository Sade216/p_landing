import reactLogo from '../assets/react.svg'
import tsLogo from '../assets/typescript.svg'
import postgresLogo from '../assets/postgresql.svg'
import mongoLogo from '../assets/mongodb-icon-2.svg'


function Stacks() {
    return (
        <>
            <div id='stack' className="relative bg-slate-950 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg/8 font-semibold text-white">
                    The most used technology stack
                    </h2>
                    <div className="flex py-8 gap-30 lg:gap-30 flex-wrap justify-center items-center">
                        <img
                            alt="ts"
                            src={tsLogo}
                            className='size-15 lg:size-20'
                        />
                        <img
                            alt="react"
                            src={reactLogo}
                            className='size-15 lg:size-20'
                        />
                        <img
                            alt="postgresSQL"
                            src={postgresLogo}
                            className='size-15 lg:size-20'/>
                        <img
                            alt="mongoDB"
                            src={mongoLogo}
                            className='size-15 lg:size-20'
                        />
                    </div>
                </div>
            </div>       
        </>
    )
}

export default Stacks