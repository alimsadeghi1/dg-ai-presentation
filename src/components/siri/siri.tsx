import { FC } from 'react';
import { useStore } from '../../store';
import './siri.style.scss';

export const Siri: FC = () => {
    const store = useStore();

    return (
        <div
            className={`transition-opacity delay-400 duration-700 ease-in-out ${
                store.siri ? 'opacity-100' : 'opacity-0'
            }`}>
            <div className='container palette-4'>
                <div className='blobs'>
                    <svg viewBox='0 0 1200 1200'>
                        <g className='blob blob-1'>
                            <path />
                        </g>
                        <g className='blob blob-2'>
                            <path />
                        </g>
                        <g className='blob blob-3'>
                            <path />
                        </g>
                        <g className='blob blob-4'>
                            <path />
                        </g>
                        <g className='blob blob-1 alt'>
                            <path />
                        </g>
                        <g className='blob blob-2 alt'>
                            <path />
                        </g>
                        <g className='blob blob-3 alt'>
                            <path />
                        </g>
                        <g className='blob blob-4 alt'>
                            <path />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};
