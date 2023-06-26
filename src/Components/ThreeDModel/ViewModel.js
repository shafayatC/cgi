import React, { useRef } from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
import ModalModel from '../Modal/ModalModel';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useEffect } from 'react';
// import Image3DView from '../Image3DView/Image3DView';
import { lazy } from 'react';

const Image3DView = lazy(() => import('../Image3DView/Image3DView'));

const Loading = ({ imgSample }) => {
    return (
        <div className='h-[500px] w-full relative flex flex-col justify-center animate-pulse'>
            <img className='mx-auto w-full h-full opacity-80' src={imgSample} />
            <div className='absolute top-0 left-0 bg-gray-600 opacity-95 w-full h-full flex flex-col justify-center z-50 text-center font-bold text-3xl'>
                <h2 className='text-white'>Loading 3D Model</h2>
            </div>
        </div>
    );
}

const ViewLoading = ({ imgSample }) => {
    return (
        <div className='w-full h-full relative flex flex-col justify-center'>
            <img className='mx-auto w-full h-full' src={imgSample} />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center z-50 text-center font-bold text-3xl'>
                <i class="fa-solid fa-circle-notch text-shade-color animate-spin"></i>
            </div>
        </div>
    )
}
const ViewModel = ({ children, imgSample, imageList = [] }) => {
    const [getOpen, setOpen] = useState(false)
    const [getFullScreen, setFullScreen] = useState(false);
    const [getViewSample, setViewSample] = useState(false);

    const HandleClose = () => {
        setOpen(false)
    };


    function openFullscreen() {
        const elem = document.getElementById("modelWrapper");

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
    /* Close fullscreen */
    function closeFullscreen() {
        const elem = document.getElementById("modelWrapper");

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    const fullscreenFunc = () => {
        const viewBool = getFullScreen;
        setFullScreen(!viewBool);

        if (viewBool) {
            closeFullscreen();
        } else {
            openFullscreen();
        }

    }

    useEffect(() => {
        document.addEventListener('keydown', (event) => {

            if (event.key === 'Escape') {
                console.log('Escape key was pressed with out any group keys')
                const viewBool = getFullScreen;
                setFullScreen(!viewBool);
            }
        })

    }, [])

    return (
        <>
            <div onClick={() => setOpen(true)} onMouseEnter={() => setViewSample(true)} className='h-full w-full relative cursor-pointer'>

                {
                    imageList.length == 0 ?
                        <Suspense fallback={<div className='w-full h-full bg-slate-400 animate-pulse'></div>}>
                            <img className='w-full h-full' src={imgSample} />
                        </Suspense> :
                        getViewSample == false &&
                        <Suspense fallback={<div className='w-full h-full bg-slate-900 animate-pulse'></div>}>
                            <img className='w-full h-full' src={imgSample} />
                        </Suspense>
                }

                {getViewSample && imageList.length > 0 &&
                    // <Image3DViewContainer>
                    //     <Image3DView imageList={imageList} />
                    // </Image3DViewContainer>
                    <Suspense fallback={<ViewLoading imgSample={imgSample} />}>
                        <Image3DView imageList={imageList} />
                        {/* {children} */}
                    </Suspense>
                }
            </div>
            {getOpen &&
                <div
                    id="imgPopupWrap"
                    className={"fixed top-0 z-10 left-0 w-full h-full"}
                >
                    <div onClick={HandleClose} className="bgshadow"></div>
                    <div className="product-container flex gap-8 p-8 bg-white ">
                        <Suspense fallback={<Loading imgSample={imgSample} />}>
                            <div id='modelWrapper' className='h-[500px] w-full relative'>
                                {children}
                                <div className='absolute bottom-0 h-7 w-full z-50'>
                                    <div className="flex flex-row justify-end gap-10 px-6 pb-5 h-full items-center">
                                        <span onClick={fullscreenFunc} className="rounded-full w-7 h-7 text-center flex items-center cursor-pointer text-sm self-center text-white hover:bg-slate-900">
                                            <i className="self-center mx-auto fa-solid fa-up-right-and-down-left-from-center"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </Suspense>
                    </div>
                    <span onClick={HandleClose} className="closeBtn cursor-pointer text-white font-bold" style={{ background: 'none' }}>
                        X
                    </span>
                </div>
            }


        </>

    );
};

export default ViewModel;